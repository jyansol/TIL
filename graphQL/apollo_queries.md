# 📌 Queries :: 로컬상태관리 편

## Learn how to fetch data with Query components
graphQL에서 성공적으로 실행되는 query는 Apollo에서도 실행된다. => 왜냐하면 Apollo는 graphQL 기반이기 때문에

## What is queries.js
`queries.js`에 query와 mutation을 변수로 저장해서 컴포넌트에서 불러와 사용한다. apllo-client를 통한 상태관리는 로컬과 전역으로 구분되는데, 로컬의 상태관리는 리액트의 constructor의 `this.state`라고 생각하면 된다. client에서 필요한(input을 관리한다고 생각하면 편함) 
꼭 이렇게 작성해야하는 것은 아니지만, 로컬 상태에서 관리할때 export const 다음에 오는 변수병은 전부 `대문자` => query 혹은 mutation 다음에 오는 이름은 `CamelCase` => 그 다음 오는 함수는 `소문자`로 쓰는 규칙을 정해두면 사용하기 편리하다. 그리고 `@client`를 붙이는 것은 remote가 아닌 클라이언트에서 사용하겠다는 의미이다. 
먼저 query / mutation을 사용하기 위해 `graphql-tag`를 import한다.
```js
import gql from 'graphql-tag';
```
```jsx
export const EXAMPLE = gql`
  query Example { 
    example @client {
      value1
      value2
    }
  }
`;
```
그리고 그 상태들을 관리해줄 (업데이트) update mutation이 필요하다.
```jsx
export const UPDATE_EXAMPLE = gql`
  mutation UpdateExample($value: String, $value2: String) {
    updateExample(value1: $vaule, value2: $value) @client
  }
`;
```
update mutation은 resolvers.js에 사용하겠다는 코드를 작성 후, 해당 컴포넌트로 돌아와 `compose`를 통해 data 혹은 mutate로 가져온다.

이 방법을 react-hooks를 사용하면 아-주 간편하게 사용할 수 있다.