'use client'

import { useRouter } from "next/navigation"

export default function Purchase(){
  let router = useRouter()
  return <button className="btn btn-secondary m-2" onClick={()=>{
    router.push('/trip/center');
  }}>더 구매하기</button>
}