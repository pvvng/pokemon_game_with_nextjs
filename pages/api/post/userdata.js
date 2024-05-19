import { connectDB } from "@/util/database"

export default async function handler(요청, 응답){
    if(요청.method === 'POST'){
        if(요청.body.name === ''){
            return 응답.status(500).json('이름 똑바로 쓰십쇼');
        }

        const db = (await connectDB).db('project-pokemon');
        let res = await db.collection('userdata').insertOne(요청.body);

        응답.redirect(302,'/');
    }
}