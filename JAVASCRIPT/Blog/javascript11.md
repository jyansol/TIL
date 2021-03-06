# :balloon: JAVASCRIPT 성질

## 동적입니다 
여러가지가 실행중에 바뀔 수 있다. 객체를 생성한 후 자유롭게 프로퍼티를 추가하거나 제거할 수 있다. 메서드도 속성이므로 추가할 수 있다.

## 타입이 동적으로 결정됩니다
:bulb: ***동적이란?*** 컴파일 시 자료형을 정하는 것이 아니라 실행 시에 결정한다. 타입 지정없이 변수만 선언하여 값을 지정할 수 있다.
```c
  // [C Language]
  int num1 = 1; // 컴파일 성공
  bool num2 = 1; // 컴파일 에러
```
```js
  // [Javascript]
  num = 1;
```
> 단점 : Type Error

## 함수형인 동시에 객체지향적입니다

- 함수형프로그래밍

[(번역) 함수형 프로그래밍이란 무엇인가?](https://medium.com/@jooyunghan/%ED%95%A8%EC%88%98%ED%98%95-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%EC%9D%B4%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80-fab4e960d263)

> :pushpin: 여러분이 함수를 제대로 파악하려고 할 때 가능한 대안은 세 가지가 있다. 함수 정의를 파고 들거나, 복잡성을 표면 위로 드러내거나, 그냥 무시하고 잘 되길 바라는 것이다. 하지만 결국에는 무시하는 것이 **엄청난 실수**가 된다. 

> :pushpin: 그러나 부작용이 있는 함수라면? 여러분이 시스템의 다른 부분을 어디까지 고려해야 할지 그 끝을 알 수 없다. 함수가 무엇에든 의존할 수 있고 무엇이든 변경할 수 있다면 버그는 어느 곳에든 있을 수 있다.

어떤 함수는 입력도 없고 출력도 없지만, 함수내부에서는 분명 무언가에 의존성을 가지며, 하는일은 존재한다. 이런 함수가 바로 숨겨진 형태의 입출력을 가진다. 무언가를 필요로 하고, 또 변경을 초래하기도 하지만 추측하기 어렵다. 순수함수를 이럴때 써야하는구나. 코드리팩토링을 반드시 완성해야겠다. ~~(물론 3주째 디버깅을 끝내고 이제서야 코드 리팩토링에 들어섰지만)~~ 클린코드 클린코드 ㅠㅠ 하지만 어렵다. 순수함수를 만드는 일!

- 객체지향프로그래밍
    - 변수나 데이터 구조안에 담을 수 있다.
    - 파라미터로 전달 할 수 있다.
    - 반환값(return value)으로 사용할 수 있다. ⇒ 함수도 값으로 사용 가능하다.
    - 동적으로 프로퍼티 할당이 가능하다.

## 조용히 실패합니다

ES3부터 예외처리를 사용해 대응 가능

## 웹 플랫폼의 일부분입니다.

하지만 node.js 나 브라우저가 아닌 환경에서도 자바스크립트가 많이 쓰임에 따라, 웹 플랫폼이 없어도 동작한다는 사실은 점점 더 분명해지고 있다.

:bulb: **Node.js** 는 웹브라우저에 종속적인 자바스크립트에서 외부에서 실행할 수 있는 Runtime 환경을 Chrome V8 엔진을 제공하여 여러 OS 환경(안드로이드폰, 아이폰, 윈도우PC, 맥OS 등 )에서 실행할 수 있는 환경을 제공하게 된다.