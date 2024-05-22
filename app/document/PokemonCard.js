'use client'

import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../badgeScss/badge.css';
import TypeBadge from "./TypeBadge";
import Loading from "../loadingComponents/Loading";
import { useRouter } from "next/navigation";
import fetchData from "../get_pokemon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";

export default function PokemonCard({유저포켓몬}){

    const router = useRouter();

    // 불러온 포켓몬 데이터 저장하는 state
    const [pokemonData, setPokemonData] = useState([]);
    // 실제로 포켓몬 데이터를 보여주는 tate
    let [htmlPokemon, setHtmlPokemon] = useState([])
  
    let [inputValue, setInputValue] = useState('');
    let [loadCounter, setLoadCounter] = useState(1);
    //버튼 상태 state
    let [loadBtnStatus, setLoadBtnStatus] = useState('');
    // 로딩중인지 추적하는 state
    let [isLoading, setIsLoading] = useState(false);
    //search button animation state
    let [searchBtn, setSearchBtn] = useState('op');
    let [searchIcon, setSearchIcon] = useState('20px');
    let [searchBtnStatus, setSearchBtnStatus] = useState(0);

    //페이지 최초 마운트시 1~51번째 포켓몬 불러와서 저장하기
    useEffect(() => {
  
      fetchData(1,51,setPokemonData);
  
    }, []);
  
    // 데이터가 불러와질 때마다 (pokmondata 가 변경될 때 마다) htmlPokemon 에 추가하기
    useEffect(()=>{
  
      setHtmlPokemon([...htmlPokemon, ...pokemonData])
  
    },[pokemonData])
  
    //버튼 클릭시 추가 데이터 불러오는 함수
    const handleLoadMore = async () => {
  
      // 버튼 누른 횟수에 따라 달라지는 불러오는 포켓몬의 범위가 달라진다
      let newRangeStart = 51 + 50 * (loadCounter - 1) + 1;
      let newRangeEnd = 51 + 50 * loadCounter;
  
  
      setLoadCounter(loadCounter + 1);
      setIsLoading(true);
  
      // await 함수가 완전히 종료 될때까지 계속 로딩중
      await fetchData( newRangeStart, newRangeEnd, setPokemonData);
      
      // 로딩이 끝나면  일어난 일들
      setIsLoading(false);
  
      if (loadCounter === 2) {
        setLoadBtnStatus('hide');
      }
    };
  
  
    if(htmlPokemon.length > 0){
         return(
          <div>
              {/* search btn */}
              <div className=" m-4">
                <button className="search-btn" style={{borderRadius:searchIcon}} onClick={()=>{
                  setSearchBtnStatus(searchBtnStatus + 1);
                  if(searchBtnStatus % 2 == 0){
                    setSearchBtn('');
                    setSearchIcon('0px');
                  }else{
                    setSearchBtn('op');
                    setSearchIcon('20px');
                  }
                }}><FontAwesomeIcon icon={faSearchengin} /></button>
                <input className={`search-input ${searchBtn}`} type="text" onChange={(e)=>{
                    setInputValue(e.target.value);
                }}/>
              </div>

              <div style={{clear:'both'}}></div>
  
              {/* row가 화면 밖으로 튀어나가는 문제 해결을 위해 width 100% 속성 추가 */}
              <div className="row" style={{width:'100%', marginLeft:'auto', marginRight:'auto'}}>
                  {htmlPokemon.map(pokemon => {
                        let cardStatus = 'dont-have';

                        // 유저가 가지고 있는 포켓몬이면 카드 하얗게 변경
                    
                        if((유저포켓몬.user_document).includes(pokemon.id)){
                            cardStatus = 'have';
                        }

                      if ( (pokemon.id).toString().includes(inputValue) || (pokemon.korean_name).includes(inputValue) ){
                          return(
                              <div className="col-lg-2 col-md-3 col-sm-4" key={pokemon.id} style={{marginBottom:'10px'}} onClick={()=>{
                                //박스 클릭시 상세 정보 페이지로 이동
                                router.push('/document/' + pokemon.id);
                              }}>
                                <div style={{background:'grey', borderRadius:'10px'}}>
                                  <div className={`card p-2 ${cardStatus}`}>
                                      <h5 className="card-title">도감번호 : #{pokemon.id}</h5>
                                      <img src={pokemon.sprites.front_default} className="card-img-top" alt="..." width={'100%'} height={'100%'}/>
                                      <div className="card-body" style={{textAlign:'center', }}>
                                          <h5 className="card-title">{pokemon.korean_name}</h5>
                                          <TypeBadge pokemon={pokemon} />
                                      </div>
                                  </div>
                                </div>
                              </div>
                          )
                      }
                  })}
              </div>
              <div style={{textAlign:'center', marginBottom:'13px'}}>
                {/* && 연산자를 통해 loading중이 아닐때만 버튼 보여주기 */}
                {isLoading ?
                 <h2 className="typewriter">Loading...</h2>:
                 <div className={loadBtnStatus}>
                  <button className='btn btn-secondary' onClick={()=>{
                      handleLoadMore();
                    }}>더 불러오기</button>
                 </div>
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