import { getServerSession } from 'next-auth';
import './battle.css'
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { connectDB } from '@/util/database';
import userCheck from '@/app/userCheck';
import LoginForm from '@/app/LoginTools/LoginForm';
import MyPokemon from './MyPokemon';
import fetchData from '@/app/get_pokemon';

export default async function Battle (){

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


    if(userdata.notorious >= '55' && userdata.script === '4'){
        // 핸섬과의 전투
        let enemy = 'h';

        return(
            <div className='container'>
                <MyPokemon dbPokemon={dbPokemon} enemy={enemy}/>
            </div>
        )
    }else{
        // 관장과의 전투
        let enemy = 'm'
        return(
            <div className='container'>
                <MyPokemon dbPokemon={dbPokemon} enemy={enemy}/>
            </div>
        )
    }


}