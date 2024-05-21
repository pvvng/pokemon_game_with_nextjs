import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function (요청, 응답){
  if( 요청.method === 'PUT'){


    let 넣을거 = {...요청.body};
    delete 넣을거._id;

    const db = (await connectDB).db('project-pokemon');
    let res = await db.collection('userdata').updateOne(
      { _id : new ObjectId(요청.body._id) },
      { $set : 넣을거 }
    )

    응답.status(200).json('왔음');
  }
}