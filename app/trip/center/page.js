import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { connectDB } from '@/util/database';
import userCheck from '../../userCheck';
import LoginForm from '../../LoginTools/LoginForm';

export default async function Store(){

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

    return(
        <div>
            <img src='/store.jpg' width={'100%'}/>

            <div className='speech-bubble'>
                <p className='typewriter' style={{color:'white'}}>빨리 사고 나가세요~</p>
            </div>
            <div className='item-container'>
                <button className='btn btn-secondary mx-2'>몬스터볼</button>
                <button className='btn btn-secondary mx-2'>상처약</button>
                <button className='btn btn-secondary mx-2'>회복</button>
            </div>
        </div>
    )
}