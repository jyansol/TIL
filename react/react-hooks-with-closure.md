hooks가 내세우는 가장 큰 장점은 클래스와 고차컴포넌트의 복잡성을 피할 수 있다는 것이다. 그러나 악명높은 **클로저**때문에 초심자에게는 혼란을 줄 수 있다.

### :pizza: 클로저(Closure)

클로저는 함수가 속한 렉시컬 스코프를 기억하여 함수가 렉시컬 스코프 밖에서 실행될 때에도 이 스코프에 접근할 수 있게 하는 기능을 뜻한다.

- [알아두기] **렉시컬 스코프**
```js
    // 렉시컬 스코프 예제
    var x = 1;
    
    function foo() {
      var x = 10;
      bar();
    }
    
    function bar() {
      console.log(x);
    }
    
    foo(); // ?
    bar(); // ?
    
    // 위의 코드는 bar()의 상위스코프가 무엇인지에 따라 결정된다.
    // 렉시컬 스코프는 함수를 어디서 호출하는지가 아니라 **어디에 선언하였는지에 따라** 결정된다.
    // 그러므로 foo() => 1, bar() => 1. 1이 2번 출력된다.
```
흔히 **함수 내에서 함수를 정의하고 사용**하면 클로저라고 한다. 하지만 대게는 정의한 함수를 리턴하고 사용은 바깥에서 하게된다.
```js
    // closure 예제
    
    function getClosure() {
      var text = 'variable 1';
      return function() {
        return text;
      };
    }
    // 리턴만 한다.
    
    var closure = getClosure();
    console.log(closure()); // 사용한다 => 'variable 1'
```
### :fries: 클로저 이해하고, hook 뜯어보기 ___
```js
    // 예제 0 - **React의 useState Hook의 아주 기본적인 형태의 복제본**
    
    function useState(initialValue) {
      var _val = initialValue // _val은 useState에 의해 만들어진 지역 변수입니다.
      function state() {
        // state는 내부 함수이자 클로저입니다.
        return _val // state()는 부모 함수에 정의된 _val을 참조합니다.
      }
      function setState(newVal) {
        // 마찬가지
        _val = newVal // _val를 노출하지 않고 _val를 변경합니다.
      }
      return [state, setState] // 외부에서 사용하기 위해 함수들을 노출 => **리턴만 한다.**
    }
    var [foo, setFoo] = useState(0) // 배열 구조분해 사용 => **사용한다.**
    console.log(foo()) // 0 출력 - 위에서 넘긴 initialValue
    setFoo(1) // useState의 스코프 내부에 있는 _val를 변경합니다.
    console.log(foo()) // 1 출력 - 동일한 호출하지만 새로운 initialValue
```
hook의 useState 복제본 예제코드인데, 여기서 state, setState라는 두개의 내부함수가 있다. state는 상단의 변수 _val을 반환하고, setState는 전달된 매개변수를 _val에 저장한다. 여기에서 foo, setFoo를 사용하여 내부 변수 _val에 접근 + 조작 (덮어쓰기/setState)을 할 수 있다. 이 둘은 useState의 스코프에 대한 접근 권한을 가지고 있고, 이러한 참조를 **클로저**라고 한다. 

### :pizza: ~~문제의~~ 오래된 클로저(Stale Closure)
```js
    **// 예제 0, 다시보기**
    
    function useState(initialValue) {
      var _val = initialValue
      // state() 함수 없음
      function setState(newVal) {
        _val = newVal
      }
      return [_val, setState] // _val를 그대로 노출
    }
    var [foo, setFoo] = useState(0)
    console.log(foo) // 함수 호출 할 필요 없이 0 출력
    setFoo(1) // useState의 스코프 **내부에 있는 _val를 변경**합니다.
    console.log(foo) // 0 출력
```
console.log(foo)는 useState의 _val을 참조하기 때문에 다시는 변경되지 않는다. 현재 상태를 변경하기 위해 상태(state())가 필요하고, 이는 함수 호출이 아닌 단순히 **노출된 변수**이다. 

### :pizza: 정리

1. [[ 최상위에서만 Hook을 호출해야 합니다. ]](https://reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level) 의 의미가 어떤 의미인지 생각해볼 수 있다.
2. hook을 사용해서 상태를 변경시켰을 때 원하는 값이 아닌 이전의 값이 출력될 때 스코프나, 함수 호출을 한게 아니었는지 생각해 볼 수 있다.
3. **useLazyQuery** 다시 생각해보기 : 이벤트가 있을 때만 사용하고, 해당 컴포넌트에서 필요할 땐 useQuery로 불러오는 구조. 구조를 다시 생각해보자!