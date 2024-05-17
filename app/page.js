import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import 'bootstrap/dist/css/bootstrap.min.css';
import { connectDB } from "@/util/database";
import LoginForm from "./LoginTools/LoginForm";
import userCheck from "./userCheck";
import { ObjectId } from "mongodb";

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

    console.log(userdata._id)
    let dbPokemon = await db.collection('pokemon').find().toArray();
    dbPokemon.map(a => {
        console.log(a.korean_name)

        if(a.user_id === userdata._id){
            console.log(a.user_id)
            console.log(a.korean_name)
        }}
    )
    // let userPokemon  
    // dbPokemon.map( pk => {
    //     console.log(`new ObjectId(${pk.user_id})`,`new ObjectId(${pk.user_id})` === userdata._id)

    //     if(new ObjectId(pk.user_id) === userdata._id){
    //         console.log(new ObjectId(pk.user_id) === userdata._id)
    //     }
    // });

    // console.log(userPokemon)
    // userPokemon.map(a => console.log(a._id))
  
    if(session !== null){
        return(
        <div className="main-container">
            <div className="row">

            {/* image */}
            <div className="col-md-6" style={{background:'#eee', borderRadius:'20px', marginBottom:'10px'}}>
                {
                userdata.gender === '남'?
                <img src="/조무래기-남.png" width={'100%'}/>:
                <img src="/조무래기-여.png" width={'100%'}/>
                }
            </div>

            {/* content */}
            <div className="col-md-6" style={{textAlign:"center"}}>
                <h2> {userdata.name}</h2>
                <p style={{fontWeight:'bold'}}>[로켓단]</p>

                <span style={{marginTop:'10px'}}>악명</span>
                {/* 가진 악명 * 10 % */}
                <div className="progress" role="progressbar" aria-label="Example with label" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar" style={{width: `${(userdata.notorious).toString() * 10}%`, background:'#111111'}}>{userdata.notorious}</div>
                </div>
                <div className="content-container">
                <p>보유한 포켓몬</p>
                {/* 가진 포켓몬 map */}
                </div>
                <div className="content-container">
                <p>아이템 / 골드</p>
                {/* item map */}
                <p>골드 : {(userdata.gold).toString()}</p>
                <p>아이템 : </p>
                </div>
                <div className="content-container">
                <p>업적</p>
                </div>
            </div>
            </div>   
        </div>
        )
    }
}



