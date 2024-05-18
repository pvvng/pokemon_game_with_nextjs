'use client'

import { useRouter } from "next/navigation";
import { useState } from "react"

export default function ScriptCounter({userdata}){

  let [script, setScript] = useState(false);
  let router = useRouter();

  if(userdata.notorious >= 0){
    router.push('/script')
  }
}