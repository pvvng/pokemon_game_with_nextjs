//pokemon 하나의 정보만 오브젝트 형식으로 기입하기
//사용시 main.css도 import 해줘야함

export default function TypeBadge({pokemon}){
    return(
        pokemon.korean_type_name.map((type,i) =>{ 

        let badgeColorByType = '';

        switch (type){
            case '풀':
            badgeColorByType = 'grass-badge'
            break;
            case '독':
            badgeColorByType = 'poison-badge'
            break;
            case '불꽃':
            badgeColorByType = 'fire-badge'
            break;
            case '비행':
            badgeColorByType = 'fly-badge'
            break;
            case '물':
            badgeColorByType = 'water-badge'
            break;
            case '벌레':
            badgeColorByType = 'bug-badge'
            break;
            case '노말':
            badgeColorByType = 'normal-badge'
            break;
            case '전기':
            badgeColorByType = 'electric-badge'
            break;
            case '땅':
            badgeColorByType = 'ground-badge'
            break;
            case '페어리':
            badgeColorByType = 'fairy-badge'
            break;
            case '격투':
            badgeColorByType = 'fight-badge'
            break;
            case '에스퍼':
            badgeColorByType = 'esper-badge'
            break;
            case '바위':
            badgeColorByType = 'stone-badge'
            break;
            case '강철':
            badgeColorByType = 'iron-badge'
            break;
            case '얼음':
            badgeColorByType = 'ice-badge'
            break;
            case '고스트':
            badgeColorByType = 'ghost-badge'
            break;
            case '드래곤':
            badgeColorByType = 'dragon-badge'
            break;
        }
        return <span key={i} style={{textAlign:'center'}} className={badgeColorByType}>{type}</span>
        })
    )
}
