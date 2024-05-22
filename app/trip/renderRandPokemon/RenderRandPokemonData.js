'use client'

import { useEffect, useState } from 'react';
import fetchData from '@/app/functions/get_pokemon.js';
import randomGotchaNumber from '@/app/functions/randomGotchaNumber';
import 'animate.css';
import { usePathname, useRouter } from 'next/navigation';
import '../bg-css/bg.css';
import Template from './childComponet/Template';

export default function RenderRandPokemonData({서식지1, 서식지2, userdata}){

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