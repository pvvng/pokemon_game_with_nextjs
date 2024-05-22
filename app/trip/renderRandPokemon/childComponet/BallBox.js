import axios from 'axios';

export default function BallBox({이미지경로, ballType, userdata, setBall, setWhichBall}){
    
    function throwBall(어떤공){
        // 인수는 공 타입
        let ballType = userdata[어떤공];
        // 유저의 몬스터볼 갯수가 0개면 몬스터볼 못 던지게 막아야함
        if((ballType).toString() <= 0){
            alert('몬스터볼이 부족합니다!');
        }else{
            setBall(1);
            setWhichBall(어떤공);
            // user의 몬스터볼 -1
            let nowBall = ((ballType).toString() - 1)
            userdata[어떤공] = (nowBall).toString()
            // 변경사항 db에 업데이트
            axios.put('/api/update/monsterball', userdata)
        }
    }

    let 한국이름;

    switch(ballType){
        case 'ball':
            한국이름 = '몬스터볼';
            break;
        case 'sball':
            한국이름 = '슈퍼볼';
            break;
        case 'hball':
            한국이름 = '하이퍼볼';
            break;
        case 'mball':
            한국이름 = '마스터볼';
            break;
    }
    return(
        <div className='col-3' 
        onClick={()=>{
            throwBall(ballType);
        }}>
            <img className='ball-ani' src={이미지경로} width={'100%'}/>
            <p>{한국이름} : {userdata[ballType]} 개</p>
        </div>
    )
}