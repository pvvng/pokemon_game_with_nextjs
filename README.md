# 포켓몬 미니 팬 게임 - ⚡로켓단이되⚡ README

## 설치 방법

#### [로켓단이되](https://pokemon-sigma-two.vercel.app/) 👈 click and install!



### window 환경에서 설치하기
----
<div>
  <img src='https://github.com/pvvng/pvvng.github.io/assets/112927193/85f131a5-41ae-496e-aa15-5db551236de4' width='49%' />
  <img src='https://github.com/pvvng/pvvng.github.io/assets/112927193/34e7f2a3-dbcd-484a-8136-89aff62374d1' width='49%' />
</div>

### android 환경에서 설치하기
----
<div>
  <img src='https://github.com/pvvng/pvvng.github.io/assets/112927193/85f131a5-41ae-496e-aa15-5db551236de4' width='49%' />
  <img src='https://github.com/pvvng/pvvng.github.io/assets/112927193/34e7f2a3-dbcd-484a-8136-89aff62374d1' width='49%' />
</div>

### ios 환경에서 설치하기
----
<div>
  <img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/4a3d0958-72e5-48a2-ab56-52ac3f99ed0f' width='31%' />
      <img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/1b0aa4ce-126b-4db6-8c85-1655f9edad7c' width='33%'/>
      <img src='https://github.com/pvvng/pokemon_game_with_nextjs/assets/112927193/59db49ff-5b50-477a-afaa-1b86c2fb00dc' width='33%'/>

</div>

## 1. 개요
- 프로젝트 이름 : 포켓몬 미니 팬 게임 - ⚡로켓단이되⚡
- 개발 기간 : 2024.05.14 ~ 2024.05.23
- 개발 환경 : Next.js, mongoDB, scss
- 사용한 오픈 API : [PokeApi](https://pokeapi.co/)
- 작업 관리 : GitHub
- 배포 : Vercel  
- #### installed Library
        npm install next-auth
        npm install next-pwa
        npm install axios
        npm install mongodb
        npm i --save @fortawesome/react-fontawesome
        npm install animate.css

## 2. 프로젝트 설명

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

## 3. 이용 방법


## 4. 프로젝트 중 신경 쓴 부분


## 5. 프로젝트 중 어려웠던 부분



## 6. 후기
### 추후 추가하고 싶은 기능 혹은 느낀 점

