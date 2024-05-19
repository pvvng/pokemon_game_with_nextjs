'use client'

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Cat({userdata}) {
  let context =([
    '  반갑다옹 신입. 난 로켓단의 귀염둥이 마스코트 나옹이다옹.',
    ' 이번 신입 교육은 내가 맡게 되었으니 잘 들으라옹.',
    ` 로켓단이 뭐하는 곳이냐고? 
    그렇게 물으신다면 대답해 드리는게 인지상정이다옹.`,
    ` 우리 로켓단은 이 세계의 파괴를 막기위해,
    이 세계의 평화를 지키기 위해,
    사랑과 진실 어둠을 뿌리고 다닌다옹.`,
    ' 신입인 네가 할 일은 포켓몬을 잡아서 마켓에 파는 것이다옹.',
    ` 다만 국제 경찰 녀석들이 찾아올 수도 있으니까,
    강한 포켓몬 한 마리는 '대표 포켓몬' 으로 등록하고 팔지 말라옹.`,
    ' 몬스터볼 5개와 상처약 5개를 줄테니 열심히 해보라옹.',
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
    <div className={componentStatus} style={{ width: '100%', height: '100vh', background: 'white', position: 'fixed', top: 0 }}>
      <div style={{ maxWidth: '720px', marginLeft: 'auto', marginRight: 'auto' }}>
        <p style={{ textAlign: "center", marginTop: '20px' }}>말풍선을 터치하세요</p>
        <img src='/나옹이.webp' width={'100%'} />

        <div className='speech-bubble' style={{ cursor: 'pointer' }} onClick={() => {
          setContextState((prevState) => (prevState + 1)); 
          if(contextState >= context.length-1){
            setComponentStatus('op');
            // user의 script + 1 하는 api
            axios.put('/api/update/script', userdata);
            router.push('/');
            router.refresh();
          }
        }}>
          <p className='card-title' style={{ color: 'white' }}>[나옹]</p>
          <p style={{ color: 'white', whiteSpace: 'pre-wrap' }}>{typedText}</p>
        </div>
      </div>
    </div>
  );
}