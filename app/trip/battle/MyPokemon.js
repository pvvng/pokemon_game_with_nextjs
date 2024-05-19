'use client'

import { useEffect, useState } from 'react';
import './battle.css';
import 'animate.css';
import fetchData from '@/app/get_pokemon';

export default function MyPokemon({dbPokemon, enemy}){

    let [battlePokemon, setBattlePokemon] = useState(undefined);
    let [enemyPokemon, setEnemyPokemon] = useState([]);

    useEffect(()=>{
        if(enemy === 'h'){
            fetchData(95,95,setEnemyPokemon);
        }else if (enemy === 'm'){
            fetchData(65,65,setEnemyPokemon);
        }
        console.log(enemy)
    },[])

    if(battlePokemon === undefined){
        return(
            <div className='content-container'>
            <h4 className='mb-2'>전투 가능한 내 포켓몬</h4>
            <p>전투시킬 포켓몬을 고르세요</p>
                {dbPokemon.map((a,i) => {
                    return(
                        <div className='row mb-2 my-pokemon' key={i} onClick={()=>{
                            console.log(a)
                            // a를 state에 저장하기
                            // a.id !== undefiend가 아니면 전투 화면으로 넘어가기
                            let copy = {...a}
                            setBattlePokemon(copy)
                        }}>
                            <h5 className='m-2' style={{color:'white'}}>{a.korean_name}</h5>
                            <div className='col-6'>
                                <img src={a.sprites.front_default} width={'100%'}/>
                            </div>
                            <div className='col-6' style={{marginTop:'auto', marginBottom:'auto', color:'white'}}>
                                {
                                    (a.korean_stats).map((b,i) => {
                                        let key = (Object.keys(b)[0]);
                                        let value = b[key]
                                        return(
                                            <div key={i}>
                                                <span>{key} : {value}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })}
            </div>  

        )
    }
    else if(battlePokemon !== undefined && enemyPokemon.length !== 0){
        return(
            <div>
                <div className='main-container'>
                    <div className='inner-container'>
                        <div className='row-container row' >
                            <div className='col-6'></div>
                            <div className='col-6'>
                                <img className='animate__animated animate__pulse' style={{animationIterationCount:'infinite', animationDuration:'1.5s',float:'right'}} src={enemyPokemon[0].sprites.front_default} width={'60%'}/>
                            </div>
                            <div style={{clear:'both'}}></div>
                        </div>
                    </div>
                    <div className='inner-container'>
                        <div className='row-container row'>
                            <div className='col-6' style={{padding: '20px'}}>
                                <img className='animate__animated animate__pulse' style={{animationIterationCount:'infinite', animationDuration:'1.7s'}} src={battlePokemon.sprites.back_default} width={'100%'}/>
                            </div>
                            <div className='col-6'></div>
                        </div>
                    </div>
                    <div style={{background:'#eee', padding:'20px'}}>
                        <div className='row'>
                            <div className='col-3'>버튼1</div>
                            <div className='col-3'>버튼2</div>
                            <div className='col-3'>버튼3</div>
                            <div className='col-3'>버튼4</div>
                        </div>
                        <div>
                            버튼 내용에 따른 컨텐츠
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}