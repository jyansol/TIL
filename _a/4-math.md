### 문제 1

양수를 입력받아 이 수를 반지름으로 하는 원의 넓이를 반환하는 함수를 작성하세요.

```js
const area = (num) => {
  return Math.PI * num **2
}
area(5);
```

### 문제 2

두 정수 `min`, `max` 를 입력받아, `min` 이상 `max` 미만인 임의의 정수를 반환하는 함수를 작성하세요.

```js
const print = (min,max) => {
  const arr = [];
  for(let i = min; i < max ; i++){
    arr.push(i);
  }
  return arr
}
print(3,8);
```

### 문제 3

정수를 입력받아, 5 단위로 올림한 수를 반환하는 함수를 작성하세요.

예:
```
ceilBy5(32); -> 35
ceilBy5(37); -> 40
```

```js
const rounding = (num) => {
  //반올림은 round()
  return Math.ceil(num/5) * 5 ;
}
rounding(12);
```

### 문제 4

배열을 입력받아, 요소들의 순서를 뒤섞은 새 배열을 반환하는 함수를 작성하세요.
```js
//01
const shuffleArray = (arr) => {
   const temp = [];
   let len = arr.length;
   while(len){
      temp.push(arr.splice(Math.floor(Math.random()*len),1)[0]);
      len--;
   }
   return temp;
}
shuffleArray(['a','b','c']);

//02
const shuffleArray = (arr) => {
   const temp = [];
   const len = arr.length;
   for(let i=0;i < len;i++){
      temp.push(arr.splice(Math.floor(Math.random()*arr.length),1)[0]);
   }
   return temp;
}
shuffleArray(['a','b','c']);

```

### 문제 5

임의의 HTML 색상 코드를 반환하는 함수를 작성하세요.
```js
const randomHtmlColor = () => {
  const color = '0123456789ABCDEF';
  let newStr = '#';
  
  for(let i=0; i < 6; i++) {
    newStr += color[Math.floor(Math.random()*16)];
  }
  return newStr;
}
randomHtmlColor();
```
###추가문제. 0~255 사이의 문자열을 반환하는 함수 rgb(22,46,8)
```js
const print = () =>{
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)

  return `rgb(${r},${g},${b})`
}
print();
```

### 문제 6

양수를 입력받아, 그 수만큼의 길이를 갖는 임의의 문자열을 반환하는 함수를 작성하세요.
```js
const make = (num) => {
    let text = '';
    const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( let i=0; i < num; i++ ) {
        const sss = Math.floor(Math.random() * str .length);
        text += str[sss]
}
    return text;
}
make(5);
```

### 추가문제 codepint
```js
const print = (n) => {
  let result = '';
  for(let i=0;i<n;i++){
    result += String.fromCharCode(Math.floor(Math.random() * 65536))
  }
  return result
}
print(4);
```


### 문제 7
수 타입의 값으로만 이루어진 배열을 입력받아, 그 값들의 표준편차를 구하는 함수를 작성하세요.
//reduce() => 합 % arr.length
```js
function stdDev(arr){
  //arr의 평균구하기
  //합계
  const sum = arr.reduce((acc,item)=> acc + item,0);
  //평균
  const mean = sum / arr.length
  console.log(`mean:${mean}`);

  //각 요소에 대한 편차 구하기 ( 편차 = 값 - 평균 )
  const ps = arr.map(item => item - mean);
  console.log(`편차:${ps}`);

  //각 요소[ps]에 대해 제곱하기
  const s = ps.map(item => item ** 2);
  console.log(`제곱:${s}`);

  // 위 제곱한 배열의 평균 구하기
  const a = s.reduce((acc,item)=> acc + item,0) / s.length
  console.log(`평균:${a}`);
  
  // 루트 씌우기
  return Math.sqrt(a)
}
stdDev([3, 1, 4, 5, 2])
```
