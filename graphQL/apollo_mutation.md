## Project에서 code review!


## [Mutation CodeSandBox example](https://codesandbox.io/s/v3mn68xxvy)
Building Mutation Component 예제를 보고 코드 정리를 한 내용입니다. 

## 1. 서버의 todos를 가져온다.
```js
const GET_TODOS = gql`
  {
    todos {
      id
      type
    }
  }
`;
```

## 2. update할 mutate를 추가한다. 변경되어 서버로 보내질 내용을 넣는다.
```js
const UPDATE_TODO = gql`
  mutation UpdateTodo($id: String!, $type: String!) {
    updateTodo(id: $id, type: $type) {
      id
      type
    }
  }
`;
```

## 3. 데이터에 있는 Todos가 그려질 부분
```js
  // 3-1. Query로 loading, error, data를 받아온다.
  // 3-2. data의 todos들을 map돌려서, id랑 type을 받아오고
  // 3-3. const Todos = 여기서 그려지는 부분은 추가된 todo, input, update Todo를 불러올거임
  // 3-4. Form 전체를 Mutation component로 감싸고, 속성에 mutation={UPDATE_TODO}를 추가한다. 
const Todos = () => (
  <Query query={GET_TODOS}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.todos.map(({ id, type }) => {
        let input;

        return (
          <Mutation mutation={UPDATE_TODO} key={id}>
            {(updateTodo, { loading, error }) => (
              <div>
                <p>{type}</p>
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    updateTodo({ variables: { id, type: input.value } });

                    input.value = "";
                  }}
                >
                  <input
                    ref={node => {
                      input = node;
                    }}
                  />
                  <button type="submit">Update Todo</button>
                </form>
                {loading && <p>Loading...</p>}
                {error && <p>Error :( Please try again</p>}
              </div>
            )}
          </Mutation>
        );
      });
    }}
  </Query>
);
```

## 4. 새로운 Todo를 데이터에 보낸다.
```js
const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;
```

## 5. cache 저장 / 업데이트를 위한 todos { id } 가져오기
apollo client는 InMemoryCache를 통해 cache를 생성하고 상태들을 cache로 관리한다. Mutation을 사용할때, GraphQL 서버와 apollo-cache가 동기화 되지 않는 경우가 있다. update의 데이터가 이미 cache에 있는 데이터에 의존할때 발생한다. 
```js
const TODOS = gql`
  {
    todos {
      id
    }
  }
`;
```

## 6. AddTodo 만들기 / 캐시 업데이트
:bulb: 
- Mutation Component의 mutate 속성에 {ADD_TODO} mutation을 가져온다.
- updete 속성에 cache, addTodo Mutate를 가져온다.
- cache는 일반적으로 클라이언트가 생성될때 InMemortCache로 제공된 인스턴스이다.
- update속성은 cache를 첫번째 인수로 사용하여 호출한다.
- update속성의 두번째 인수는 mutation의 결과를 포함한 데이터 속성이 들어있는 객체이다.  
- update에 addTodo data를 전달해서, todos 변수에 담아 쓸 수 있다. => 우리가 흔히 생각하는 데이터의 구조가 todos라는 변수에 담긴다. (배열 혹은 객체) 
- :smile_cat: cache는 readQuery / writeQuery 기능을 갖고있다.
- :smile_cat: `readQuery` : todos 목록을 표시하는 쿼리를 업데이트 해야하기 때문에 캐시에서 데이터를 읽는다.
- :smile_cat: `writeQuery` : mutation의 `새로운 todo`를 `기존 todos의 목록과 연결하고 쿼리를 다시 캐시에 쓰기 위해` cache.writeQuery를 사용합니다.
> 모든 mutation이 업데이트 기능을 필요로 하는 것은 아니다.
> `하나의 항목`을 업데이트하는 경우 일반적으로 항목 `id` 밎 업데이트한 속성을 반환하는 업데이트 기능이 필요하지 않는다.

```js
const AddTodo = () => {
  let input;

  return (
    <Mutation
      mutation={ADD_TODO}
      update={(cache, { data: { addTodo } }) => {
        const { todos } = client.readQuery({ query: TODOS });
        client.writeQuery({
          query: TODOS,
          data: { todos: todos.concat([addTodo]) }
        });
      }}
    >
      {addTodo => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              addTodo({ variables: { type: input.value } });
              input.value = "";
            }}
          >
            <input
              ref={node => {
                input = node;
              }}
            />
            <button type="submit">Add Todo</button>
          </form>
        </div>
      )}
    </Mutation>
  );
};

```
- Mutation 하위기능으로 mutate, variables, optimisticResponse, refechQueries, update가 있다.

## 7. load & error
Mutation의 `loadign`하고 `error`를 사용할 수 있습니다. 

## 8. 로컬 상태 관리
- 지금까지 graphQL서버에서 원격 데이터를 관리(불러오기, 업데이트)하는 방법에 대해 알아보았다. 그럼 로컬데이터로는 무엇을 해야할까? Redux 또는 MobX 저장소대신 Apollo cache를 클라이언트 APP의 모든 데이터에 대해 단일 소스로 사용하는 것이 이상적이다! 
- 로컬데이터 :: 별도로 원하는 만큼 추가 데이터를 관리할 수 있다. => `@client`

## 9. @client로 로컬 상태 업데이트하기
- `@client`를 붙이는 것은 graphQL 서버로 보내지 않고, 캐시에서 또는 로컬 resolvers를 사용하여 로컬 필드 데이터를 가져올 수 있다. 
- `@client`를 통해 캐시를 쿼리하고 업데이트하는 방법에 대해알아보려한다.
- 

```js
const GET_VISIBILITY_FILTER = gql`
  {
    visibilityFilter @client
  }
`;
```
