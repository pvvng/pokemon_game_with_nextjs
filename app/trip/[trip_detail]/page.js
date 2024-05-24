import LoginForm from "@/app/LoginTools/LoginForm";
import userCheck from "@/app/functions/userCheck";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import RenderRandPokemonData from "../renderRandPokemon/RenderRandPokemonData";

export default async function tripDetail(props){

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

  let nowPath = '/trip/' + props.params.trip_detail;

  if(nowPath === '/trip/deep-forest'){
    return <RenderRandPokemonData 서식지1 = 'forest' 서식지2 ='cave' userdata={userdata}/>
  }
  if(nowPath === '/trip/mountain'){
    return <RenderRandPokemonData 서식지1 = 'mountain' 서식지2 ='rough-terrain' userdata={userdata}/>
  }
  if(nowPath === '/trip/ocean'){
    return <RenderRandPokemonData 서식지1 = 'sea' 서식지2 ='waters-edge' userdata={userdata}/>
  }
  if(nowPath === '/trip/urban'){
    return <RenderRandPokemonData 서식지1 = 'grassland' 서식지2 ='urban' userdata={userdata}/>
  }else{
    return <p>없는 페이지입니다</p>
  }
}