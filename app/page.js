import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import 'bootstrap/dist/css/bootstrap.min.css';
import { connectDB } from "@/util/database";
import LoginForm from "./LoginTools/LoginForm";
import userCheck from "./userCheck";
import IllegalMarket from "./IllegalMarket";
import Purchase from "./purchase";
import Cat from "./script/page";
import { redirect } from "next/navigation";

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

    let award = [0,0,0,0,0];

    // 악명과 진행도에 따른 페이지 강제 전환
    if(userdata.notorious === '0' && userdata.script === '0'){
        // 로켓단에 온걸 환영해
        redirect('/script');
    }else if(userdata.notorious === '30' && userdata.script === '1'){
        // 비주기의 음모
        redirect('/script');
    }else if (userdata.notorious === '50' && userdata.script === '3'){
        // 국제경찰 코드네임 : 핸성
    }

    if(session !== null){
        return(
        <div className="main-container">
            {/* username */}
            <div className="mb-3">
                <div className="row">
                    <span className="col-6" style={{fontSize:'2rem', fontWeight:'bold'}}>{userdata.name}</span>
                    <div className="col-6" style={{textAlign:'right'}}>
                        <img src="/coin.png" width={'30px'}/>
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
                        <img src="/조무래기-남.png" width={'100%'} style={{marginTop:'auto', marginBottom:'auto'}}/>
                    </div>:
                    <img src="/조무래기-여.png" width={'100%'}/>
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
                        <div className="row">
                            <div className="col-6">
                                <img src="monsterball-front.png" width={'100%'}/>
                            </div>
                            <div className="col-6">
                                <img src="/상처약.png" width={'100%'}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                {userdata.ball}개
                            </div>
                            <div className="col-6">
                                {userdata.medi}개
                            </div>
                        </div>
                        <Purchase />
                    </div>
                </div>
            </div>   
            <div className="content-container">
                <h5 className="card-title">업적</h5>
                {
                    award.map((a,i)=>{
                        return(
                            <div className="award-container" key={i}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"/>
                                </svg>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        )
    }
}



