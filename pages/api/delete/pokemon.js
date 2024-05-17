import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답){
  
  if (요청.method === 'DELETE'){
    const db = (await connectDB).db('project-pokemon');
    let result = await db.collection('pokemon').deleteOne({_id : new ObjectId(요청.body)});
    응답.status(200).json('삭제함');
  }
}