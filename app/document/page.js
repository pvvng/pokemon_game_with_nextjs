'use client'

import axios from "axios";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../mainScss/main.css'
import TypeBadge from "./TypeBadge";
import Loading from "../Loading";

export default function Document() {

  const [pokemonData, setPokemonData] = useState([]);
  let [inputValue, setInputValue] = useState('');
  let [loadCounter, setLoadCounter] = useState(1);
  //버튼 상태 state
  let [loadBtnStatus, setLoadBtnStatus] = useState('');
  // 로딩중인지 추적하는 state
  let [isLoading, setIsLoading] = useState(false);

  //페이지 최초 마운트시 1~51번째 포켓몬 불러오기
  useEffect(() => {

    fetchData(1,51,setPokemonData);

  }, []);

  //버튼 클릭시 추가 데이터 불러오는 함수
  const handleLoadMore = async () => {
    setLoadCounter(loadCounter + 1);
    setIsLoading(true);

    await fetchData(1, pokemonData.length + 50, setPokemonData);
    setIsLoading(false);

    if (loadCounter === 2) {
      setLoadBtnStatus('hide');
    }
  };


  if(pokemonData.length > 0){
       return(
        <div>
            <button style={{marginLeft:'50px'}}>검색</button>
            <input type="text" className="mb-4" onChange={(e)=>{
                setInputValue(e.target.value);
            }}/>
            {/* row가 화면 밖으로 튀어나가는 문제 해결을 위해 width 100% 속성 추가 */}
            <div className="row" style={{width:'100%'}}>
                {pokemonData.map(pokemon => {
                    if ( (pokemon.id).toString().includes(inputValue) || (pokemon.korean_name).includes(inputValue) ){
                        return(
                            <div className="col-lg-2 col-md-3 col-sm-4" key={pokemon.id} style={{marginBottom:'10px'}}>
                                <div className="card p-2">
                                    <h5>도감번호 : {pokemon.id}</h5>
                                    <img src={pokemon.sprites.front_default} className="card-img-top" alt="..." width={'100%'} height={'100%'}/>
                                    <div className="card-body" style={{textAlign:'center', }}>
                                        <h5 className="card-title">{pokemon.korean_name}</h5>
                                        <TypeBadge pokemon={pokemon} />
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
            <div style={{textAlign:'center'}}>
              {/* && 연산자를 통해 loading중이 아닐때만 버튼 보여주기 */}
              {isLoading ?
               <h2 className="typewriter">Loading...</h2>:
               <button className={loadBtnStatus} onClick={()=>{
                  handleLoadMore()
                }}>더 불러오기</button>
              }

            </div>
        </div>
      )
  }else{
    return(
      <Loading/>
    )
  }
}

// 포켓몬 데이터 불러오는 함수

const fetchData = async (직전도감번호, 불러올도감번호,setPokemonData) => {

  const allPokemonData = [];

  for (let i = 직전도감번호; i <= 불러올도감번호; i++) {

    //pokemon data ajax
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const speciesResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${i}`);
    const koreanName = speciesResponse.data.names.find(name => name.language.name === 'ko');
  
    //pokemon type ajax
    const koreanTypeNames = await Promise.all(
      response.data.types.map(async (typeData) => {
      const typeResponse = await axios.get(typeData.type.url);
      const koreanTypeName = typeResponse.data.names.find(name => name.language.name === 'ko');
      return koreanTypeName.name;
    }));

    allPokemonData.push({ ...response.data, korean_name: koreanName.name, korean_type_name : koreanTypeNames });
  }
  setPokemonData(allPokemonData);
};
