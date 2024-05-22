import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";

export default async function handler (요청, 응답){

    if(요청.method === 'POST'){
        let 넣을거 = {...요청.body};

        넣을거.user_id = new ObjectId (요청.body.user_id)
        const db =(await connectDB).db('project-pokemon');
        let res1 = await db.collection('pokemon').insertOne(넣을거);

        // 포켓몬 도감 등록 위해서 document collcetion에 포획한 포켓몬 데이터 어레이 형식으로 넣기
        let 유저포켓몬 = await db.collection('document').find({parent : new ObjectId(요청.body.user_id)}).toArray()
        if(유저포켓몬.length === 0){
            await db.collection('document').insertOne(
                {parent : new ObjectId(요청.body.user_id), user_document:[넣을거.id]}
            )
        }else{
            let copy = [...유저포켓몬[0].user_document];
            copy.push(넣을거.id);
            await db.collection('document').updateOne(
                { parent : new ObjectId(요청.body.user_id) },
                { $set : {user_document : [...copy]} }
            )
        }
        응답.status(200).json('GOTCHA!!');
    }

}