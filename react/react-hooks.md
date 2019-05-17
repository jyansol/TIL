# :hamster: react hooks 상태관리 useState()

apollo-client의 Mutation, Query를 통해 실제 데이터를 불러오고 변경하는 방법을 배웠다. 하지만 한 컴포넌트안에서 기능이 많아지자 코드의 복잡성도 너무 높아지고, 코드의 흐름도 이해하기 어려웠다. 그래서 react hooks를 통해 더 간단한 구성으로 코드를 짜고, 좀 더 알아보기 쉬운 코드가 되었다. 특히 사용 문법이 간단해서 좋다. 

먼저 react hooks를 사용하려면, class 컴포넌트를 함수형 컴포넌트로 만들어줘야한다.

react의 함수형 component는 class component와 다르게 State와 LifeCycle API를 사용할 수 없었다.
그렇기 때문에 함수형 component는 `간단한` view를 위한 일만 구현했었다.

* :ghost: class component
```jsx
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```

함수형 component로 대체하려면 state를 대체할 방법이 없었기때문에 불가능했었다. 
하지만 `react-hooks`가 추가되면서 useEffect를 통해 LifeCycle을 관리할 수 있다. render가 실행되면서 useEffect가 함께 실행된다.

* :ghost: react-hooks
```jsx
import React, { useState } from 'react';

function Example() {
  // 새로운 state 변수를 선언하고, count라 부르겠습니다.
  const [count, setCount] = useState(0);
  // useState Hook을 이용하면 state변수와 해당 state를 갱신할 수 있는 함수가 만들어진다.
  // 또한 useState의 인자값으로 0 을 넘겨주면, count값을 0으로 초기화 할 수 있다.

  // render 안에서 button을 클릭하면, setCount함수를 호출하여 state 변수를 갱신한다.
  // react는 새로운 count변수를 Example 컴포넌트에 넘기며 해당 컴포넌트를 리렌더링합니다.
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}> 
        Click me
      </button>
    </div>
  );
}
```

# :hamster: react hooks useEffect()

* :ghost: class component
```jsx
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }

  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```

* :ghost: useEffect()
```jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  // 함수를 useEffet()에 전달 => 함수는 결국 나타내고 싶은 효과이다.
  // useEffect는 componentDidMount()나 componentDidUpdate()로 예약하는 효과와 달리 브라우저가 화면을 업데이트하지 못하도록 차단한다.
  // 대부분 효과는 동기적으로 발생할 필요가 없다.

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
## :octocat:
LifeCycle API는 컴포넌트가 사용될 때 여러상황에 따라 호출하는 방법입니다. => 그럼 LifeCycle을 사용하지 않으면
- `componentDidMount()` : 컴포넌트가 mount되고 사용할 준비가 되었다. 컴포넌트가 렌더링 되지 않았을 때 할 수 없었던 것들을 모두 할 수 있는 메소드. 기본적으로 DOM에 대한 접근이 필요한 설정을 수행하고 필요한 데이터를 가져온다.
  * <canvas> 에 렌더링
  * GA
  * EventListener 추가
  * Ajax 호출을 시작하여 컴포넌트에서 사용해야 하는 데이터를 로드한다.
  * setState를 호출한다.
> 이상적인 애플리케이션에서는 렌더링과 관련된 이슈는 거의 `state`와 `props`를 통해 제어한다. 하지만 몇몇의 경우, 더 명확한 제어가 필요할 때가 있다. 때문에 LifeCycle에 접근하여 이상적인 동작에 영향을 끼치지 않아야한다.

- hooks를 사용하면 LifeCycle 메서드 이름대신 `코드가 수행중인 작업을 기반`으로 코드를 분리할 수 있다.
