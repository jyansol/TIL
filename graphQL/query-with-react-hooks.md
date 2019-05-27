# :satisfied: apollo-client를 사용한 GraphQL에 query 날리기
react-hooks를 사용하지 않고, apllo client를 통해 서버에 요청을 보낼 때, 필요한 컴포넌트에서 `query문`과 `Query component`를 사용해 요청을 보낸다. apollo-client를 사용하는 이유는 :kissing_closed_eyes: [여기](./apollo_getStarted.md)에서 확인할 수 있다. query문에는 query를 보낼때 함께 보낼 `variables`와 `variables의 Type` 그리고 return되는 key를 작성할 수 있다. 물론 variables가 없는 query도 있다. 그래서 아래와 같은 문법으로 작성하는데, 권장되는 규칙이 있다.

## :seedling: Best Practice
1. 파일관리
1. 네이밍규칙
  * query문은 해당 컴포넌트 디렉토리에 queries.js 파일을 만들어서 따로 관리해주는것이 좋다.
  * 때문에 변수명 앞에 export를 써서 index에서 불러와 사용할 수 있도록 한다.
  * 변수명은 `_`를 사용하고 전부 대문자로 작성한다.
  * query문에는 PascalCase로 작성한다.
  * index에서 사용할 query함수로 첫글자만 소문자로하는 lowerCamelCase를 사용한다.
  * 헷갈리지 않게 전부 같은 이름으로 작성한다.

```js
export const GET_DOG_PHOTO = gql`
  query GetDogPhoto($breed: String!) {
    getDogPhoto(breed: $breed) {
      id
      displayImage
    }
  }
`;
```

이 query문을 사용하려면, index에서 해당 Queries를 import한 후, 컴포넌트를 export 해주는 영역에서 `compose`를 통해 해당 query의 data를 불러온다.

```js
export default compose(
  graphql(Queries.GET_DOG_PHOTO, {
    props: ({ data }) => ({
      getDogData: data
    })
  })
)(DogPhoto);
```

그리고 class 대신 `함수형 컴포넌트`로 작성한 후 인수로 data를 받아온다.

```js
const DogPhoto = (getDogPhotoData: {getDogPhoto}) => {
  const {id, displayImage} = getDogPhoto;
  const handleClick = () => {
    // handling
  } 
  return (
    // ... return 
  )
}
```
 
# :satisfied: react-hooks를 사용한 GraphQL에 query 날리기
자, 이제 위의 코드를 react-hooks를 통해 바꿔보자! :metal:

# todo ; 왜 함수형 컴포넌트로 작성해야하는지 / react-hooks로 바꾸기

