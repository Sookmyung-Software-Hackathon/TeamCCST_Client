# TeamCCST_Client
### 청춘의 식탁을 당신에게, 청춘식탁

<img width="853" alt="목업" src="https://user-images.githubusercontent.com/20807197/187061814-1ee7ec4c-a97d-41de-8423-0eae598975f0.png">

> 👨🏻‍🍳 👵🏻 👴🏻 맛있는 비법이 가득한 시니어 청춘의 식탁을
누구나 즐길 수 있도록, 시니어 요리법 공유 서비스를 제공합니다.

> Sookmyung Software Hackathon 2nd   
> 프로젝트 기간 : 2022.08.27 ~ 2022.08.28

### Front Developer

| 전희선 |
| :---: |
|<img src="https://avatars.githubusercontent.com/u/67372977?v=4" width="200px" height="200px" />|
|[huiseon37](https://github.com/huiseon37)|

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

### Coding Convention
[Typescript Style Guide](https://basarat.gitbook.io/typescript/styleguide)
