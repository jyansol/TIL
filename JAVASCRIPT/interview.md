# JS
  + 
- Truthy, Falsy
  + Truthy : Boolean Type이 true로 반환될 수 있는 값
  + Falsy : Boolean Type이 false로 반환될 수 있는 값
- AND, OR
  + AND '&&'로 나타내고, 조건이 둘 다 참일때 true 반환 아닐때 false
  + OR '||'로 나타내고, 조건이 하나만 참이면 true 반환, 하나라고 false값이 있으면 false
- Boolean
  + Boolean 타입에 해당하는 값은, true 와 false 밖에 없다. 이 값들을 진리 값이라고 부르며,
  프로그래밍에서 어떤 조건이 참인지 거짓인지 나타내기 위해 사용. 
- Type
  + 
- Value, Expression, Statement
  + value : 값
  + Expression : 표현식이라고도 부르며, 평가(실행)했을 때 값을 반환하는 식
  + Statement : 표현식 등으로 구성되며, 그 결과에 따라 컴퓨터에 명령을 내리게 됨
                ex ) 예약어(keyword), 표현식, 기호(괄호,세미콜론)들이 나열되어 문장 구성
- 자바스크립트 값의 종류 Primitive, Reference
  + Primitive : 자바스크립트는 동적 언어로, 타입을 미리 선언할 필요가 없다. 타입은 프로그램이 처리되는 과정에서 자동으로 파악됨.
  ex) string, number, boolean, null, undefined, symbol 
  + Reference : 참조, 화살표 / 객체가 컴퓨터 메모리 상에서 어디에 저장되었는지를 가리키는 값
- String
- Hoist
  + 
- This
- Scope
- Function
- Callback
- Closure
- Event Handling
- Array
- Ajax
- JSON
- OOP
- Prototype
- Object
- Class
- SSR / CSR 을 구분해서 


# React
- state / props
- context



- example
'''js
function func() {
  var a ;
  console.log(bar); 
  a = 1;
  console.log(bar);
}
func();
'''

let,const가 생기면서 블록스코프
var 


event bubbling 부모요소까지 

-javascript callback
  + https://medium.freecodecamp.org/javascript-from-callbacks-to-async-await-1cc090ddad99



이벤트위임
이벤트 리스너를 하위 요소에 추가하는 대신 상위 요소에 추가하는 기법
각 하위 항목에 이벤트 핸들러를 연결하지 않고 상위 요소에 하나의 단일 핸들러만 필요하기때문에 메모리 사용공간이 줄어듬
this
this는 언제 쓰이는지
생성자 혹은 메소드에서 객체를 가리킬 때
1. 함수의 this
window 객체 (전역객체) : 실수가 발생함
2. 엄격모드 this
undefined
3. bind, call, apply
4. 화살표함수의 this
프로토타입 상속이 어떻게 작동하는지
모든 Javascript 객체는 다른 객체에 대한 참조인 prototype 속성을 가지고 있다. 