import { connectDB } from "@/util/database";
import RenderRandPokemonData from "../renderRandPokemon/RenderRandPokemonData";
import userCheck from "@/app/functions/userCheck";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import LoginForm from "@/app/LoginTools/LoginForm";

export default async function mountain(){

  // login data 불러오기
  let session = await getServerSession(authOptions);

  //db userdata
  const db = (await connectDB).db('project-pokemon');
  let result = await db.collection('userdata').find().toArray();

  //db 에서 불러온 userdata 저장
  let { exist, userdata } = userCheck(result, session);

  if(!exist){
      //db에 현재 로그인한 유저 정보가 없을때만 form 보여주기
      return(
      <LoginForm session={session}/>
      )
  }


  return <RenderRandPokemonData 서식지1 = 'mountain' 서식지2 ='rough-terrain' userdata={userdata}/>

}

