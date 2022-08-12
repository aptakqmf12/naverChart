
## start
`npm install` <br />`npm run start` <br /><br />
`yarn` <br />`yarn start`

## 프로젝트 설명
- 본프로젝트는 React(functional),Typescript, Redux-saga, Redux-persist, styled-components, recharts.js를 사용하여 네이버API정보를 가져와 차트로 보여주는 프로젝트입니다.
- Inputs컴포넌트에서 입력받은값을 reducer에 저장하여 redux-persist를 이용하여 로컬스토리지에 정보를 남기며, redux-saga를 요청을 날리고 응답을 reducer에 저장합니다.
- Chart컴포넌트에서 reducer에 있는 응답값을 그룹핑하여 recharts에 데이터를 동적으로 넘겨주어 응답값(특히 ages)에 따라 여러개의 Line의 차트를 그려줍니다.
- Naver API 정보는 dotenv로 저장하여 github에 올리지 않았습니다.

- *에러사항 : recharts를 처음 사용해봤는데, 데이터를 그룹핑하여 차트를 그리니, 라인의 너비가 개수만큼 나누어져 그려지는 버그발생.  
- 해당 프로젝트는 채용과제였는데, 합격하여 `lodash`를 사용하여 처리하였음.

## 선택구현사항
- Redux-Saga
- Redux-persist

## Naver Open API 활용 시 발생하는 CORS Issue에 대한 해결 방법
- SOP에 의해 Origin이 달라 CORS가 막히기 때문에, 네이버 API의 응답 Origin을 proxy를 이용해 네이버api주소으로 바꾸어 임시로 CORS을 하였습니다.
- 따라서 package.json 파일에 proxy를 추가해주었습니다.
- 근본적인 해결책은 서버쪽에서 처리해줘야하며, 응답헤더의 `Access-Control-Allow-Origin`에 도메인을 추가해주거나 wildcard인 '*'을 추가해줘야합니다.

## 피드백
1. fetchData를 리덕스에 실제로 적용하지않고 useEffect내부에서만 사용했다
2. recharts에 다중 라인으로 표현할시 {"10": number, "20":number, "30":number .... "60":number}이런식으로 한 객체에 나이별 데이터가 들어가야하는데 reduce가 익숙하지않아 그루핑에 실패했다. -> lodash를 사용하여 해결
