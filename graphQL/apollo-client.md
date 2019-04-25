# React + GraphQL + Apollo-Client

### GraphQL-Client 가 필요한 이유
- GraphQL 과 더불어 GraphQL-client가 몇 가지 있는데, React 애플리케이션을 위한 `데이터 관리` 프레임워크이다.
1. Relay
  - 각 컴포넌트마다 필요한 데이터를 선언하고, 컴포넌트 계층구조에 따라 필요한 테이터를 상위 컴포넌트로 전달 및 조합하여 단일 GraphQL 쿼리로 만들어준다.  
1. Apollo Client
  - Redux-based
  - query, mutation을 작성하고 인스턴스를 사용하여 요청을 보낼 수 있다.
  - 프로덕션 가능, 캐싱 GraphQL 클라이언트

### 백엔드  
1. GraphQL Playground 설치
```
$ brew cask install graphql-playground
``` 
1. 서버코드 다운로드
- 프로젝트 디렉토리에서 명령 실행
```
 curl https://codeload.github.com/howtographql/react-apollo/tar.gz/starter | tar -xz --strip=1 react-apollo-starter/server
```
- server 디렉토리가 생성되고, server/scr/schema.graphql을 살펴보면 앱에 보낼 수 있는 작업(query, mutation 등)을 정의하는 Schema가 들어있다.
**Schema란 Query, Mutation, Subscription유형이 있다.**
- 

### 1. 시작하기
```
npx create-react-app my-app
```
```
yarn start
```

### 2. Apollo Client 설치
```
yarn add apollo-boost react-apollo graphql
```

### 3. index.js에 다음 코드 추가하기
```js
// src/component/LinkList.js
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
serviceWorker.unregister();
```
**추가되는 모든 코드에는 세미콜론과 따옴표를 사용하지 않습니다.**

### 4. Apollo Client로 쿼리 보내기
- Apollo를 사용할 때, 서버에 쿼리를 보내는 두 가지 방법
1. 직접 쿼리 메서드를 사용하는 것
```js
// src/component/LinkList.js
client.query({
  query: gql`
    {
      feed {
        links {
          id
        }
      }
    }
  `
}).then(response => console.log(response.data.allLinks))
```
2. 하지만 React를 사용할때는, `React Apollo`를 사용
- 파서 함수를 사용하여 자바 스크립트 상수로 쿼리를 작성한다. `gql`
- GraphQL 쿼리를 소품으로 전달 하는 구성 요소 사용 `<Query />`
- 구성 요소에 주입 된 쿼리 결과에 액세스합니다. `render prop function`
2-1. qql 함수를 사용하여 쿼리를 저장하는 FEED_QUERY 생성 
```js
// src/component/LinkList.js

// 가져오기
const FEED_QUERY = gql`
      {
        feed {
          links {
            id
            createdAt
            url
            description
          }
        }
      }
    `;
```
2-2. 반환코드를 <Query><Query/>로 감싸줍니다.
```js
// src/component/LinkList.js

// linksToRender :: Test data
return (
  <Query query={FEED_QUERY}>
    {() => linksToRender.map(link => <Link key={link.id} link={link} />)}
  </Query>
)
```

### 5. 종속성
- 위 코드가 동작하게 하려면, 종속성이 필요하다.
```js
// src/component/LinkList.js
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
```

### 6. 모의 데이터를 제거하고 서버에서 가져온 실제 링크를 렌더링 할 수 있다.
- render prop 기능 덕분에 서버에서 가져온 실제 링크를 렌더링 할 수 있다.
- LinkList.js 파일을 업데이트 해준다.
```js
// src/component/LinkList.js
<Query query={FEED_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <div>Fetching</div>
        if (error) return <div>Error</div>
  
        const linksToRender = data.feed.links
  
        return (
          <div>
            {linksToRender.map(link => <Link key={link.id} link={link} />)}
          </div>
        )
      }}
</Query>
```

### 7. Mutation 만들기
1. src/comonents에 CreateLink.js 파일을 만든다.
2. Nutation을 저장하는 POST_MUTATION 변수를 만든다.
3. 필요한 elements에 감싼다.
4. http://localhost:3000/ 에서 input에 정보를 넣어서 `submit`보냈는데,
`Error: GraphQL error: Only absolute URLs are supported` 라고 에러가 뜬다..

-- 왜그러지 --