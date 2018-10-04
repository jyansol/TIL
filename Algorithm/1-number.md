### 문제 1

두 수를 입력받아 큰 수를 반환하는 함수를 작성하세요.
```js
//1-1
function larger(x,y){
  const a = x
  const b = y
  let c ;
  // a가 크면 a를 c에 넣고 아니면 b를 c에 넣는다
  if( a > b ){
    c = a
  } else {
    c = b
  }
  return c;
}
```

```js
//1-2
function larger(x,y){
  let c ;
// a가 크면 a를 c에 넣고 아니면 b를 c에 넣는다
  if( x > y ){
    c = x
  } else {
    c = y
  }
  return c;
}
larger(3,2);
```

```js
//1-3
function larger(x,y){
// a가 크면 a를 c에 넣고 아니면 b를 c에 넣는다
  if( x > y ){
    return x
  } else {
    return y
  }
}
larger(3,2);
```

```js
//1-4
function larger(x,y){
// a가 크면 a를 c에 넣고 아니면 b를 c에 넣는다
return x > y ? x : y ;
}
larger(3,2);
```

```js
//1-5
function print(...arguments){
  return Math.max(...arguments);
  // [...arguments] = Array.from(arguments);
}
print(1,45,7,8,9,99);
```

### 문제 2

세 수를 입력받아 그 곱이 양수이면 `true`, 0 혹은 음수이면 `false`, 둘 다 아니면 에러를 발생시키는 함수를 작성하세요.

에러를 발생시키는 코드는 다음과 같습니다.

```js
throw new Error('입력값이 잘못되었습니다.');
```

```js
//2-1
function isPositive(x, y, z){
  if( x * y * z > 0){
    return true;
  } else if( x * y * z <= 0 ){
    return false;
  } else {
    throw new Error('입력값이 잘못되었습니다.');
  }
}

//2-2
function isPositive(num1,num2,num3){
  return num1 * num2 * num3 > 0 ;
}


console.log(isPositive(1,2,3));
console.log(isPositive(1,2,-3));
console.log(isPositive(1,2,'mm'));
```

### 문제 3

세 수 `min`, `max`, `input`을 입력받아, 다음과 같이 동작하는 함수를 작성하세요.
- `min`보다 `input`이 작으면, `min`을 반환합니다.
- `max`보다 `input`이 크면, `max`를 반환합니다.
- 아니면 `input`을 반환합니다.

예:
```
limit(3, 7, 5); -> 5
limit(3, 7, 11); -> 7
limit(3, 7, 0); -> 3
```

```js
function limit(min, max, input){
  if(min>input){
    return min;
  } else if(input>max){
    return max;
  } else {
    return input;
  }
}
console.log(limit(3,7,5));
console.log(limit(3,7,11));
console.log(limit(3,7,0));
```

### 문제 4

어떤 정수가 짝수인지 홀수인지 출력하는 함수를 작성하세요. 이를 이용해서, 1부터 20까지의 수가 각각 짝수인지 홀수인지 출력하는 프로그램을 작성하세요.
4-1
```js
function evenOrOdd(x){
  if( x % 2 === 0 ){
    console.log(x + ': 짝수');
  } else {
    console.log(`${x}: 홀수`);
  }
}

for(let i = 0; i < 20; i++){
  evenOrOdd(i+1);
}
```

### 문제 5

100 이하의 자연수 중 3과 5의 공배수를 모두 출력하는 프로그램을 작성하세요.

```js
//01.
for(let i=0;i<100;i++){
  if(i % 3 ===0 && i % 5 ===0){
    console.log(`${i+1} : 공배수`);
  } else {
    console.log(`${i+1} : 아님`);
  }
}
//02.
for(let i=0;i<100;i++){
  let num = i + 1
  if((i % 3 ===0) && (i % 5 ===0){
    // (i % 15 === 0)
    console.log(`${num} : 공배수`);
  } else {
    console.log(`${num} : 아님`);
  }
}
```

### 문제 6

자연수를 입력받아, 그 수의 모든 약수를 출력하는 함수를 작성하세요.
```js
function print(num){
  for(let i=0; i < num; i++){
  let num = i + 1;
    if(num % i === 0){
      console.log(`${num} : 약수`);
    } else {
      console.log(`${num} : 아님`);
    }
  }
}
print(30);
```


### 문제 7

2 이상의 자연수를 입력받아, 그 수가 소수인지 아닌지를 판별하는 함수를 작성하세요.
```js
//01.
function print(num){
  for(let i = 2; i < num ; i++){
    if (num % i === 0) {
      return false;
      //for문을 아예 종료함.
    }
  }
  return true;
}
print(7);

//02.

```

### 문제 8

1부터 100까지의 수를 차례대로 출력하되, 자릿수에 3, 6, 9중 하나라도 포함되어 있으면 '짝!'을 대신 출력하는 프로그램을 작성하세요.
```js
function print(){
  for(let i = 0; i < 100 ; i ++){ 
    const num = i.toString();
    if(num.includes('3')||num.includes('6')||num.includes('9')){
      console.log(`짝!`);
    } else {
      console.log(`${i}`);
    }
  }
}
print();
```

### 문제 9

양의 정수를 입력받아, 다음과 같은 패턴의 출력을 하는 함수를 작성하세요.
```js
//01.
function print(height){
  for(let i = 0 ; i < height ; i ++){
    //한줄출력
    let stars = '';
    for(let j = 0 ; j < i + 1 ; j++){
      //'*' 출력
      stars += '* '
    }
    console.log(stars);
    //console은 줄바꿈이 되니까
  }
}
print(5);

//02.
function star(num){
  for (let i= 0; i < num; i++){
    // const start = '* '.repeat(i+1);
    // console.log(start);
    console.log('* '.repeat(i+1));
  }
}
star(3);
```

1을 입력받은 경우:
```
*
```

3을 입력받은 경우:
```
*
* *
* * *
```

5를 입력받은 경우:
```
*
* *
* * *
* * * *
* * * * *
```

### 문제 10

양의 정수를 입력받아, 다음과 같은 패턴의 출력을 하는 함수를 작성하세요.
```js
//01.
function print(height){
  for(let i = 0 ; i < height ; i ++){
    const n = i + 1;
    const line = ' '.repeat(height-n) + '* '.repeat(n); //공백문자열 + '* '
    console.log(line);
  }
  for(let i = height-2 ; i >= 0 ; i --){
    const n = i + 1;
    const line = ' '.repeat(height-n) + '* '.repeat(n); //공백문자열 + '* '
    console.log(line);
  }
}
print(5);

//02.
function printLine(height, i){
  const n = i + 1;
  const line = ' '.repeat(height-n) + '* '.repeat(n); //공백문자열 + '* '
  console.log(line);
}

function print(height){
  for(let i = 0 ; i < height ; i ++){
    printLine(height, i);
  }
  for(let i = height-2 ; i >= 0 ; i --){
    printLine(height, i);
  }
}
print(5);

//03.
function star(num){
  let star = '*';
  let space = '';
  for (let i = 1; i < 2*num; i++){
      if (i <= num){
        console.log(space.repeat(num-i)+star.repeat(i));
      } else {
        console.log(space.repeat(i-num)+star.repeat(2*num-i));
      } 
    }
}
star(3);
```

1를 입력받은 경우:
```
*
```

3를 입력받은 경우:
```
  *
 * *
* * *
 * *
  *
```

5를 입력받은 경우:
```
    *
   * *
  * * *
 * * * *
* * * * *
 * * * *
  * * *
   * *
    *
```

### 문제 11

두 수를 입력받아서, 두 수의 최대공약수를 반환하는 함수를 작성하세요. ([유클리드 호제법](https://ko.wikipedia.org/wiki/%EC%9C%A0%ED%81%B4%EB%A6%AC%EB%93%9C_%ED%98%B8%EC%A0%9C%EB%B2%95)을 참고하세요.)

### 문제 12

세 수를 입력받아 큰 것부터 차례대로 출력하는 함수를 작성하세요.
```js
function printLargerFirst (a,b,c){
  let array = new Array(a, b, c);
  return array.sort(
    function(a,b){
      return b-a;
    }
  )
}

printLargerFirst(40,2,1);
```

### 문제 13

자연수 `n`을 입력받아, `n`번째 피보나치 수를 반환하는 함수를 작성하세요.
