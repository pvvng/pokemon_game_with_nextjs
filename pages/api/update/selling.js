import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler (요청, 응답){

  if(요청.method === 'PUT'){

    let 바꿀거 = {...요청.body};
    바꿀거.gold = (parseInt(바꿀거.gold) + 500).toString();
    바꿀거.notorious = (parseInt(바꿀거.notorious) + 1).toString();

    // update 요청시에는 바꿀 데이터에서 찾으려는 데이터의 값을 제거해야지 정상 작동한다
    delete 바꿀거._id;
  
    const db = (await connectDB).db('project-pokemon');
    let res = await db.collection('userdata').updateOne(
      { _id : new ObjectId(요청.body._id) } ,
      { $set : 바꿀거 }
    )
  
    응답.status(200).json('왔다');
  }
}