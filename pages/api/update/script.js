import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답){

  if(요청.method === 'PUT'){
  
    let 바꿀거 = {...요청.body};
    delete 바꿀거._id;
    바꿀거.script = (parseInt(바꿀거.script) + 1).toString();

    const db = (await connectDB).db('project-pokemon');
    let res = await db.collection('userdata').updateOne(
      {_id : new ObjectId(요청.body._id)},
      {$set : 바꿀거}
    )
    return 응답.status(200).json('왔음');
  
  }


}