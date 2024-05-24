'use client'

import { useState } from "react";

export default function QuestAlert ({userdata}){

  let [questTitle, setQuestTitle] = useState(['퀘스트 열람하기', 16]);
  let quest = ['포켓몬 10마리 포획하기 - 완료 보상 : 500 ￦', '포켓몬 10마리 밀매하기 - 완료 보상 : 500 ￦', '비주기와 만나기 - 완료 보상 : 1000 ￦', '뮤 잡기 - 완료 보상 : 5000 ￦', '포켓몬 도감 완성하기 - 완료 보상 : ???'];

  return(
    <div>
      <h3 className="card-title mb-2" style={{cursor:'pointer', color:'grey', fontSize: questTitle[1]}}>{questTitle[0]}</h3>
      {
        quest.map((q,i) => {
          return(
            <div className="alert alert-info" role="alert" key={i}>
              {q}
            </div>  
          )
        })
      }

    </div>
  )
}