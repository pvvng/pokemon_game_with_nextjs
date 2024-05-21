import { getServerSession } from "next-auth";
import Cat from "./scriptType/Cat";
import { connectDB } from "@/util/database";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import userCheck from "../userCheck";
import LoginForm from "../LoginTools/LoginForm";
import Boss from "./scriptType/Boss";


export default async function () {

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

    // script에 따라서 다른 컴포넌트 보여주기

    if(userdata.script === '0' && userdata.notorious === '0'){
      return <Cat userdata={userdata} />
    }else if(userdata.script === '1' && parseInt(userdata.notorious) >= 50){
      return <Boss userdata={userdata} />
    }
    else{
      return(
        <h1 style={{textAlign:'center'}}>정상적이지 않은 접근 경로입니다.</h1>
      )
    }
}