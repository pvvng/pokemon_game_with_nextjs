'use client'

import { useEffect, useState } from "react"

export default function BallDescription({userdata}){

  let [explainBox, setExplainBox] = useState('op');
  let [ballType, setBallType] = useState('');
  let [explainContent, setExplainContent]= useState('');

  useEffect(()=>{
    let a = setTimeout(()=>{
      setExplainBox('op');
      setBallType('');
      setExplainContent('');
    },3000)

    return()=>{clearTimeout(a)}
  },[ballType])

  return(
    <div>
      <div className={`item-container mt-1 ${explainBox}`} style={{borderRadius:'20px', marginBottom:'10px', transition:'all 1s', padding:'10px'}}>
          <p style={{fontWeight:'bold', margin:'0px'}}>{ballType}</p>
          <p style={{margin:'0px'}}>{explainContent}</p>
      </div>
      <div className="row">
          <div className="col-6" onClick={(e) => {
            setExplainBox('');
            setBallType('몬스터 볼')
            setExplainContent('포켓몬을 포획할 때 사용하는 몬스터 볼이다. 별다른 능력은 없어보인다.')
          }}>
            <img src="/images/몬스터볼.webp" width={'100%'}/>
            {userdata.ball}개
          </div>
          <div className="col-6" onClick={(e) => {
              setExplainBox('');
              setBallType('슈퍼 볼')
              setExplainContent('포켓몬을 포획할 때 사용하는 슈퍼 볼이다. 포획 성공 확률을 1.5배 증가시킨다.')
            }}>
            <img src="/images/슈퍼볼.webp" width={'100%'}/>
            {userdata.sball}개
          </div>
          <div className="col-6"onClick={(e) => {
              setExplainBox('');
              setBallType('하이퍼 볼')
              setExplainContent('희귀한 몬스터 볼이다. 포획 성공 확률을 2배 증가시킨다.')
            }}>
            <img src="/images/하이퍼볼.webp" width={'100%'}/>
            {userdata.hball}개
          </div>
          <div className="col-6" onClick={(e) => {
              setExplainBox('');
              setBallType('마스터 볼')
              setExplainContent('매우 희귀한 몬스터 볼이다. 그 어떤 포켓몬이든 100% 포획 가능하다.')
            }}>
            <img src="/images/마스터볼.webp" width={'100%'}/>
            {userdata.mball}개
          </div>
      </div>
    </div>
  )

}