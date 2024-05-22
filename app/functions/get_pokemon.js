// 포켓몬 데이터 불러오는 함수
// argument 시작 도감번호, 불러올 도감번호, state (default 형식은 빈 어레이) 변경함수

import axios from "axios";

const fetchData = async (직전도감번호, 불러올도감번호, setPokemonData) => {

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

    //stat name by korean
   const koreanStatNames = []

    await Promise.all(

      response.data.stats.map( async (data, i) => {
        const statResponse = await axios.get(data.stat.url)
        const koreanStatName = (statResponse.data.names.find(name => name.language.name === 'ko'))
        koreanStatNames.push({[koreanStatName.name] : response.data.stats[i].base_stat})
      })
    )

    const inst = await axios (response.data.species.url)

    // 잡을 확률 (inst.data.capture_rate)

    const habitat = await axios (inst.data.habitat.url)
    let pokemonHabitat = (habitat.data.name)

    
    // 종족
    const koreanGeneraType = inst.data.genera.find (genes => genes.language.name === 'ko')

    const KorenEggGroups = await Promise.all(
      inst.data.egg_groups.map(async (data) => {
      const EggGroupResponse = await axios.get(data.url);
      const EggGroupkoreanName = EggGroupResponse.data.names.find(name => name.language.name === 'ko');
      return EggGroupkoreanName.name;
    }));

    //설명
    const korenDescription = inst.data.flavor_text_entries.find(des => des.language.name === 'ko')


    allPokemonData.push(
      { ...response.data, 
        korean_name: koreanName.name, 
        korean_type_name : koreanTypeNames, 
        korean_stats : koreanStatNames,
        korean_capture_rate : inst.data.capture_rate,
        korean_genera : koreanGeneraType.genus,
        korean_egg_group : KorenEggGroups,
        korean_description : korenDescription.flavor_text,
        habitat : pokemonHabitat,
      }
    );
  }
  setPokemonData(allPokemonData);
};

export default fetchData;
