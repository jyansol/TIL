# Javascript 

## 1. 값 / 식 / 문

### 값 (value)
- 값.
- 숫자, 문자열, boolean, null, undefined 등 이면서 `리터럴(값의 표기법)`을 통해 표현함.

- 자바스크립트 `값의 종류(type)` Primitive(원시타입), Reference(참조타입) 
  + 자바스크립트에는 7가지의 타입이 존재함.
    * `Boolean, Null, Undefined, Number, String, Symbol, Object`

  + Primitive(원시타입) : 자바스크립트는 동적 언어로, 타입을 미리 선언할 필요가 없다. 타입은 프로그램이 처리되는 과정에서 자동으로 파악됨.
    * ex) string, number, boolean, null, undefined, symbol 
    * 변경 불가능한 값이다. (`불변성`)

  + Reference(참조타입) : 참조, 화살표 / 객체가 컴퓨터 메모리 상에서 어디에 저장되었는지를 가리키는 값
    * ex) Object, Array, function

- 변수 : 값을 재사용하기 위해 값에 붙여준 이름. 그 변수를 `식별자`라고한다. 자바스크립트에서 식별자의 이름을 지을때 `CamelCase`로 짓는것이 Good Practice!


### 식
- `표현식`
  + 함수표현식
  ```js
  const var = function() {
    return 1;
  } 
  ```
- 실행했을때 값을 반환하는 식.
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
// 01. 조건문
if (expression) 
    statement 1
else 
    statement 2

// 02. 함수
const num = function message(x) {
            return x + x;
          }
num(7); // returns 14

// 03. 반복문
// 04. 제어문

```

### Truthy & Falsy
- truthy : Boolean type이 true로 반환되는 값.
  + true, number, string, object, array 
- Falsy : Boolean type이 false로 반환되는 값.
  + undefined, null, NaN, 0, "", false

- Boolean
  + Boolean 타입에 해당하는 값은, true 와 false 밖에 없다. 이 값들을 진리 값이라고 부르며,
  프로그래밍에서 어떤 조건이 참인지 거짓인지 나타내기 위해 사용.   


## 복습
- javascript에서는 배열이 가짜다. 
```js
typeof [1,2,3]
// object
Array.isArray([1,2,3])
// true
// ES6기 때문에 폴리필필요.
```
- 순수함수
- 함수.length => 인자의 갯수

```js
function test(str = '문자'){
	return str;
}
```


### 참고
- [원시타입vs참조타입 표](https://weicomes.tistory.com/133)
- [값식문](https://www.bsidesoft.com/?p=760)
- [값식문](https://www.bsidesoft.com/?p=4074)