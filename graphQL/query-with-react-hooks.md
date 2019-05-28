# :satisfied: apollo-client를 사용한 GraphQL에 query 날리기
react-hooks를 사용하지 않고, apllo client를 통해 graphQL에 요청을 보낼 때, 필요한 컴포넌트에서 `query language`와 `Query component`를 사용해 요청을 보낸다.
graphQL API는 보통 하나의 Endpoint를 사용하며, 요청시 사용하는 query문에 따라 응답의 구조가 바뀐다. Apollo-client는 클라이언트 애플리케이션에서 graphQL과 연동을 쉽게 도와주는 라이브러리이며, React에서 사용하는 라이브러리(React Apollo)도 따로 제공된다. 사용시 권장되는 규칙이 있다.

## :seedling: Best Practice
1. **파일관리**
  * query문은 해당 컴포넌트 디렉토리에 queries.js 파일을 만들어서 따로 관리해주는것이 좋다.
2. **네이밍규칙**
  * 때문에 변수명 앞에 export를 써서 index에서 불러와 사용할 수 있도록 한다.
  * 변수명은 `_`를 사용하고 전부 대문자로 작성한다.
  * query문에는 PascalCase로 작성한다.
  * index에서 사용할 query함수로 첫글자만 소문자로하는 lowerCamelCase를 사용한다.
  * 헷갈리지 않게 전부 같은 이름으로 작성한다.

```js
//queries.js
export const GET_DOG_PHOTO = gql`
  query GetDogPhoto($breed: String!) {
    getDogPhoto(breed: $breed) {
      id
      displayImage
    }
  }
`;
```
## :open_mouth: **How to**
작성된 query는 Apollo client에서 컴포넌트와 함께 사용할 수 있다. 데이터를 받아올 때는 Query 컴포넌트를 사용한다. 

컴포넌트에서 사용시 필요한 것은 graphQL query문이며, query 문자열을 gql 함수로 감싸줘야한다. 이것을 Query 컴포넌트에 query props로 추가한다.

이 query문을 사용하려면, index에서 해당 Queries를 import한 후, 컴포넌트를 export 해주는 영역에서 `compose`를 통해 해당 query의 data를 불러온다.

```js
//index.js
export default compose(
  graphql(Queries.GET_DOG_PHOTO, {
    props: ({ data }) => ({
      getDogData: data
    })
  })
)(DogPhoto);
```

컴포넌트에서 아래와 같이 사용하는데, DogPhoto 컴포넌트는 breed를 props로 받고 있다. 이 값은 상위 컴포넌트의 값으로, variables라는 props가 추가되어 graphQL query에 variables를 포함하여 보낼 수 있다.

```js
//index.js
const DogPhoto = ({ breed }) => (
  <Query query={GET_DOG_PHOTO} variables={{ breed }}>
    {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return `Error!: ${error}`;

      return (
        <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
      );
    }}
  </Query>
);
```

## 함수형 컴포넌트로 작성하는 이유
컴포넌트가 LifeCycle API도 사용하지 않고, state도 사용하지 않고, props만 전달해주는 뷰를 렌더링한다면, **함수형 컴포넌트**를 사용할 수 있다. 때문에 `무슨동작을 하는 컴포넌트냐`에 따라 달라지게된다. 

# :satisfied: react-hooks를 사용한 GraphQL에 query 날리기
자, 이제 위의 코드를 react-hooks를 통해 바꿔보자! :metal:
함수 컴포넌트는 state가 없는 컴포넌트로 알려져있지만, Hooks를 사용하게 되면 reate state를 함수 안에서 사용할 수 있게 된다.

## 1. react-apollo-hooks 시작하기
```js
//index.js
import { useQuery } from 'react-apollo-hooks';

const DogPhoto = () => {
  // ...
}
```
## 2. useQuery로 query문 가져오기
위의 variables에 대한 내용은 생략한 코드입니다.
```js
//index.js
const DogPhoto = () => {
  const {data: {getDogPhoto}} = useQuery(Queries.GET_DOG_PHOTO);
}  
```
## 3. data 사용하기
useQuery()안에 기본값을 넣을 수 있다. 
```jsx
//index.js
const DogPhoto = () => {
  const {data: {getDogPhoto}} = useQuery(Queries.GET_DOG_PHOTO);
  const { id, displayImage } = getDogPhoto;
  return (
  <img src={displayImage} style={{ height: 100, width: 100 }} />
  )
}  
```

**개인적으로 공부하고 이해한 내용이므로 잘못된 내용이 있다면 댓글달아주세요. 혹은 참고될만한 내용/링크 달아주셔도 좋습니다!**

# 정리
query문으로 받아온 data로 또 query를 날리고, 또 받아온 data로 또 query를 날릴 때 useQery로 예쁜코드를 작성할 수 있다. render되는 코드에서도 직접 사용함으로 직관적이다. `Effect Hook(useEffect)`도 사용해서 LifeCycle API를 구현할 수 있다. 