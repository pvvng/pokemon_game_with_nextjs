import PokemonCard from "./PokemonCard"
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import userCheck from "../userCheck";

export default async function Document() {


  // login data 불러오기
  let session = await getServerSession(authOptions);

  //db userdata
  const db = (await connectDB).db('project-pokemon');
  let 유저데이터 = await db.collection('userdata').find().toArray();

  //db 에서 불러온 userdata 저장
  let { exist, userdata } = userCheck(유저데이터, session);

  let 유저포켓몬 = await db.collection('document').find({parent : new ObjectId(userdata._id)}).toArray();

  return <PokemonCard 유저포켓몬={유저포켓몬[0]}/>
}

