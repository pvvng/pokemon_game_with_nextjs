export default function randomGotchaNumber (){
    let rand = Math.floor(Math.random()*(151-1)+1);

    //전설의 포켓몬 확률은 제외
    if(rand === 144 || rand ===145 || rand ===146 || rand ===150 || rand ===151){
        rand = rand - 100;
    }
    
    return (rand)
}