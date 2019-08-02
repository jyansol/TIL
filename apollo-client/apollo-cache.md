### 로컬 상태 관리
1. 상태로 만들어줘야 할 부분
- input
- 변하는 부분 전부! (쇼핑몰을 예로들면 갯수나 가격, 옵션)
- 유저의 입력정보 

2. 상태 초기화
- cacheState.js 파일을 만들어 상태로 만들어줄 초기값을 설정한다.
- 반드시 `__typename`이 필요하다.
- apollo cache의 모든 상태는 graphql의 type 시스템을 따라가기때문에, 각 객체 단위마다 `__typename` 속성에 type이름을 작성해야한다.

3. 생성자 옵션 추가
- `lib/apollo/initalCacheState` 에 접근하여 각 view의 `cacheState`를 추가한다.

### 로컬 데이터 소비
1. 로컬 데이터 소비하기
- apollo cache는 모든 상태데이터가 graphql로 관리되고 있기 때문에 데이터를 불러올때, graphql Query를 사용하여 데이터를 불러온다.

1. query파일 생성
- 로컬 데이터를 쿼리할 때에는 쿼리 이름 옆에 `@client` 키워드를 작성해야한다.
- 로컬데이터 쿼리가 준비되면 `compose`, `graphql` 혹은 react-hooks `useQuery`을 통해 가져올 수 있다.

### 로컬 데이터 업데이트
1. resolver를 작성하여 mutation을 통해 데이터를 변경하는 것을 권장한다. 
- resolver란, 각 쿼리 필드에 대한 요청을 처리하는 로직을 담고 있는 함수이다.
- `lib/apollo/resolvers`에서 추가할 수 있다.

2. resolver를 작성 후, queries파일에 mutation 쿼리를 작성할 수 있다. 
- mutation 쿼리를 작성한 후, mutation 요청을 보내면(update), 요청 내용에 따라 로컬 데이터가 변경된다.
- 이때 mutation 쿼리도 로컬 데이터에 대한 작업이기 때문에 반드시 `@client` 키워드를 추가한다.

### 로컬데이터와 데이터
- 로컬데이터는 초기값을 설정하고 변화시킬 수 있는 부분
- 데이터는 저장된 정보를 graphql에서 쿼리를 받아오는 경우