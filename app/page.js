import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import 'bootstrap/dist/css/bootstrap.min.css';
import { connectDB } from "@/util/database";
import LoginForm from "./LoginTools/LoginForm";
import userCheck from "./functions/userCheck";
import IllegalMarket from "./mainPageComponent/IllegalMarket";
import { redirect } from "next/navigation";
import BallDescription from "./mainPageComponent/BallDescription";
import Purchase from "./mainPageComponent/Purchase";
import QuitBtn from "./mainPageComponent/QuitBtn";
import QuestAlert from "./mainPageComponent/QuestAlert";

export default async function Home() {

    // login data 불러오기
    let session = await getServerSession(authOptions);

    //db userdata
    const db = (await connectDB).db('project-pokemon');
    let dbUserdata = await db.collection('userdata').find().toArray();


    //db 에서 불러온 userdata 저장
    let { exist, userdata } = userCheck(dbUserdata, session);

    if(!exist){
        //db에 현재 로그인한 유저 정보가 없을때만 form 보여주기
        return(
        <LoginForm session={session}/>
        )
    }

    // 로그인 한 user의 id와 일치하는 정보를 가진 포켓몬만 불러오기
    let dbPokemon = await db.collection('pokemon').find({user_id : userdata._id}).toArray();

    scriptHandler(userdata);

    if(session !== null){
        return(
        <div className="main-container">
            {/* <QuestAlert userdata={userdata}/> */}
            {/* username */}
            <div className="mb-3">
                <div className="row">
                    <span className="col-6" style={{fontSize:'2rem', fontWeight:'bold'}}>{userdata.name}</span>
                    <div className="col-6" style={{textAlign:'right'}}>
                        <img src="/images/coin.png" width={'30px'}/>
                        <span>{(userdata.gold).toString()} ￦</span>
                    </div>
                </div>

                <p style={{fontWeight:'bold'}}>[로켓단]</p>

                {/* 악명 progressbar */}
                <span style={{marginTop:'10px'}}>악명</span>
                {/* 가진 악명 * 10 % */}
                <div className="progress" role="progressbar" aria-label="Example with label" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar" style={{width: `${(userdata.notorious).toString()}%`, background:'#111111'}}>{parseInt(userdata.notorious)}</div>
                </div>
            </div>

            <div className="row" style={{alignItems:'center'}}>
                {/* image */}
                <div className="col-md-6" style={{background:'#eee', borderRadius:'20px', marginBottom:'10px'}}>
                    {
                    userdata.gender === '남'?
                    <div>
                        <img src="/images/조무래기-남.png" width={'100%'} style={{marginTop:'auto', marginBottom:'auto'}}/>
                    </div>:
                    <img src="/images/조무래기-여.png" width={'100%'}/>
                    }
                </div>

                {/* content */}
                <div className="col-md-6" style={{textAlign:"center"}}>

                    {/* 가진 포켓몬 map */}
                    <div className="content-container">
                        <h5 className="card-title">보유한 포켓몬</h5>
                        
                        <IllegalMarket userdata={userdata} dbPokemon={dbPokemon} />
                    </div>

                    {/* item map */}
                    <div className="content-container">
                        <h5 className="card-title">보유 아이템</h5>
                        <BallDescription userdata={userdata} />
                        <Purchase />
                    </div>
                </div>
            </div>   
            <div className="mt-5" style={{textAlign:"right"}}>
                <QuitBtn userdata={userdata} />
            </div>
        </div>
        )
    }
}

function scriptHandler(userdata){
    if(userdata.notorious === '0' && userdata.script === '0'){
        // 로켓단에 온걸 환영해
        redirect('/script');
    }else if(parseInt(userdata.notorious) >= 50 && userdata.script === '1'){
        // 비주기의 음모
        redirect('/script');
    }else if (parseInt(userdata.notorious) >= 100 && userdata.script === '3'){
        // 진짜 유명한 나쁜 놈
        redirect('/script');
    }
    else if (parseInt(userdata.notorious) >= 100 && userdata.script === '4'){
        // 엔딩
        redirect('/script');
    }
}


