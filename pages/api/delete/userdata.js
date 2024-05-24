import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답){

    let deleteUserId = 요청.body

    console.log(deleteUserId)

    if (요청.method === 'DELETE'){
        const db = (await connectDB).db('project-pokemon');

        let result_pokemon = await db.collection('pokemon').deleteMany({user_id : new ObjectId(deleteUserId)});
        let result_document = await db.collection('document').deleteMany({parent : new ObjectId(deleteUserId)})
        let result_userData = await db.collection('userdata').deleteOne({_id : new ObjectId(deleteUserId)})

        응답.status(200).json('지울게~');
    }

}