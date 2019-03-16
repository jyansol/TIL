# Javascript 

## 1. 값 / 식 / 문
### 값 (value)
- 값.
- 숫자, 문자열, boolean, null, undefined 등 이면서 `리터럴(값의 표기법)`을 통해 표현함.
- 자바스크립트 값의 종류 Primitive, Reference
  + Primitive : 자바스크립트는 동적 언어로, 타입을 미리 선언할 필요가 없다. 타입은 프로그램이 처리되는 과정에서 자동으로 파악됨.
  ex) string, number, boolean, null, undefined, symbol 
  + Reference : 참조, 화살표 / 객체가 컴퓨터 메모리 상에서 어디에 저장되었는지를 가리키는 값
### 식
- 표현식.
- 실행했을때 값을 반환하는 식.
  + 
  ```js
  10;
  'hello';
  'hello' + 'world';
  10 > 9; //true
  true

  ```
### 문
- 표현식 등으로 구성되며, 그 결과에 따라 컴퓨터에 명령을 내리게 됨
```js
// 01. if else문
if (expression) 
    statement 1
else 
    statement 2

// 02. 함수
const num = function message(x) {
            return x + x;
          }
num(7); // returns 14
```