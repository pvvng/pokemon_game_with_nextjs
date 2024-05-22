'use client'

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Hero({userdata}) {
  let context =([
    '  네가 그 유명한 포켓몬 밀매업자야?',
    ` 난 한지우! 이 세상에서 가장 훌륭한
    최강의 포켓몬 마스터가 될 사람이지!`,
    ` 우리의 친구인 포켓몬을 돈벌이로 취급하는 널 용서할 수 없어!`,
    ' 배틀하자! 본때를 보여주지!',
    ` 너로 정했다!! 가랏, 피카츄!!`
  ]);

  let [contextState, setContextState] = useState(0);
  let [typedText, setTypedText] = useState('');
  let [componentStatus, setComponentStatus] = useState('');
  let router = useRouter();

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

  return (
    <div className={componentStatus} style={{ width: '100%', height: '100vh', background: 'white', position: 'absolute', top: 0 }}>
      <div style={{ maxWidth: '720px', marginLeft: 'auto', marginRight: 'auto' }}>
        <p style={{ textAlign: "center", marginTop: '20px' }}>말풍선을 터치하세요</p>
        <div style={{display:'flex', justifyContent:'center'}}>
          <img src='/images/지우.webp' width={'50%'} style={{marginLeft:'auto', marginRight:'auto'}}/>
        </div>

        <div className='speech-bubble' style={{ cursor: 'pointer' }} onClick={() => {
          setContextState((prevState) => (prevState + 1)); 
          if(contextState >= context.length-1){
            setComponentStatus('op');
            // user의 script + 1 하는 api
            axios.put('/api/update/script', userdata);
            router.push('/script');
            // 마이페이지를 refresh하는 목적임. 마이페이지가 refresh되지 않으면
            // user의 notorious나 script가 업데이트 되지 않아서 스크립트가 계속 반복되기 때문임
            router.refresh();
          }
        }}>
          <p className='card-title' style={{ color: 'white' }}>[한지우]</p>
          <p style={{ color: 'white', whiteSpace: 'pre-wrap' }}>{typedText}</p>
        </div>
      </div>
    </div>
  );
}