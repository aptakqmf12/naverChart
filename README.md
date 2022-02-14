## Naver Open API 활용 시 발생하는 CORS Issue에 대한 해결 방법

- SOP에 의해 Origin이 달라 CORS가 막히기 때문에, 네이버 API의 응답 Origin을 proxy를 이용해 localhost:3000으로 바꾸어 임시로 CORS을 하였습니다.
- 따라서 package.json 파일에 proxy를 localhost:3000로 세팅했습니다.
