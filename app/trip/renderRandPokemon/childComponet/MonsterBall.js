import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import axios from 'axios';


export default function MonsterBall({whichBall, randPokemonData, router, userdata}){

    // user 가 현재 위치한 경로 ((ex) .../trip/mountaion)
    let nowPath = usePathname();
    let replacePath = nowPath.replaceAll('/','');

    let [success, setSuccess] = useState('');
    let [ani, setAni] = useState('wobble');
    let captureRate = Math.floor((Math.random() * (100-1) + 1));
    let [context, setContext] = useState('두근두근...');
    let [btnOp, setBtnOp] = useState('op');

    useEffect(()=>{
        let a = setTimeout(()=>{

            let 잡을확률 = 0;

            switch (whichBall){
                case 'ball':
                    잡을확률 = parseInt(randPokemonData[0].korean_capture_rate) * 1;
                    break;
                case 'sball':
                    잡을확률 = parseInt(randPokemonData[0].korean_capture_rate) * 1.5;
                    break;
                case 'hball':
                    잡을확률 = parseInt(randPokemonData[0].korean_capture_rate) * 2;
                    break;
                case 'mball':
                    잡을확률 = parseInt(randPokemonData[0].korean_capture_rate) * 100;
                    break;
            }

            console.log(randPokemonData[0].korean_capture_rate, 잡을확률, '결과 :' + captureRate);

            if(captureRate <= 잡을확률){
                setSuccess(true);
            }else{
                setSuccess(false);
            }
        },3000)

        return()=>{clearTimeout(a)}
    },[])

    useEffect(()=>{

        if(success){
            setContext(randPokemonData[0].korean_name+' 을/를 잡았다!');
            setAni('fadeIn');
            // 잡은 포켓몬 db에 업데이트
            axios.post('/api/post/pokemon',{ user_id : userdata._id, ...randPokemonData[0]});
            setBtnOp('');
        }else if (success === false){
            setContext(randPokemonData[0].korean_name+' 은/는 도망가버렸다..');
            setAni('');
            setBtnOp('');
        }else{
            setContext('두근두근...');
        }
    },[success])

    return(
        <div style={{marginLeft:'auto', marginRight:'auto', maxWidth:'728px'}}>
            <div className={replacePath}  style={{textAlign:'center'}}>
                <div>
                    <img className={`animate__animated animate__${ani}`} style={{animationIterationCount : 3}} src='/images/monsterball-front.png' />
                </div>
            </div>
            <div className='context-box'>
                <p className='typewriter'>{context}</p>
            </div>
            <div style={{textAlign:'center'}}>
                <button className={`btn btn-secondary m-2 ${btnOp}`} style={{transition: 'all 1s'}} onClick={()=>{
                    router.push('/trip');
                    //버튼 클릭시 soft refresh (my page에 변경된 포켓몬 데이터의 즉각적인 반영을 위해서)
                    router.refresh();
                }}>돌아가기</button>
            </div>
        </div>
    )
}