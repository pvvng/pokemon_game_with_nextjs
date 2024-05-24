# 포켓몬 미니 팬 게임 - ⚡로켓단이되⚡ README

## 1. 설치 방법

### click and install 👉 [로켓단이되](https://pokemon-sigma-two.vercel.app/) 

<details>
  <summary>window 환경에서 설치하기</summary>
  <div align = 'center'>
    <img src='https://github.com/pvvng/pvvng.github.io/assets/112927193/85f131a5-41ae-496e-aa15-5db551236de4' width='33%' />
    <img src='https://github.com/pvvng/pvvng.github.io/assets/112927193/34e7f2a3-dbcd-484a-8136-89aff62374d1' width='33%' />
  </div>
</details>

<details>
  <summary>ios 환경에서 설치하기</summary>
  <div>
    <img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/4a3d0958-72e5-48a2-ab56-52ac3f99ed0f' width='31%' />
        <img align='top' src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/1b0aa4ce-126b-4db6-8c85-1655f9edad7c' width='33%'/>
        <img align='top' src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/59db49ff-5b50-477a-afaa-1b86c2fb00dc' width = '33%'/>
  </div>
</details>

<details>
  <summary>android 환경에서 설치하기</summary>
  <div align='center'>
    <img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/99d8824b-ba02-4cf0-897d-430c45a55176' width='30%' />
  </div>
</details>

## 2. 개요
- 프로젝트 이름 : 포켓몬 미니 팬 게임 - ⚡로켓단이되⚡
- 개발 기간 : 2024.05.14 ~ 2024.05.23
- 개발 환경 : Next.js, mongoDB, scss
- 사용한 오픈 API : [PokeApi](https://pokeapi.co/)
- 작업 관리 : Git (GitFlow)
- 배포 : Vercel  
- #### installed Library
        npm install next-auth
        npm install next-pwa
        npm install axios
        npm install mongodb
        npm i --save @fortawesome/react-fontawesome
        npm install animate.css

## 3. 프로젝트 설명

- ##### Next.js 를 활용하여 가볍게 즐길 수 있는 포켓몬스터 미니 팬게임입니다.
  - 구글링 중 포켓몬의 데이터를 받을 수 있는 API가 있다는 사실을 알게되었고, 반드시 이것을 활용하여 프로젝트를 진행하겠다고 결심했습니다. 포켓몬스터의 핵심 기능은 포켓몬을 몬스터로 포획하는 기능이라고 생각하기에 위 기능을 구현하는 것을 핵심 목표로 잡았습니다. 또한, 간단한 게임적인 요소를 삽입하였습니다.

- ##### 왜 Next 를 썼을까?
    > 가장 큰 이유는 프론트엔드와 백엔드 서버 간의 AJAX 비동기 통신의 이해를 위해서입니다.
      
    - 아직 백엔드와 협업 경험이 없기에 비동기 통신에 대한 개념적인 이해만 있고, 실제로 서버와 통신한 경험은 오픈 API 사용 외에는 전무했습니다. 이는 후일 타인과 협업시에 치명적인 결점이 될 수 있으리라고 판단했고, 백엔드와 통신 경험을 작게나마 경험해보는 것이 좋을 것이라 판단했습니다.
    - Next 는 React 프레임워크로 React와 유사한 문법으로 프론트엔드 개발이 가능하고, 같은 프로젝트 안에서 백앤드 개발도 가능합니다. 이 프로젝트를 통해 프론트엔드에서 백엔드와 어떻게 비동기 통신을 하는지 경험하게 되었습니다.
    - 또한, Next-auth를 이용한 소셜로그인이 정말 간편했기에 간편하게 로그인, 로그아웃 API 구현이 가능했습니다.
    - 다만, Next의 App Router 기능을 이용하면서 SPA 패러다임을 구현하지 못한 부분은 아쉽게 다가옵니다. 특히, SSR에 최적이며 SEO에 특화된 Next 프레임워크이기에 그러한 장점을 활용하지 못하는 점이 아쉽습니다. 추후 이러한 Next의 장점을 살려보는 프로젝트를 기획해보고 싶습니다.

- ##### 왜 axios를 썼을까?
    - 자바스크립트 내장함수인 fetch 로도 충분히 비동기 통신이 가능합니다. 다만, axios의 JSON 자동 변환, 효과적인 에러 처리 등의 장점이 위 프로젝트에서 사용하기에 적합하다고 판단했습니다.
 
- ##### 왜 mongoDB를 썼을까?
    - mongoDB는 NoSQL 문서 지향 데이터 베이스로 데이터를 JSON 문서 형식으로 저장 가능합니다. 백엔드 개발에 대해 무지하기에 커뮤니티가 방대하여 정보를 얻기 쉽고, 문서 저장, 수정등의 관리가 편리한 mongoDB를 데이터베이스로 선택했습니다.
 
- ##### PWA
    - 모바일 환경에서도 이 프로젝트를 실행하는 것은 물론 실제 게임처럼 사용자 PC / 모바일 환경에 다운도 가능하게 만들고 싶었습니다. 이에 최적화된 기능은 PWA라고 생각합니다. PWA를 활용하여 네이티브 앱처럼 구동하는 웹을 제작하였습니다.
 
- ##### Git Flow
    - Git Flow 전략을 활용하여 프로젝트를 관리하고자 했습니다. Git을 활용한 버전 관리 전략을 미리 체득하는 것이 후일 큰 도움이 되리라 생각하여 최대한 Git Flow 전략의 흐름을 지키고자 노력하였습니다. 다만, realese, hotfix branch 사용은 위 프로젝트에 불필요한 사족이 되리라 판단하여 main, develop, feature 이 3개의 브런치만 이용하여 개발 진행 하였습니다.
    - 2024-05-24 / 로딩중 UX 개선을 위해 spinner를 도입하면서 hotfix branch를 활용하였습니다.

## 4. 이용 방법과 주요 기능

### 4-0 로그인 && 회원 탈퇴 && 로딩 페이지

##### 로그인

<div>
  <img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/e62c0135-0e58-4813-bb16-98bdb5f32b24' width='49%' height='400px'/>

  <img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/394c6247-5ea5-4a0f-9c52-45a15a17588e' width='49%' height='400px' />
</div>

- 로그인 버튼을 눌러서 회원가입하거나 로그인 할 수 있습니다.
- DB에서 현재 로그인 한 회원의 이메일이 존재하는지 확인하고 존재하면 바로 메인페이지로 이동합니다. 
- DB에 현재 로그인 한 회원의 이메일이 존재하지 않으면 회원가입 창을 보여주고, '나옹이' 스크립트를 보여줍니다.

##### 회원 탈퇴

<div align='center'>
    <img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/da1dfd17-5f2e-4716-9f1c-0e3fcdcb9c8e' width='49%'/>
</div>

  - 회원 탈퇴 버튼을 누르면 DB에 저장된 유저 관련 데이터가 모두 삭제됩니다.

##### 로딩 페이지

<div>
  <img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/e5a36325-ccab-44ce-bcb4-9b14f8687fa8' width='49%'/>

  <img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/705c10a9-ccba-4147-ab94-3b839a912f2a' width='49%' />
</div>

- 로딩페이지는 도감 페이지(/pokedex) 혹은 도감 상세페이지 (/pokedex/[detailid]) 로 이동할 때 호출됩니다. 로딩은 PokeApi 를 통한 데이터 get 요청이 완료되고, 전송된 데이터가 state에 저장되는 순간 종료됩니다. 왼쪽 사진은 도감 페이지로 이동할 때, 오른쪽 사진은 도감 상세페이지로 이동할 때 보이는 로딩 컴포넌트입니다.
  
----

### 4-1 마이페이지(/)

<div>
<img src = 'https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/40d7cced-9cbc-4593-8c0a-d1869ed845cd' width='49%'/>

<img src = 'https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/6fa0a463-9663-430b-b9c6-78a7ea4d04a3' width='49%' />  
</div>

- trip 페이지에서 잡은 포켓몬을 판매 가능합니다. 마이페이지의 '보유한 포켓몬' 탭에는 현재 보유중인 포켓몬을 보여줍니다. 이 탭에서 밀매 버튼을 클릭하면 500 골드와 악명 +1을 얻게되고, 해당 포켓몬은 DB에서 삭제됩니다. 또한, 밀매 버튼을 연속으로 클릭하는 것을 방지하기 위해 밀매 버튼을 클릭하면 모든 버튼을 잠시 안보이게 한 후, DB에서 포켓몬이 완전히 삭제된 후 다시 버튼을 보여줍니다.

- 마이페이지의 '보유 아이템' 탭에서는 현재 보유한 몬스터 볼들의 갯수를 알 수 있습니다. 더 구매하기 버튼을 누른다면 포켓몬 센터 페이지 (/trip/center) 페이지로 이동하고, 골드를 사용해 추가적인 몬스터볼 구매가 가능합니다.

----

### 도감페이지(/pokedex)

<div>
  <img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/8fe499dd-67fb-4b65-a7f8-17e88c7d58ab' width = '49%' />
  <img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/4d105fcc-a221-49a2-9521-f559b8997997' width = '49%' />

</div>

- 도감 페이지로 이동하면 PokeApi를 호출하여 50마리 포켓몬의 데이터를 불러옵니다. 불러온 데이터를 기반으로 포켓몬 카드를 html로 보여줍니다. 한번이라도 잡은 포켓몬은 흰색 바탕으로 보여주고, 잡은 적이 없는 포켓몬은 회색 바탕으로 보여줍니다.
  
- 도감 페이지 상단 검색 버튼을 클릭하여 도감 번호 혹은 이름으로 검색이 가능합니다.

<div align='center'>
<img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/51cb6319-12f3-4346-a04c-e944e1cd1801' width='49%' />
</div>

- 흰색 바탕의 포켓몬 카드를 클릭하면 상세 페이지로 이동합니다. 해당 페이지에서는 포켓몬의 구체적인 정보 확인이 가능합니다.  만약, 잡은적이 없는 포켓몬 카드를 클릭하면 alert 메시지를 띄웁니다.

----

### 여행페이지(/trip)

##### 여행지 페이지

<div>
  <img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/48159034-90ae-461e-80d6-2ed2f9e12c57' width='49%' />

<img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/872e2fb4-d8b4-4b2a-ab35-281021df29b9' width='49%' />

<img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/7d07fee2-1918-4eaa-a8fa-fbf5aed24674' width='49%' />

<img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/3c08806f-9010-4669-b4d7-74fc214c577e' width='49%' />
</div>

- 사용자는 trip 페이지 하단 버튼을 눌러 산, 바다, 시내 혹은 깊은 숲을 여행할 수 있습니다.
- 각 여행지에 맞는 서식지를 가진 포켓몬이 랜덤한 확률로 소환됩니다. (ex. 물가에 서식하는 포켓몬인 망나뇽은 바다 여행지에 소환됩니다.) 소환된 포켓몬은 각자 특수한 capture rate(잡을 확률) 을 가집니다.

<div align='center'>
<img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/323b2c59-0188-4ae4-8002-1daf55ed956b' width='50%'/> 
</div>

- 아주 드물게 전설의 포켓몬 (썬더, 파이어, 프리저, 뮤츠, 뮤) 가 출몰합니다. 이들은 서식지를 가리지 않으며 극도로 낮은 capture rate를 가집니다. 

<div>
<img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/dccc09b0-2723-4ff8-b021-a8230eafed50' width='49%'/>
<img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/033ba01c-af7d-4fc3-8bcb-488e3c5258aa' width='49%'/>  
</div>

- 상황에 맞게 어떤 몬스터 볼을 던질지 선택합니다. (기본 몬스터 볼 이외의 다른 몬스터 볼은 확률 증가의 효과가 존재합니다.)
- 사용자는 몬스터 볼을 던질때마다 javascript random() 함수를 통해서 1~100 사이 임의의 정수를 부여받습니다.
- 만약 부여받은 정수가 포켓몬의 capture rate보다 낮거나 같다면 포켓몬 포획을 성공적으로 마무리합니다. 이외의 상황에서 포켓몬은 도망갑니다.

##### 포켓몬 센터 페이지
<div align='center'>
<img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/e39e40bc-c3ca-4277-a5e4-8f55354fb122' width='49%'/>
</div>

- 포켓몬 센터 버튼을 클릭하면 몬스터볼 추가 구매를 할 수 있는 페이지(/trip/center)로 이동합니다. 구매 가능한 몬스터 볼의 최솟값은 0 입니다. input의 값을 직접 수정하거나, +, - 버튼을 클릭해서 몇개의 몬스터 볼을 구매할지 결정가능합니다.
- input의 default value는 0이고 input에는 숫자만 입력 가능하며 (+, - 사용불가), input값이 0 일때 사용자가 -버튼을 클릭하면 alert 메시지를 띄웁니다. 만약 사용자가 보유한 금액이 구매하고자 하는 금액보다 적으면 alert 메시지를 띄웁니다.

----

### 스크립트(/script)

<details>
  <summary>나옹이 스크립트</summary>
<div align='center'>
<img src = 'https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/14b30519-1151-4d93-9d3e-e094e4a44244' width='49%' />  
</div>

- 회원가입을 최초로 하면 나오는 스크립트입니다. 정확히는 사용자의 악명이 0이고, DB에 저장된 사용자의 스크립트 수치가 0일때 등장합니다. 해당 스크립트를 모두 읽으면 DB의 사용자 스크립트 수치가 1로 변경됩니다.

</details>

<details>
  <summary>비주기 스크립트</summary>
<div>
<img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/bf462b8a-338f-4a4c-a546-a537f3648f45' width='49%' />
<img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/02debeed-8e9b-4c78-943a-b9b2ca43f244' width='49%'/>
</div>

- 사용자의 악명이 50 이상이고, 스크립트 수치가 1일때 등장하는 스크립트입니다. 해당 스크립트가 종료되면 스크립트 수치가 2로 변화합니다. 또한, 스크립트에서 사용자는 특별한 퀘스트를 부여받게 됩니다.

</details>

<details>
  <summary>비주기의 퀘스트 스크립트</summary>
<div align='center'>
  <img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/078bb902-49ac-4247-b859-f843bc1869c7' width='49%' />
</div>

- 사용자의 악명이 50 이상이고, 스크립트 수치가 2일때, trip 페이지의 오박사의 연구실(/trip/DrOhS-lab) 페이지에 입장하면 등장하는 스크립트입니다. 비주기의 퀘스트 (3가지 포켓몬 찾기) 를 해당 스크립트에서 완료할 수 있습니다. 성공적으로 퀘스트를 완료하면 유저에게 1000원과 악명 5 가 부여됩니다. 스크립트 수치는 3이 됩니다

<div>
  <img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/445ab687-2b3b-4b53-9971-6fc00fbc784f' width='49%' height= '210px' />
    <img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/6723f173-7746-4575-afa8-d4520a959489' width='49%' height= '210px' />
</div>

- 또한, 위 스크립트 완료를 기점으로 오박사의 말풍선 내용이 변경됩니다.
  
</details>

<details>
  <summary>한지우 스크립트</summary>
  <div align='center'>
  <img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/93617145-e912-4076-adef-cb8797fdb2b4' width='49%' />
    
  </div>

- 사용자의 악명이 100이고, 스크립트 수치가 3일 때 등장하는 스크립트입니다. 해당 스크립트가 종료되면 스크립트 수치가 4가 됩니다. 마이페이지로 redirect 되는 다른 스크립트와는 다르게 위 스크립트는 바로 엔딩 스크립트로 redirect 됩니다.
  
</details>

<details>
  <summary>엔딩 스크립트</summary>
  <div align='center'>
<img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/d519f2f4-927c-4a22-8c32-0ea5abe44e53' width='49%' />
    
  </div>
  
- 마지막 스크립트로 사용자의 악명이 100이고, 스크립트 수치가 4일때 등장하는 스크립트입니다. 해당 스크립트가 종료되면 사용자의 스크립트 수치가 5가 됩니다. 
  
</details>

## 5. 회고

- ### 5-1. 프로젝트 중 신경 쓴 부분

  - ##### 비동기 통신
  - ##### 재사용 가능한 컴포넌트 / 함수
  - ##### 더 나은 사용자 경험

- ### 5-1. 프로젝트 중 어려웠던 부분 && 프로젝트의 아쉬운 부분

  - ##### 
  - #####
  - #####
  - 

## 6. 후기
### 추후 추가하고 싶은 기능 혹은 느낀 점

