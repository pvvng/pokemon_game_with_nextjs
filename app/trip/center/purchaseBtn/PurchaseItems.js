'use client'

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PurchaseItems({userdata}){

  let itemImg = ['/monsterball-front.png','/상처약.png'];
  let [itemValue, setItemValue] = useState([0,0]);
  let itemPrice = [350 , 150];
  let router = useRouter();

  function 변경함수(i,변경할값){
    let copy = [...itemValue];
    copy[i] = 변경할값;
    setItemValue(copy);
  }

  function 총합(){
    let totalPrice = 0;
    itemValue.map((a, i) => 
      totalPrice = totalPrice + (a * itemPrice[i])
    )
    return totalPrice
  }

  return (

      <div className='item-container'>
        <h4 className='card-title'>판매 중인 상품</h4>
        <p className="m-2">가진 금액 : {userdata.gold} 원</p>

        <div className="row" style={{alignItems:'center'}}>
          {itemImg.map((a,i) => 
            <div className="col-md-6" key={i}>
              <div className="row" style={{alignItems:'center'}}>

                {/* 이미지 div */}
                <div className="col-md-6">
                    <img src={a} width={'100%'} style={{maxWidth:'200px'}}/>
                    <p>{itemPrice[i]}원 / 1개</p>
                </div>

                {/* 아이템 input div */}
                <div className='col-md-6'>
                    <input value={itemValue[i]} style={{width:'100px'}} onChange={(e)=>{
                      let 변한거 = parseInt(e.target.value);
                      if(e.target.value === ''){
                        변경함수(i,0)
                      }else{
                        변경함수(i,변한거);
                      }
                    }}/>
                    <button onClick={()=>{
                      let copy = [...itemValue];
                      copy[i] = copy[i] + 1;
                      setItemValue(copy);
                    }}>+</button>
                    <button onClick={()=>{
                      if(itemValue[i] > 0){
                        let copy = [...itemValue];
                        copy[i] = copy[i] - 1;
                        setItemValue(copy);
                      }else{
                        alert('간호순 : 거기 없으면 없는거에요');
                      }
                    }}>-</button>
                    <p className="mt-3">합계 : {itemValue[i] * itemPrice[i]} 원</p>
                </div>
              </div>
            </div>
           )}
        </div>
        <button className="btn btn-secondary mt-3" onClick={()=>{

          let a  = 총합();
          let 보낼거 = {...userdata};
          // 구매하는 item 의 가격만큼 userdata 수정해서 보내기
          보낼거.gold = (parseInt(보낼거.gold) - a).toString();
          보낼거.ball = (parseInt(보낼거.ball) + itemValue[0]).toString();
          보낼거.medi = (parseInt(보낼거.medi) + itemValue[1]).toString();

          if(a > parseInt(userdata.gold)){
            // user가 가진 골드가 부족한 경우
            alert('간호순 : 돈 없으면 나가세요~');
          }else{
            axios.put('/api/update/purchase', 보낼거);
            setItemValue([0,0]);
            alert('간호순 : 구매 감사합니다 고갱님~')
            router.refresh();
          }

        }}>구매하기</button>
    </div>
  )
}
