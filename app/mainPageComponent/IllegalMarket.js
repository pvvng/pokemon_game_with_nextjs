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
  // 로딩 상태 관측 state
  const [loading, setLoading] = useState(true); 
  // 버튼 관측 state
  let [selling, setSelling] = useState('');
  let router = useRouter();

  // state인 have 혹은 props인 dbpokemon의 값이 변경될때마다 state 변경
  useEffect(()=>{
    if(dbPokemon.length !== have.length){
      // dbpokemon은 db에서 불러온 포켓몬 데이터 어레이이다.
      // dbpokemon 어레이의 길이와 
      // have(이 컴포넌트에서 사용하는 가지고 있는 포켓몬 데이터) 어레이의 길이가 일치하지 않는다면
      // have의 값을 업데이트 한다.
      // 가령, 페이지가 마운트 될때 have는 [] 일 것이다.
      // 이때 dbpokemon이 존재한다면, state인 have를 업데이트 하여 html에 이를 반영한다.
      setHave([...dbPokemon]);

      // 위 과정이 모두 완료된 후 (데이터 로드 완료 후) 로딩 상태 해제
      setLoading(false);
    }

    let a = setTimeout(()=>{
      if(dbPokemon.length === have.length){
        setLoading(false);
      }
    },2000)

    // have의 값이 변할때마다 (포켓몬 판매 버튼을 누른 후, ajax 통신이 성공적으로 끝날 때 마다)
    // selling button을 다시 보이게 만든다
    setSelling('');

    return ()=>{clearTimeout(a)}

  },[dbPokemon, have]);

  // 삭제 핸들러
  const handleDelete = async (pokemonId) => {
    try {
      // Delete the pokemon
      await axios.delete('/api/delete/pokemon', { data: { id: pokemonId } });
      // Update the user's gold
      await axios.put('/api/update/selling', userdata);
      alert('나옹 : 500원 입금했다옹');
      // Refresh the page
      router.refresh();
    } catch (error) {
      // ajax 통신 실패했을때 실행
      console.error('Failed to delete the pokemon:', error);
    } 
    // finally {
    //   // Reset selling state after the operation is complete
    //   // ajax 통신과 관계없이 항상 실행되는 블록 
    //   // finally를 사용하니까 정말 ajax 통신이 완료되고 나서 버튼이 보였다!
    //   // 다만, 내가 원하는 것은 state 값이 변경된 후에 버튼을 보이게 하는것이어서, 
    //   // have state가 변할때마다 selling을 변경하도록 코드를 추가했다. 
    //   setSelling('');
    // }
  };

  if(loading){
    return (
      <div className="spinner-border mt-2" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    )
  }

  if(have.length > 0){
    return(
      <div>
        {
          have.map((a,i) => {
            return(
                <div key={a._id} className="row m-2" style={{textAlign:'center'}}>
                  <div className="col-6" style={{marginTop:'auto', marginBottom:'auto'}}>
                    <span className="mx-2">{a.korean_name}</span>
                  </div>
                  <span className="col-2"></span>
                  <button className={`col-4 btn btn-secondary ${selling}`} style={{transition: 'all 0.2s'}} onClick={(e)=>{
                    if (!selling){
                      // selling = '' (false) 일때 실행
                      setSelling('d-none');
                      // 버튼 클릭시 해당 버튼 보이지 않게 만들기
                      e.target.style.opacity = 0;
                      // 삭제 핸들러
                      handleDelete(a._id);
                    }
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