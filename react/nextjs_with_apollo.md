
# :sparkles: 왜
nextjs + React + apollo-client 조합으로 SSR 구현을 하게되었다. 물론 98% 짜여진 코드에 2% 치명적인 코드를 수정해야하는 작업이었지만, 클라이언트에도, 서버에도 매우 치명적인 오류였기때문에 반드시 고쳐야만했다. 🔧🔨react-apollo는 이 프로젝트를 통해 처음 접하는 라이브러리였고, 아직 레퍼런스도 부족해서 ~~영알못이라 더욱 부족하게느낌~~ 오류를 접하면 해결하는데 어려움이 있었다.

프레임워크없이 SSR을 구현해본적은 없지만, 

# :sparkles: Next.js
### :blue_heart: Nextjs에서 요구하는 구조를 따라야한다. 
```
pages/
  index.js
  about.js
  my-page/
    index.js
    order.js
```
위와같이 파일을 생성하면, 아래와같은 route 구조가 만들어진다.
```
/
/about
/my-page
/my-page/order
```
### :blue_heart: HOW TO
```js
static getInitialProps()
```

**react-apollo**는 컴포넌트가 그려질때 함께 데이터를 패치하고 그 결과를 그린다. 그렇기때문에 next.js는 SSR을 위해 데이터를 패치하는 쿼리를 getInitalProps에서 먼저 실행하고, 이를 페이지에 props로 내려준다. ~~그럼 컴포넌트들의 쿼리를 따로 분리해서 서버에 따로 보내고, 초기 데이터가 주어질 경우에는 데이터 패치를 막는 로직을 컴포넌트마다 넣어주면 된다!~~

는 Dirty Code(더티코드) & 스파게티 코드를 초래한다. 이 문제를 react-apollo가 쉽게 도와준다! 

# :sparkles: React-apollo
react-apollo에서 제공하는 

```js
getDataFromTree('React Tree ( ex : <Query />')
```
getDataFromTree함수로 데이터를 렌더링시 같이 패치하고 캐시 할 수 있다. apollo-client는 캐시를 통해 데이터를 한번 패치한 상태에서 렌더링하게되면 상태가 모두 존재하므로 패치없이 렌더링된다.

next.js는 렌더링이 시작되기 전에 getInitialProps를 통해 초기 props를 설정할 수 있다. 그렇기때문에 apollo-client 초기 cacheState를 만들어둔다면, 컴포넌트들을 렌더링하면서 패치가 일어나지않고, 캐시를 통해 데이터를 가져가게되므로 특정 컴포넌트에 의존적이지 않는 구조가 가능하다.

# :sparkles: react-hooks
react-hooks에서 제공하는
```js
getMarkupFromTree('React Tree ( ex : <Query />)')
```
react-hooks를 사용한 프로젝트에서 사용할 수 있는 함수로, getMarkupFromTree함수를 통해 SSR이 가능하지만, 아직 안정화되지 않았다고한다..!

# :question: Issue
현재 진행중인 서비스의 쿼리 컴포넌트들은 react-hooks로 짜여진 컴포넌트 + 그렇지 않은 컴포넌트들로 구성되어 있어서 `getDataFromTree` 와 `getMarkupFromTree`를 함께 사용하였더니, 에러가 발생했다. 그래서 일단은 react-hooks가 사용된 컴포넌트들이 많으니 getMarkupFromTree 함수를 사용하였는데, 에러가 났다. :persevere: 그래서 **에러가 나지않는** getDataFromTree를 사용하였는데, getDataFromTree가 받아오는 컴포넌트가 최상단 컴포넌트로 react-hooks가 적용된 컴포넌트는 아니기때문에 가능했다. 라고 받아들이면 될지 의문이다.

# :speech_balloon: 마무리
- [react-apollo-hooks는 공식적인 라이브러리는 아니다.](https://github.com/trojanowski/react-apollo-hooks)
- [Next.js with apollo 예제](https://www.sololearn.com/Courses/)
