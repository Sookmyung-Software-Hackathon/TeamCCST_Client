# TeamCCST_Client
### 청춘의 식탁을 당신에게, 청춘식탁

<img width="853" alt="목업" src="https://user-images.githubusercontent.com/20807197/187061814-1ee7ec4c-a97d-41de-8423-0eae598975f0.png">

### 서비스 개요

> **“젊은 세대는 배우려하고, 시니어 세대는 교류하려한다”**   
대한민국 대표 시니어 유튜버 ‘박막례 할머니'의  ‘박막례시피' 에 MZ 세대들은 왜 이렇게 열광할까요?   
MZ 세대들은 시니어의 연륜과 경험을 궁금해합니다.         
> <br/>
하지만, 시니어가 주체가 되어 경험을 공유하는 플랫폼은 아직 많지 않습니다. 
> <br/>
전체 인구의 14% 가 노년층인 한국은 고령사회입니다.    
우리는 이제 ‘세대 차이' 가 아닌 ‘세대 **공존**' 향해 나아갈 시기입니다.   
> <br/>
‘청춘식탁'은 고령 사회에서 **젊은 유저와 시니어 유저의 공존을 위한 플랫폼이 부족하다는 Pain Point** 에서 출발했습니다.    
> <br/>
시니어 유저는 비법이 가득한 요리법을 언제 어디서나 간편하게 등록할 수 있습니다.   
“할머니가 자주 해주시던 김치전이 먹고싶은데"..    
특별한 손맛이 궁금한 유저들은 언제든 시니어 유저의 요리법을 열어볼 수 있죠. <br/>     
   
**‘청춘식탁’은 시니어 세대가 주체가 되고,     
젊은 세대들이 시니어와 음식이라는 매개체를 통해 유대감을 형성할 수 있는 가장 따뜻한 서비스입니다.** 

[청춘식탁 베타버전 바로가기](https://ccst-client.vercel.app/) 
** 모바일 웹으로 이용해주세요

> Sookmyung Software Hackathon 2nd   
> 프로젝트 기간 : 2022.08.27 ~ 2022.08.28

### 기획서
[기획서 바로가기](https://myjouney.notion.site/29c5f73040f949f0b12234828058ca09)

### 서비스 명
> 청춘 : 십 대 후반에서 이십 대에 걸치는 인생의 젊은 나이 또는 그런 시절을 이르는 말.   
> <br/>
십 대 후반, 이십 대라는 사전적 의미를 넘어   
오랜 청춘을 보내고 있는 시니어들이 이제 청춘을 시작한 사람들에게 공유하는 따뜻한 식탁의 의미를 담았습니다.


### 서비스 목적
> **시니어 세대의 능동적인 컨텐츠 참여**   
> **시니어 세대와 MZ 세대 간의 공감대 형성**   
> ‘**음식'이라는 가벼운 주제를 통한 세대 간의 소통 활성화**   

### 기대 효과
> **시니어 세대와 현대 문화의 공존**   
> **시니어 세대와 MZ 세대 간의 화합**   
> **자연스러운 소통을 통한 세대 간의 유대감 형성**   

### 디자인 시스템
![디자인시스템](https://user-images.githubusercontent.com/20807197/187070814-b95909d9-ac46-495f-83b0-404320b14b86.png)

### 주요 기능
![홈화면-설명](https://user-images.githubusercontent.com/20807197/187070745-67472d97-96cf-4f09-b513-f733b413c293.png)
![회원가입설명](https://user-images.githubusercontent.com/20807197/187070758-9a75f4b7-7c88-4fd3-b0fe-5fe41663bfff.png)
![요리법 상세보기](https://user-images.githubusercontent.com/20807197/187070760-1d3f08ce-61ff-4485-bed2-1bc67836f2d0.png)
![작성하기](https://user-images.githubusercontent.com/20807197/187070775-c9d01554-03ed-4cc3-8536-eb2d74129306.png)

### 사용 기술스택
<p align="left">
  <img src="https://img.shields.io/badge/-react-58c3ff?labelColor=white&logo=React" height="30px">
  <img src="https://img.shields.io/badge/-Typescript-3178C6?labelColor=white&logo=Typescript" height="30px">
  <img src="https://img.shields.io/badge/-Next.js-000000?labelColor=white&logo=Next.js&logoColor=000000" height="30px">
</p>

### 사용 라이브러리
```json
  "dependencies": {
    "@types/styled-components": "^5.1.26",
    "axios": "^0.27.2",
    "babel-plugin-inline-react-svg": "^2.0.1",
    "babel-plugin-module-resolver": "^4.1.0",
    "next": "12.2.4",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-responsive": "^9.0.0-beta.10",
    "styled-components": "^5.3.5",
    "styled-reset": "^4.4.2"
  },
  "devDependencies": {
    "@types/node": "18.6.4",
    "@types/react": "18.0.15",
    "@types/react-dom": "18.0.6",
    "@typescript-eslint/eslint-plugin": "^5.32.0",
    "@typescript-eslint/parser": "^5.32.0",
    "babel-plugin-styled-components": "^2.0.7",
    "eslint": "8.21.0",
    "eslint-config-next": "12.2.4",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-import": "^2.26.0",
    "eslint-plugin-jsx-a11y": "^6.6.1",
    "eslint-plugin-prettier": "^3.4.0",
    "eslint-plugin-react": "^7.30.1",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-simple-import-sort": "^7.0.0",
    "lint-staged": "^13.0.3",
    "prettier": "^2.7.1",
    "typescript": "4.7.4"
  }
 ```
 
### 폴더 구조
```
📁src
├── 📁components
│   ├── 📁Join
│   │   ├── JoinInputDiv.tsx
│   │   └── SelectNickname.tsx
│   ├── 📁Login
│   │   └── LoginInputDiv.tsx
│   ├── 📁Recipe
│   │   ├── 📁Detail
│   │   │   └── DetailInfo.tsx
│   │   └── 📁Main
│   │       ├── CardList.tsx
│   │       └── RecipeCard.tsx
│   ├── Responsive.tsx
│   └── 📁common
│       ├── Button.tsx
│       ├── Footer.tsx
│       ├── Header.tsx
│       ├── InDesktop.tsx
│       ├── Input.tsx
│       ├── Layout.tsx
│       ├── ProgressBar.tsx
│       └── UnderBox.tsx
├── 📁constants
│   ├── DeviceInfo.ts
│   ├── availableWidths.ts
│   ├── dummy.ts
│   └── nicknameList.ts
├── 📁cores
│   └── api.ts
├── 📁hooks
│   ├── useMedia.ts
│   └── useWindowSize.ts
├── 📁pages
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── auth
│   │   ├── join.tsx
│   │   └── login.tsx
│   ├── index.tsx
│   ├── 📁recipe
│   │   ├── [id].tsx
│   │   └── index.tsx
│   └── write.tsx
├── 📁styles
│   ├── animation.ts
│   ├── globalStyle.ts
│   ├── mediaQuery.ts
│   ├── mixin.ts
│   └── theme.ts
├── 📁types
│   ├── image.d.ts
│   └── inputType.ts
└── 📁utils
    └── encode.ts

```

### Front Developer

| 전희선 |
| :---: |
|<img src="https://avatars.githubusercontent.com/u/67372977?v=4" width="200px" height="200px" />|
|[huiseon37](https://github.com/huiseon37)|
