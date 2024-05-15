'use client'

import { useParams } from "next/navigation";
import fetchData from "@/app/get_pokemon";
import 'bootstrap/dist/css/bootstrap.min.css';
import './detail.css'
import '../../badgeScss/badge.css';
import TypeBadge from "../TypeBadge";
import { useEffect, useState } from "react";
import LoadingDetail from "@/app/LoadingDetail";

export default function(){
  const params = useParams()
  let detailId = (params.pokemon_id)
  const [pokemonDetailData, setPokemonDetailData] = useState([]);
  const [pokemonDetailImage, setPokemonDetailImage] = useState([]);
  let [imageStatus, setImageStatus] = useState(0);
  let [statContainer, setStatContainer] = useState(0);
  let [statMention, setStatMention] = useState(['스탯창 열기', '스탯창 닫기','op'])
  

  //최초 mount시 params_id번의 포켓몬 정보 불러와서 state에 저장하기
  useEffect(()=>{
    fetchData(detailId,detailId,setPokemonDetailData);
  },[])

  useEffect(()=>{
    if(pokemonDetailData[0] !== undefined){
      //pokemon 이미지 url state에 저장하기
      let copy = []
      copy.push({front : pokemonDetailData[0].sprites.front_default, back : pokemonDetailData[0].sprites.back_default})
      setPokemonDetailImage(...copy)
    }
  },[pokemonDetailData])

  // pokemondetaildata에 정보가 있을떄(ajax 통신이 성공했을때만 보여주기)
  if(pokemonDetailData[0] !== undefined){

    return(
      <div>

        {/* navbar */}
        <nav className="navbar bg-dark border-bottom border-body p-2" data-bs-theme="dark" style={{borderTopLeftRadius:'20px',borderTopRightRadius:'20px'}}>
          <div className="container-fluid">
            <h3 className="navbar-brand" style={{fontWeight:'bold', marginTop:'auto', marginBottom:'auto'}}>
              #{detailId} {pokemonDetailData[0].korean_name}
            </h3>
            <div>            
              {
                <TypeBadge pokemon={pokemonDetailData[0]} />
              }
            </div>
          </div>
        </nav>

        {/* main content */}
        <div className="main-container">
          <div className="row">
            <div className="col-sm-6 pokemon-img" onClick={()=>{
              setImageStatus(imageStatus+1);
            }}>
              {
                imageStatus % 2 == 0 ?
                <img width={'100%'} src={pokemonDetailImage.front} />:
                <img width={'100%'} src={pokemonDetailImage.back} />
              }
            </div>
            <div className="col-sm-6" style={{textAlign:'center'}}>
              <p className="genera-title">{pokemonDetailData[0].korean_genera}</p>
              <div style={{marginBottom:'15px'}}>
                <p style={{marginBottom:'0px'}}>특성</p>
                {
                  pokemonDetailData[0].korean_egg_group.map(eg => {
                    return (
                      <span className="egg-badge" key={eg}>{eg}</span>
                    )
                  })
                }
              </div>
              <p>{pokemonDetailData[0].korean_description}</p>
              <p style={{margin:'0px'}}>키 : {pokemonDetailData[0].height/10}m</p>
              <p>몸무게 : {pokemonDetailData[0].weight}kg</p>
              <button className="btn btn-secondary" onClick={()=>{
                setStatContainer(statContainer+1);
                if(statContainer % 2 === 0){
                  // setStatMention([])
                  let copy = [...statMention];
                  copy[2] = '';
                  setStatMention(copy);
                }else{
                  let copy = [...statMention];
                  copy[2] = 'op';
                  setStatMention(copy);
                }
              }}>{statMention[statContainer%2]}</button>
            </div>
          </div>
        </div>
        
        {/* hidden stat content */}
        <div className={`stat-container ${statMention[2]}`}>
          {
            pokemonDetailData[0].korean_stats.map(st => {
              return(
                <div key={Object.keys(st)}>
                  <span style={{fontWeight:'bold'}}>{Object.keys(st)} : </span>
                  <div className="progress" style={{marginBottom:"10px"}} role="progressbar" aria-label="Example with label" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar" style={{width: `${st[Object.keys(st)] / 2}%`, background:'#d14f4f'}}>{st[Object.keys(st)]}</div>
                  </div>
                </div>

              )
            })
          }
        </div>
      </div>
    )
  }else{
    return(
      <LoadingDetail/>
    )
  }
}