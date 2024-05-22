import { usePathname } from "next/navigation";
import { useState } from "react";
import BallBox from "./BallBox";
import MonsterBall from "./MonsterBall";

export default function Template ({randPokemonData, router, userdata}){

    let nowPath = usePathname();
    let replacePath = nowPath.replaceAll('/','');
    let [whichBall, setWhichBall] = useState('');  

    let [ball, setBall] = useState(0);
    
    let ballImage = ['/images/몬스터볼.webp', '/images/슈퍼볼.webp', '/images/하이퍼볼.webp', '/images/마스터볼.webp'];

    let ballTypeArr = ['ball', 'sball', 'hball', 'mball'];

    if(ball === 0 && whichBall === ''){
        // 공을 던지지 않았을때 보여주는 html
        return(
            <div style={{marginLeft:'auto', marginRight:'auto', maxWidth:'728px'}}>
                <div className={replacePath}  style={{textAlign:'center'}}>
                    <div className='animate__animated animate__bounce' style={{animationIterationCount : 'infinite'}}>
                        <img className='wild-pokemon-img' src={randPokemonData[0].sprites.front_default}/>
                    </div>
                </div>
                <div className='context-box'>
                    <p className='typewriter'>야생의 <span className='card-title' style={{fontSize:'1.3rem'}}>{randPokemonData[0].korean_name}</span> 이/가 나타났다!</p>
                </div>
                <div style={{textAlign:'center'}}>
                    <p style={{margin:'0px', fontWeight:'bold'}}>어떤 몬스터볼로 잡을까?</p>
                    <p style={{color:'grey'}}>몬스터볼을 눌러서 포켓몬을 포획하세요!</p>
                    <div className='row'>

                        {
                            ballImage.map((BI,i) => {
                                return(
                                    <div key={i}>
                                        <BallBox 이미지경로={BI} ballType={ballTypeArr[i]} userdata={userdata} setBall={setBall} setWhichBall={setWhichBall} />
                                    </div>
                                )
                            })
                        }

                    </div>
                    <button className='btn btn-danger m-2'onClick={()=>{router.push('/trip')}}>그냥 지나간다</button>
                </div>
            </div>
        )
    }else{
        // 공을 던졌을 때 보여주는 html
        return(
            <MonsterBall whichBall={whichBall} randPokemonData={randPokemonData} router={router} userdata={userdata} />
        )
    }
}