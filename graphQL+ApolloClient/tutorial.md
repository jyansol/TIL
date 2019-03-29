# GraphQL 소개
- new API
- 강력하고 유연한 대안!
- REST API 의 단점을 보완 
  + 지난 2년동안 API 환경이 크게 바뀌었고, 특히 API가 설계되는 방식에 도전해왔던 목표들이 있다.
  1. 모바일 사용 증가로 인해 효율적인 데이터 로드가 필요하다.
- 어디서나 접근이 가능하다!

# Apollo Client
- 데이터 관리
- React App에서 원격 / 로컬 데이터 관리를 단순화 할 수 있다!
- 선언적 데이터 가져오기
- zero-config 캐싱
- 로컬 및 원격데이터 결합
- 활발한 생태계

# 시작하기
1. 설치
  - `apollo-boost` : apollo client를 설정하는데 필요한 모든 것들이 들어있는 패키지
  - `react-apollo` : React를 위한 view layer
  - `graphql` : query구문 해석
2. create a client
```js
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io"
});
``` 

