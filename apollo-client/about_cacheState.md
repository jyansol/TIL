# :smiley_cat: 로컬 상태 관리
```
lib/
  apollo/
    initialCacheState.js
views/
  main/
    index.js
    queries.js
    cacheState.js
```
> ## cacheState.js
- apollo-client에서 초기값을 정해주는 파일로, 로컬 상태를 관리할때 사용한다. 관리되는 상태는 정하기 나름이지만, 유저의 입력정보를 주로 관리했다. 
- cacheState.js파일은 각 views와 관련이 있는 데이터의 초기 상태를 지정하는 파일이다.
- cacheState를 지정할때, 반드시 `__typename` 속성을 작성해야한다. 아폴로 캐쉬의 모든 상태는 graphql의 type 시스템을 따라가기 때문에, 각 객체 단위마다 `__typename` 속성에 type 이름을 작성해야한다.
```js
export default {
  username: null,
  password: null,
  __typename: 'Login'
};
```
> ## initialCacheState.js
- 위와 같이 초기 상태를 작성했으면, 이 내용을 아폴로 client를 생성하는 생성자 옵션에 추가한다.
- `lib/apollo/initialCacheState`에 접근하여 각 view의 `cacheState` 를 추가한다.
> ## queries.js
- `queries.js`에서 query, mutation을 통해 값을 소비하고, 변경한다.

### :jack_o_lantern: 마무리 
views/index.js :point_right: cacheState.js(로컬 상태 관리) :point_right: lib/apollo/initialCacheState cacheState 추가 :point_right: queries.js에서 client query 와 mutation 만들어주기 :point_right: index.js에서 소비하고, 업데이트하기