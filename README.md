# NEXT + TS + ESLint 초기 세팅

### CNA + TS
```jsx
yarn create next-app --typescript
```

### Axios
```jsx
yarn add axios
```

### ESLint
```jsx
yarn add -D eslint@^7.11.0 lint-staged prettier eslint-config-prettier eslint-plugin-prettier@^3.4.0 eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-simple-import-sort
```
```jsx
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
```
`.prettierrc`, `.eslintrc.json`파일 생성 및 작성


**이후 추가적인 라이브러리 설치**

# 기타 세팅

### 절대경로 세팅
`.tsconfig`에 다음의 코드 추가
```jsx
"baseurl":"."
"paths": {
      "src/*": ["./src/*"],
      "public/*": ["./public/*"],
}
```



### NEXT SVG 설정
```jsx
yarn add babel-plugin-module-resolver
```
```jsx
yarn add babel-plugin-inline-react-svg
```

`src/types`에 `image.d.ts`파일 생성

`.babelrc`생성 후 다음의 코드 추가
```jsx
{
  "presets": ["next/babel"],
  "plugins": [
    "inline-react-svg",
    [
      "module-resolver",
      {
        "alias": {
          "src": "./src",
          "public": "./public"
        }
      }
    ]
  ]
}
```

`.babelrc` 다음과 같이 수정
```jsx
{
  "presets": ["next/babel"],
  "plugins": [
    "inline-react-svg",
    [
      "module-resolver",
      {
        "alias": {
          "src": "./src",
          "public": "./public"
        }
      }
    ]
  ]
}
```

