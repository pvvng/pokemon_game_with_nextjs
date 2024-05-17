import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";

export default async function handler (요청, 응답){

    if(요청.method === 'POST'){
        let 넣을거 = {...요청.body};
        넣을거.user_id = new ObjectId (요청.body.user_id)
        const db =(await connectDB).db('project-pokemon');
        let res = await db.collection('pokemon').insertOne(넣을거);

        응답.status(200).json('GOTCHA!!');
    }

}