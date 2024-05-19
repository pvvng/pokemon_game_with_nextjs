'use client'

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Police({userdata}) {
  let context =([
    `  반갑다. ${userdata.name}. 뭐 하나 물어보지.`,
    ' 내가 누구냐고? 나는 세계를 누비며 활약하는 국제경찰의 일원이다.',
    ` 이름은... 아니지, 너에게는 코드네임을 알려주마.`,
    ` 그래, 코드네임은 핸섬! 모두들 그렇게 부른다!`,
    ` 최근 오박사의 연구소에서 포켓몬 도난 사건이 있었지.
    또한, 이 지방에서의 포켓몬 밀매 사건이 급증했다.`,
    ' 네가 범인라는 말은 아니야. 진정하라고.',
    ' 오늘은 여기까지 하지. 다시 만날 일이 없었으면 좋겠군.'
  ]);

  let [contextState, setContextState] = useState(0);
  let [typedText, setTypedText] = useState('');
  let [componentStatus, setComponentStatus] = useState('');
  let router = useRouter();
  let [codeName, setCodeName] = useState('???')

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
      setCodeName('핸섬');
    }
  },[contextState])

  return (
    <div className={componentStatus} style={{ width: '100%', height: '100vh', background: 'white', position: 'absolute', top: 0 }}>
      <div style={{ maxWidth: '720px', marginLeft: 'auto', marginRight: 'auto' }}>
        <p style={{ textAlign: "center", marginTop: '20px' }}>말풍선을 터치하세요</p>
        <div style={{display:'flex', justifyContent:'center'}}>
          <img src='/국제경찰.webp' width={'25%'} style={{marginLeft:'auto', marginRight:'auto'}}/>
        </div>

        <div className='speech-bubble' style={{ cursor: 'pointer' }} onClick={() => {
          setContextState((prevState) => (prevState + 1)); 
          if(contextState >= context.length-1){
            setComponentStatus('op');
            // user의 script + 1 하는 api
            axios.put('/api/update/script', userdata);
            router.push('/');
            // 마이페이지를 refresh하는 목적임. 마이페이지가 refresh되지 않으면
            // user의 notorious나 script가 업데이트 되지 않아서 스크립트가 계속 반복되기 때문임
            router.refresh();
          }
        }}>
          <p className='card-title' style={{ color: 'white' }}>[{codeName}]</p>
          <p style={{ color: 'white', whiteSpace: 'pre-wrap' }}>{typedText}</p>
        </div>
      </div>
    </div>
  );
}