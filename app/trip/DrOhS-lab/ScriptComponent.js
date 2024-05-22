'use client';

import { useEffect, useReducer, useState } from 'react';
import './droh.css';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function ScriptComponent ({userdata}) {

  let router = useRouter();
  let monsterball = [149, 111, 85, 143, 137, 132, 77, 130, 25];
  let [count, setCount] = useState(0);
  let [quest, setQuest] = useState('d-none');
  let [highlight, setHighlight] = useState(['','',''])

  useEffect(()=>{
    if(count === 3){
      setQuest('d-look');
    }
  },[count])

  return(
    <div  className='q-container'>
      <div className="ballbox-container">
        <h4 style={{textAlign:'center', fontWeight:'bold'}}>
          <span className={highlight[0]}>갸라도스</span>, 
          <span className={highlight[1]}>망나뇽</span>, 
          <span className={highlight[2]}>메타몽</span>을 찾아서 훔치세요</h4>
        <div className='row'>
          {
            monsterball.map(a => {
              return(
                <div className="col-4" style={{transition:'all 1s'}} key={a} >
                  <img src='/images/monsterball-front.png' width={'100%'} onClick={(e)=>{
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display='';
                    if(a === 149 || a === 132 || a === 130){
                      setCount(count+1);
                      if(a === 149){
                        let copy = [...highlight];
                        copy[1] = 'highlighter';
                        setHighlight(copy) 
                      }else if(a === 132){
                        let copy = [...highlight];
                        copy[2] = 'highlighter';
                        setHighlight(copy) 
                      }else if(a === 130){
                        let copy = [...highlight];
                        copy[0] = 'highlighter';
                        setHighlight(copy) 
                      }
                    }
                  }}/>
                  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${a}.png`} width={'100%'} style={{display:'none'}}/>
                </div>
              )
            })
          }
        </div>
        <div className={`finish-container ${quest}`} style={{textAlign:'center'}}>
          <p>다 훔쳤다!</p>
          <button className='btn btn-secondary' onClick={()=>{
              let 보낼거 = {...userdata}
              보낼거.notorious = (parseInt(보낼거.notorious) + 5).toString();
              보낼거.gold = (parseInt(보낼거.gold) + 1000).toString();
              axios.put('/api/update/script', 보낼거);
              router.push('/');
              router.refresh();
              alert('비주기 : 잘했다 신입. 성공 보수로 1000원 입금했으니 잘 쓰라고.')
          }}>보고한다</button>
        </div>
      </div>
    </div>

  )
}