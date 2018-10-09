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
  return Math.ceil(num/5) * 5 ;
}
rounding(12);
```

### 문제 4

배열을 입력받아, 요소들의 순서를 뒤섞은 새 배열을 반환하는 함수를 작성하세요.
```js
const shuffleArray = (arr) => {
   var temp = [];
   var len=arr.length;
   while(len){
      temp.push(arr.splice(Math.floor(Math.random()*arr.length),1)[0]);
      len--;
   }
   return temp;
}
shuffleArray(['a','b','c']);
```

### 문제 5

임의의 HTML 색상 코드를 반환하는 함수를 작성하세요.
```js
const randomHtmlColor = () => {
  const color = '0123456789abcdef';
  let newStr = '';
  
  for(let i=0; i < 6; i++) {
    newStr += color[Math.floor(Math.random()*16)];
  }
  return newStr;
}
randomHtmlColor();
```

### 문제 6

양수를 입력받아, 그 수만큼의 길이를 갖는 임의의 문자열을 반환하는 함수를 작성하세요.
```js
const make = (num) => {
    let text = '';
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( let i=0; i < num; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
make(5);
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


### 추가문제 문제 2. 배열을 입력받아, 해당 배열에 들어있는 요소들 중 최대값을 찾는 함수를 작성하세요. (Array.prototype.reduce를 이용하세요)
```js
const max = (arr) => {
  //reduce 쓸때
  //누적값의 역할이 무엇인지를 잘 정하는 것이 중요하다

  //누적값의 역할 : 지금까지 봤던 숫자 중의 제일 큰 수
  return arr.reduce((acc,item)=>{
    //안에 들어있는 함수의 반환값이 다음단계의 누적값이 된다.
    if(acc > item){
      return acc
    } else {
      return item
    }
  }, -Infinity);

  // return arr.reduce((acc,item) => acc > item ? acc : item, 0)
  // -Infinity 그 어떤 수보다 작은 수
}

max([-3,-4,-5,-7,-55]);
max([3,4,5,7,55]);
```