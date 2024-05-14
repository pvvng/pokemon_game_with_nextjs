'use client'

import axios from "axios";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './mainScss/main.css'
import TypeBadge from "./TypeBadge";

export default function Home() {

  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {

      const allPokemonData = [];

      for (let i = 1; i <= 151; i++) {

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

    fetchData();

  }, []);


  if(pokemonData.length > 0){
      console.log(pokemonData)
      return(
        <div>
          <div className="row">
            {   
            pokemonData.map(pokemon => 
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
          </div>
        </div>
      )
  }else{
    return(<h2 style={{textAlign:"center"}}>LOADING...</h2>)
  }
}


