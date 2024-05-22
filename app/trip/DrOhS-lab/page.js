import { connectDB } from "@/util/database";
import RenderRandPokemonData from "../renderRandPokemon/RenderRandPokemonData";
import userCheck from "@/app/functions/userCheck";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import LoginForm from "@/app/LoginTools/LoginForm";
import ScriptComponent from "../DrOhS-lab/ScriptComponent";

export default async function (){

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

  if(userdata.notorious >= 30 && userdata.script === '2'){
    return <ScriptComponent userdata={userdata} />
  }else if(userdata.script >= 3){
    return (
      <div style = {{maxWidth:'720px', marginLeft:'auto', marginRight:'auto'}}>
        <img src='/images/dr.oh.webp' width={'100%'}/>
  
        <div className='speech-bubble'>
            <p className='card-title' style={{color:'white'}}>[오박사]</p>
            <p className='typewriter' style={{color:'white'}}>이상하다.. 누가 훔쳐갔나..</p>
        </div>
      </div>
    )
  }else{
    return (
      <div style = {{maxWidth:'720px', marginLeft:'auto', marginRight:'auto'}}>
        <img src='/images/dr.oh.webp' width={'100%'}/>
  
        <div className='speech-bubble'>
            <p className='card-title' style={{color:'white'}}>[오박사]</p>
            <p className='typewriter' style={{color:'white'}}>오늘의 포켓몬은 뭘까요옹?</p>
        </div>
      </div>
    )
  }


}
