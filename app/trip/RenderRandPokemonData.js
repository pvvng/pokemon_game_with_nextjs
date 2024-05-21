'use client'

import { useEffect, useState } from 'react';
import fetchData from '@/app/get_pokemon.js';
import randomGotchaNumber from '@/app/randomGotchaNumber';
import 'animate.css';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';
import './bg.css';

export default function RenderRandPokemonData({서식지1, 서식지2, userdata}){

    // let params = useParams()
    // console.log(params)

    let router = useRouter();


    const [randPokemonData, setRandPokemonData] = useState([]);
    let a = randomGotchaNumber();

    //최초 mount시 랜덤한 포켓몬 데이터 불러오기
    useEffect(()=>{
      // 전설의 포켓몬 랜덤 숫자 생성기
      let legendPokemon = Math.floor((Math.random() * (200-1) + 1));
      let b = -1
      switch (legendPokemon){
        // 썬더 프리져 파이어 2/200 0.01%
        case (1): case 2:
          b = (144);
          break;
        case (3): case 4:
          b = (145);
          break;
        case (5): case 6:
          b = (146);
          break;
        // 뮤, 뮤츠 1/200 0.005%
        case 100:
          b = (150);
          break
        case 199:
          b = (151);
          break;
      }

      if(b !== -1){
        // 전설의 포켓몬 숫자가 당첨되면 실행        
        fetchData(b, b, setRandPokemonData);
      }else{
        fetchData(a, a, setRandPokemonData);
      }

    },[])


    //서식지가 제대로 맞춰졌을때만 html 보여주기. 이외에는 로딩중  

    if(randPokemonData.length !== 0){
      if(randPokemonData[0].habitat !== 서식지1 && randPokemonData[0].habitat !== 서식지2 && randPokemonData[0].habitat !== 'rare'){
        fetchData(a, a, setRandPokemonData)
      }
  
      if(randPokemonData[0].habitat === 서식지1 || randPokemonData[0].habitat === 서식지2 || randPokemonData[0].habitat === 'rare'){
        return(
            
            <Template randPokemonData={randPokemonData} router={router} userdata={userdata} />
        )
      }else{
        return(
          <h1 style={{textAlign:'center'}}>Loading...</h1>
        )
      }
    }
}

function Template ({randPokemonData, router, userdata}){

    let abc = usePathname()
    let replacePath = abc.replaceAll('/','');
    let [whichBall, setWhichBall] = useState('');  

    let [ball, setBall] = useState(0);

    function throwBall(어떤공){
        // 인수는 공 타입
        let ballType = userdata[어떤공];
        // 유저의 몬스터볼 갯수가 0개면 몬스터볼 못 던지게 막아야함
        if((ballType).toString() <= 0){
            alert('몬스터볼이 부족합니다!');
        }else{
            setBall(1);
            setWhichBall(어떤공);
            // user의 몬스터볼 -1
            let nowBall = ((ballType).toString() - 1)
            userdata[어떤공] = (nowBall).toString()
            // 변경사항 db에 업데이트
            axios.put('/api/update/monsterball', userdata)
        }
    }

    if(ball === 0 && whichBall === ''){
        // 공을 던지지 않았을때 보여주는 html
        return(
            <div style={{marginLeft:'auto', marginRight:'auto', maxWidth:'728px'}}>
                <div className={replacePath}  style={{textAlign:'center'}}>
                    <div className='animate__animated animate__bounce' style={{animationIterationCount : 'infinite'}}>
                        <img className='wild-pokemon-img' src={randPokemonData[0].sprites.front_default}/>
                    </div>
                </div>
                <div className='context-box'>
                    <p className='typewriter'>야생의 <span className='card-title' style={{fontSize:'1.3rem'}}>{randPokemonData[0].korean_name}</span> 이/가 나타났다!</p>
                </div>
                <div style={{textAlign:'center'}}>
                    <button className='btn btn-danger m-2'onClick={()=>{router.push('/trip')}}>그냥 지나간다</button>
                    <div className='row'>
                        <div className='col-3' 
                        onClick={()=>{
                            throwBall('ball');
                        }}>
                            <img src='/몬스터볼.webp' width={'100%'}/>
                            <p>몬스터볼 : {userdata.ball} 개</p>
                        </div>

                        <div className='col-3' 
                        onClick={()=>{
                            throwBall('sball');
                        }}>
                            <img src='/슈퍼볼.webp' width={'100%'}/>
                            <p>슈퍼볼 : {userdata.sball} 개</p>
                        </div>
                        <div className='col-3' 
                        onClick={()=>{
                            throwBall('hball');
                        }}>
                            <img src='/하이퍼볼.webp' width={'100%'}/>
                            <p>하이퍼볼 : {userdata.hball} 개</p>
                        </div>
                        <div className='col-3' 
                        onClick={()=>{
                            throwBall('mball');
                        }}>
                            <img src='/마스터볼.webp' width={'100%'}/>
                            <p>마스터볼 : {userdata.mball} 개</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }else{
        // 공을 던졌을 때 보여주는 html
        return(
            <MonsterBall whichBall={whichBall} randPokemonData={randPokemonData} router={router} userdata={userdata} />
        )
    }
}


function MonsterBall({whichBall, randPokemonData, router, userdata}){

    let abc = usePathname()
    let replacePath = abc.replaceAll('/','');

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
                    <img className={`animate__animated animate__${ani}`}  style={{animationIterationCount : 3}} src='/monsterball-front.png' width={'45%'}/>
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