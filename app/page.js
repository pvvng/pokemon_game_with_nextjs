import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import 'bootstrap/dist/css/bootstrap.min.css';
import { connectDB } from "@/util/database";
import LoginForm from "./LoginTools/LoginForm";

export default async function Home() {

  // login data 불러오기
  let session = await getServerSession(authOptions);

  //db userdata
  const db = (await connectDB).db('project-pokemon');
  let result = await db.collection('userdata').find().toArray();

  // db 에서 불러온 userdata 저장
  let userdata

  if (result.length !== 0 && session !== null){
    let exist = false;
    result.map(data => {
      //db와 session data 중 겹치는 email이 존재하면 exist 를 true로
      if(data.email === session.user.email){
        exist = true;
        if(userdata === undefined){
          userdata = data;
        }
      }
    })
    if(!exist){
      //db에 현재 로그인한 유저 정보가 없을때만 form 보여주기
      return(
        <LoginForm session={session}/>
      )
    }
  }else{
    //db의 userdata가 비어있다면 form 보여주기
    return(
      <LoginForm session={session}/>
    )
  }

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
            <h2>트레이너 {userdata.name}</h2>

            <span style={{marginTop:'10px'}}>악명</span>
            {/* 가진 악명 * 10 % */}
            <div className="progress" role="progressbar" aria-label="Example with label" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar" style={{width: `${(userdata.notorious).toString() * 10}%`, background:'#111111'}}>{userdata.notorious}</div>
            </div>
            <div className="content-container">
              <p>포켓몬</p>
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
  }else{
    return(
      <div>
        <h2 style={{textAlign:'center', fontWeight:'bold'}}>로그인이 필요한 페이지입니다</h2>
      </div>
    )
  }
}


