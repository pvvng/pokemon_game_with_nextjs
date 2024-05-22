'use client'

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LongTimeAge({userdata}) {
  let context =([
    '  [몇년 후..]',
    ' 난 그날 한지우와의 배틀에서 패배했다.',
    ` 그러고 다시는 포켓몬 밀매를 하지 않기로 약속했지만,
    약속을 지키진 않았다.`,
    ` 어느날 우연히 본 티비에서 한지우를 다시 보았다.
    그 녀석은 정말 세계 최고의 포켓몬 트레이너가 되어 있었다.`,
    ' 나도 옛날엔 저런 꿈이 있었는데..',
    ' ...',
    ' 뭐 어쩌겠어. 다 먹고 살자고 하는건데.',
    ' 역시 돈이 최고야!',
    ` [END]`
  ]);

  let [contextState, setContextState] = useState(0);
  let [typedText, setTypedText] = useState('');
  let [componentStatus, setComponentStatus] = useState('');
  let [hiddenImage, setHiddenImage] = useState('op')
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
          <img src='/우승.png' width={'100%'} className={hiddenImage} style={{marginLeft:'auto', marginRight:'auto',transition:'all 1s'}}/>
        </div>

        <div className='speech-bubble' style={{ cursor: 'pointer' }} onClick={() => {
          setContextState((prevState) => (prevState + 1)); 
          if(contextState === 2){
            setHiddenImage('');
          }
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
          <p style={{ color: 'white', whiteSpace: 'pre-wrap' }}>{typedText}</p>
        </div>
      </div>
    </div>
  );
}