'use client'

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export default function IllegalMarket({dbPokemon, userdata}){

  // 1. props(dbpokemon)을 받아온다
  // 2. 버튼 클릭시 ajax 통신을 하고, 페이지를 refresh한다.
  // 3. 변경된 props를 다시 받아온다. 
  // 4. 변경된 props 값을 state에 저장하여 재렌더링한다

  let [have, setHave] = useState([]);
  let router = useRouter();

  // state인 have 혹은 props인 dbpokemon의 값이 변경될때마다 state 변경
  useEffect(()=>{
    if(dbPokemon.length !== have.length){
      setHave([...dbPokemon]);
    }
  },[dbPokemon, have]);

  // 삭제 핸들러
  // const handleDelete = async (pokemonId) => {
  //   try {
  //     await axios.delete('/api/delete/pokemon', { data: { id: pokemonId } });
  //     alert('거래 감사합니다 고갱님');
  //     setHave(have.filter(pokemon => pokemon._id !== pokemonId));
  //     router.refresh();
  //   } catch (error) {
  //     console.error('Failed to delete the pokemon:', error);
  //   }
  // };

  if(have.length > 0){
    return(
      <div>
        {
          have.map((a,i) => {
            return(
                <div key={a._id} className="row m-2" style={{textAlign:'center'}}>
                  <span className="col-6" style={{marginTop:'auto', marginBottom:'auto'}}>{a.korean_name}</span>
                  <span className="col-2"></span>
                  <button className={`col-4 btn btn-secondary`} style={{transition: 'all 0.2s'}} onClick={(e)=>{
                    // 버튼 클릭시 해당 버튼 보이지 않게 만들기
                    e.target.style.opacity = 0;

                    // 해당 버튼의 포켓몬 삭제
                    axios.delete('/api/delete/pokemon', {data : a._id});
                      // userdata gold 부분에 500원 추가
                    axios.put('/api/update/selling', userdata);

                    alert('나옹 : 500원 입금했다옹');

                    // 변경된 부분만 바꿔주는 soft refresh기능
                    router.refresh();
                  }}>밀매</button>
                </div>
            )
          })
        }
      </div>
    )
  }else{
    return(
      <p style={{marginTop:'20px'}}>보유한 포켓몬이 없습니다.</p>
    )
  }


}