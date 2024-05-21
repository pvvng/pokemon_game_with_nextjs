// 사용시 body에서 monsterball 갯수 수정 필요

import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답){

    if(요청.method === 'PUT'){
        let 넣을거 = {...요청.body}
        delete 넣을거._id;

        let db = (await connectDB).db('project-pokemon')
        let result = await db.collection('userdata').updateOne(
            { _id : new ObjectId(요청.body._id) }, 
            { $set : 넣을거 } 
        );
        응답.status(200).json('왔음');
    }
}