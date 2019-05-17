# export default function sum() {
  ```js
  // 선언과 실행을 분리
  // 변수명
  // 유지보수를 위한 코드

  const argumentsArr = Array.from(arguments);
  // const argumentsArr = [...arguments];
  // reduce 초기값
  const add = argumentsArr.reduce((prev, curr) => prev + curr,0);
  const argumentsType = argumentsArr.map((a) => typeof a);
  // error 이름 변경
  // error변수 내용을 따로 분리 (if 부터)
  // if(내용)을 따로 변수(isNumber)로 분리
  // 삼항연산자
  // const isNumber = argumentsType.map((a) => { if (a === 'string' || a === 'boolean' || Array.isArray(arguments[0])) }
  // array::typeof로 검사하면 object => Array.isArray
  const error = argumentsType.map((a) => {
    if (a === 'string' || a === 'boolean' || Array.isArray(arguments[0])) {
      return '숫자를 넣어주세요';
    } else {
      return add;
    }
  });
  // [0] 바꿔보기
  return error[0];
}
```