# 스코프
## 의미
- 변수들에 접근할 수 있는지 정의하는 단위

1. 전역 스코프(global scope)
변수가 함수 바깥이나 중괄호(`{}`) 밖에 선언되었을 때
전역변수를 선언하면, 코드 모든 곳에서 해당 변수를 사용할 수 있다.
심지어 함수에서도 사용가능하다.
```js
const hello = 'Hello zansol!'
function sayHello () {
  console.log(hello)
}
console.log(hello) // 'Hello zansol!'
sayHello() // 'Hello zansol!'
```
#### ! 주의 !
하지만, 전역스코프에 변수를 선언하는 것을 지양해야함.
코드가 길어지면서 이름이 충돌되는 경우가 생길 수 있다.

#### 그러므로 
지역스코프 사용을 지향한다.

1. 지역 스코프(local scope)
- 함수 스코프
- 블록 스코프

##### 특징
- 함수 호이스팅과 스코프
- 함수는 서로의 스코프에 접근할 수 없다.
- 네스팅된 스코프


# 클로저
## 의미
함수 내부에 함수를 작성할 때를 말한다. 내부에 작성된 함수가 바로 `클로저`다.

> 스코프는 함수를 호출할 때가 아니라 함수를 `어디에 선언`하였는지에 따라 결정됨.
```js
function outerFunc() {
  const x = 10;
  const innerFunc = function () { console.log(x); };
  innerFunc();
}
outerFunc(); // 10

// 위의 코드를 보면, 함수 innerFunc는 함수 outerFunc 내부에 선언되었기 때문에 함수 innerFunc의 스코프는 함수 outerFunc이다.
// 만약 함수 innerFunc가 함수 outerFunc외부에 선언되었다면, 전역스코프가 된다.
```


---



클로저는 외부 함수의 변수를 사용할 수 있기 때문에 반환하여 사용한다.

```js
// 반환해서 사용하지 않은 예
function outerFunction () {
  const outer = 'Hello Closures!'
  function innerFunction() {
    console.log(outer)
  }
  return innerFunction
}
outerFunction()() //Hello Closures!
```

```js
// 반환해서 사용한 예
function outerFunction () {
  const outer = 'Hello Closures!'
  
  return function innerFunction() {
    console.log(outer)
  }
}
outerFunction()() //Hello Closures!
```

## 목적
```
* 전역 변수로 인한 오류를 방지
* Javascript에 적합한 방식의 코드
```

1. 사이드 이펙트 제어하기
#### 사이드 이펙트란 ? 
부작용. 함수에서 값을 반환할 때를 제외하고 무언가를 행할 때
ex ) Ajax요청, timeout과 같이 코드의 흐름을 방해하는 것들이 있을 때, 클로저를 활용하여 사이드 이펙트를 제어함.
1. private 변수 생성하기


## 참고
- [클로저 이해하기](https://poiemaweb.com/js-closure)
