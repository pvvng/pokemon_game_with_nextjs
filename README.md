# 쯔꾸르 미니 포켓몬 팬게임 - ⚡로켓단이되⚡ README

## 설치 방법

#### [포켓몬이되](https://pokemon-sigma-two.vercel.app/)

## 1. 개요
- 프로젝트 이름 : 쯔꾸르 미니 포켓몬 팬게임 - ⚡로켓단이되⚡
- 프로젝트 지속기간 : 2024.05.14 ~ 2024.05.23
- 개발 환경 : Next.js, mongoDB, scss
- 사용한 API : [PokeApi](https://pokeapi.co/)
- 배포 : vercel  
- #### installed Library
        npx create-next-app@latest
        npm install next-auth
        npm install next-pwa
        npm install axios
        npm install mongodb
        npm i --save @fortawesome/react-fontawesome
        npm install animate.css

## 2. 프로젝트 설명

- ##### Next.js 를 활용하여 가볍게 즐길 수 있는 포켓몬스터 미니 팬게임입니다.

- ##### 왜 Next 를 썼을까?
    - ###### 가장 큰 이유는 프론트엔드의 AJAX 비동기 통신의 실무적인 이해를 위해서였습니다.
      아직 백엔드와 협업 경험이 없기에 비동기 통신에 대한 개념적인 이해만 있고, 실제로 서버와 통신한 경험은 부족했습니다. 이는 후일 타인과 협업시에 치명적인 결점이 될 수 있으리라고 판단했고, 백엔드와 통신 경험을 사소하게나마 경험해보는 것이 좋을 것이라 판단했습니다.
    - Next 는 React 프레임워크로 React와 유사한 문법으로 프론트엔드 개발이 가능하고, 같은 프로젝트 안에서 백앤드 개발도 가능합니다. 이 프로젝트를 통해 프론트엔드에서 백엔드와 어떻게 비동기 통신을 하는지 경험하게 되었습니다.
    - 또한, Next-auth를 이용한 소셜로그인이 정말 간편했기에 간편하게 로그인, 로그아웃 API 구현이 가능했습니다.
    - 다만, Next의 App Router 기능을 이용하면서 SPA 패러다임을 구현하지 못한 부분은 아쉽게 다가옵니다. 특히, SSR에 최적이며 SEO에 특화된 Next 프레임워크이기에 그러한 장점을 활용하지 못하는 점이 아쉽습니다. 추후 이러한 Next의 장점을 살려보는 프로젝트를 기획해보고 싶습니다.

- ##### 왜 axios를 썼을까?
    - 자바스크립트 내장함수인 fetch 로도 충분히 비동기 통신이 가능합니다. 다만, axios의 JSON 자동 변환, 효과적인 에러 처리 등의 장점이 위 프로젝트에서 사용하기에 적합하다고 판단했습니다.
  

## 3. 이용 방식



## 4. 프로젝트 중 어려웠던 부분



## 4. 후기
### 추후 추가하고 싶은 기능 혹은 느낀 점

