'use client'

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function VsPolice({userdata}) {
  let context =([
    `  반갑다. ${userdata.name}. 다시 볼 일이 없었으면 했는데.`,
    ' 오늘은 발뺌할 생각마라. 널 체포하라는 지시를 받고 오는 길이니까.',
    ` 저항한다면 무력 진압할테니까 순순히 잡히는게 좋을거다.`,
    ` 그래.. 기어이 피를 보겠다는거냐?`,
  ]);

  let [contextState, setContextState] = useState(0);
  let [typedText, setTypedText] = useState('');
  let [componentStatus, setComponentStatus] = useState('');
  let router = useRouter();
  let [yesBtn, setYesBtn] = useState('op');

  useEffect(() => {
    let interval;

    if(contextState < context.length){
      setTypedText(''); // 초기화
      let index = 0;
      const currentText = context[contextState];
  
      interval = setInterval(() => {
        // 텍스트를 50ms마다 state에 하나씩 추가
        setTypedText((prev) => prev + currentText[index]);
        index++;
        if (index === currentText.length - 1) {
          clearInterval(interval);
        }
      }, 50); // 50ms 간격으로 글자 추가
    }
    return () => clearInterval(interval); // 정리 함수로 interval 클리어
  }, [contextState]);

  useEffect(()=>{
    console.log(contextState)
    if (contextState === 3){
      setYesBtn('');
    }
  },[contextState])

  return (
    <div className={componentStatus} style={{ width: '100%', height: '100vh', background: 'white', position: 'absolute', top: 0,}}>
      <div style={{ maxWidth: '720px', marginLeft: 'auto', marginRight: 'auto' }}>
        <p style={{ textAlign: "center", marginTop: '20px' }}>말풍선을 터치하세요</p>
        <div style={{display:'flex', justifyContent:'center'}}>
          <img src='/국제경찰.webp' width={'25%'} style={{marginLeft:'auto', marginRight:'auto'}}/>
        </div>

        <div className='speech-bubble' style={{ cursor: 'pointer' }} onClick={() => {
          setContextState((prevState) => (prevState + 1)); 

        }}>
          <p className='card-title' style={{ color: 'white' }}>[핸섬]</p>
          <p style={{ color: 'white', whiteSpace: 'pre-wrap' }}>{typedText}</p>
        </div>
        <div className={`m-2 ${yesBtn}`} style={{textAlign:'center'}}>
          <p className="card-title">버튼을 클릭하면 핸섬과의 전투가 시작됩니다!</p>
          <button className={`btn btn-danger m-2`} onClick={()=>{
            if(contextState >= context.length-1){
              setComponentStatus('op');
              // user의 script + 1 하는 api
              // axios.put('/api/update/script', userdata);
              // router.push('/');
              // 마이페이지를 refresh하는 목적임. 마이페이지가 refresh되지 않으면
              // user의 notorious나 script가 업데이트 되지 않아서 스크립트가 계속 반복되기 때문임
              router.refresh();
            }
          }}>덤비세요 아저씨</button>
        </div>
      </div>
    </div>
  );
}