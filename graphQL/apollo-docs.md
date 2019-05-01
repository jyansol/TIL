하,,
회사 프로젝트를 진행하며 아직도 `좋은`개발자가 되는 길은 멀고 험한거같아서 자괴감들다가도 2개월차인 내 모습을 보면 안도했다가 스터디에서 모를때마다 또 자괴감들고 반복되는 일상이다. 일단 나의 상태 진단 결과는 지식이 파편처럼 조각나있다. 연결고리도 없고, 알고있으면서 사용할줄모르거나 사용하고있으면서 알지못하거나,, 지식 파편들을 연결짓기위해 책도 구매했다. (하지만 겉의 겉의 겉의 겉의 겉핥기 정도만 함) 사실 실무는 `협업`과`마감`시간때문에 혼자 낑낑거려서 지식을 습득하고 흡입할 시간이 없다. 일을 하면서도 지식의 파편화 되는 것을 막기위해 늘 기록해야한다고 절실히 느꼈다. 내 목표는 `왜 사용하고 어떤면에서 무엇이 장점이고 무엇이 단점인지 내 생각을 말할 수 있는` 개발자가 되는 것이다. 아직은 너무 몰라서 질문조차 못하는 경우가 많고, 자료를 봐도 `비판` 하는 것이 어렵다.

이쯤에서 회사 프로젝트 기술 스펙을 정리하자면,
> - next.js 
> - styled-components
> - apollo-client ⇒ 그래프큐엘 서버연동 라이브러리
> - apollo-cache(apollo-client) ⇒ 로컬 상태 관리
> - jest, enzyme 
> - eslint
> - prop-types ⇒ 컴포넌트 props 타입 체킹
> - antd-design

이 글에서는 :paperclip: Next.js / apollo에 대해 이야기해보려한다.

# SSR Process (Next.js를 사용하는 SSR)
- Next.js : Universal 리액트 어플리케이션의 SSR을 쉽게 구현할 수 있게 도와주는 간단한 프레임워크
  + Universal : 어디서든 작동한다. 동일한 코드를 서버, 브라우저, 모바일 장치 등에서 실행할 수 있는 기능
    서버에서 사전 작업 => 클라이언트에게 전달 => 클라리언트가 더 작업하고 => 양쪽에서 코드와 뷰를 공유
- Next.js는 기본적으로 제공하는 `file-system routing` 라우터를 내장하고 있다. 
- 규칙이 존재한다.
  + pages 디렉토리 생성
  + 라우팅 url과 동일한 이름의 컴포넌트(자바스크립트 파일)를 생성해야 한다. (라우팅 : 주소에 따른 다른 뷰를 렌더링 하는 것)
  + 파일이름은 camel case가 아닌, hyphen을 사용하여 작성한다.
  + 네스팅된 path를 만들 경우에는 디렉토리를 생성 후, 해당 디렉토리에 필요한 파일을 생성하면 된다.
- 실행
```
yarn run dev (dev 환경)
yarn run build && yarn start (production 환경)
```


# Apollo
- Apollo는 Client, Server 라이브러리, 캐싱 및 궈리 분석도구를 제공한다.
- REST API와 Redux를 대체하는 GraphQL과 Apollo.
- graphql을 기반으로 한 상태관리 플랫폼이다. 클라이언트에서 graphql을 사용하여 데이터를 가져오는 UI를 만들 때 사용하기 좋다.
- 특히 React하고 결합이 좋다. => 컴포넌트 자체에 Query를 녹여서 구현하기가 쉬워진다.
```
yarn install apollo-boost react-apollo graphql
```
- `apollo-boost` : Apollo Client를 설정하는데 필요한 것이 들어있는 패키지
- `react-apollo` : React를 위한 apollo
- `graphql` : GraphQL 쿼리를 사용할 수 있다.


# 참고링크
- [Apollo docs for react](https://www.apollographql.com/docs/react/)
- [GraphQL과 Apollo 사용 중간정리](https://medium.com/@han7096/graphql-%EA%B3%BC-apollo%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EB%A9%B0-%EC%A4%91%EA%B0%84-%EC%A0%95%EB%A6%AC-42981522b188)
