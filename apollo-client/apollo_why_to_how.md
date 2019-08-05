## About apollo-client-cache
- apollo-client의 기능중 하나인 caching data 기능이 있다.
- Redux에 의존하지 않고, Apollo Client 1.0의 모든 기능을 지원하는 정규화 된 데이터 저장소이다.
1. 설치
~~~
npm install apollo-cache-inmemory --save
~~~
2. 초기화
- 생성 된 캐시를 ApolloClient에 전달할 수 있다.
```js
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: new HttpLink(),
  cache
});
```
## apollo-cache의 장점 및 특징
- REST API 단점을 보완하고, 다양한 서비스를 제공하는 graphQL 기반의 `Apollo Client`
- apollo client 사용하면 Redux와 Lifecycle method 사용빈도를 줄일 수 있다. 
- 대신 react hooks의 기본 개념 숙지가 필요하다.
- 클라이언트 애플리케이션의 graphQL과 데이터 교환을 돕는다.
- react에서 사용하는 Apollo Client를 특별히 [React Apollo](https://www.apollographql.com/docs/react/)라고 부른다.

## 주요 개념
1. graphQL 스키마를 작성한다.
2. resolve 함수를 작성한다.
3. graphQL 스키마와 resolver 함수를 병합한다.
4. 서버환경을 설정한다.

## 정리
- Apollo Client는 graphQL 기반이므로 서버에서 어떠한 자원을 사용할 수 있는지 정의하고, **클라이언트에서 렌더링에 필요한 데이터를 요청하는 방식**이다. 꼭 필요한 데이터 교환만 이루어진다.