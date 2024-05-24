import Link from 'next/link'
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { connectDB } from '@/util/database';
import userCheck from '../functions/userCheck';
import LoginForm from '../LoginTools/LoginForm';

export default async function Trip(){

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
        <div style={{textAlign:'center'}}>
            <h2 style={{textAlign:'center', fontWeight:'bold'}} className='typewriter mb-2'>어디로 갈까?</h2>
            <img src='/images/path.jpeg' width={'100%'} style={{maxWidth:'728px'}}/>
            <div className='m-4'>
                <Link className='Link-none-deco marker mx-2' href={'/trip/center'}>포켓몬 센터</Link>
                <Link className='Link-none-deco marker mx-2' href={'/trip/dr-ohs-lab'}>오박사의 연구소</Link>
            </div>

            <div className='mb-4'>
                <Link className='Link-none-deco marker mx-2' href={'/trip/mountain'}>산</Link>
                <Link className='Link-none-deco marker mx-2' href={'/trip/ocean'}>바다</Link>
                <Link className='Link-none-deco marker mx-2' href={'/trip/urban'}>시내</Link>
                <Link className='Link-none-deco marker mx-2' href={'/trip/deep-forest'}>깊은숲</Link>
            </div>

        </div>
    )
}