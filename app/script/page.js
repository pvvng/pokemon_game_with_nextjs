import { getServerSession } from "next-auth";
import Cat from "./Cat";
import { connectDB } from "@/util/database";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import userCheck from "../userCheck";
import LoginForm from "../LoginTools/LoginForm";


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

    if(userdata.script === '0'){
      return <Cat userdata={userdata} />
    }
    // script에 따라서 다른 컴포넌트 보여주기
}