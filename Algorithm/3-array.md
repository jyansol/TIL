### 문제 1

두 정수 `start`, `end`를 입력받아, `start`부터 `end`까지의 모든 정수를 배열로 반환하는 함수를 작성하세요.

예:
```
range(3, 6); -> [3, 4, 5, 6]r
```

```js
// range(3, 6); -> [3, 4, 5, 6]
function range(start,end){
  const arr = [];
  for(let i = start; i <= end ; i++){
    arr.push(i);
  }
  return arr
}
range(3,8);
```

### 문제 2

수 타입의 값으로만 이루어진 배열을 입력받아, 그 값들의 합을 구하는 함수를 작성하세요.
```js
const sum = (arr) => {
  // const arr = [];
  console.log(arr);
  const result = arr.reduce((acc, item) => acc + item, 0);
  return result;
}

sum([3, 4, 5]);
```

### 문제 3

배열을 입력받아, falsy인 요소가 제거된 새 배열을 반환하는 함수를 작성하세요.
```js
const falsy = (arr) => {
  const newArr = [];
  for(let i = 0; i < arr.length ; i++){
    if(arr[i]){
      //Boolean(arr[i])
      //truthy, falsy를 이용해서!!!!!!!!
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
falsy([0,1,NaN,3]);
```



### 문제 4

배열을 입력받아, 중복된 요소가 제거된 새 배열을 반환하는 함수를 작성하세요.
```js
const print = (arr) => {
  const newArr = [];

  for( let i = 0 ; i < arr.length ; i ++ ){
    if(!newArr.includes(arr[i])){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
print(['a','a',5,'g']);
```

### 문제 5

수 타입의 값으로만 이루어진 두 배열을 입력받아, 다음과 같이 동작하는 함수를 작성하세요.
- 두 배열의 같은 자리에 있는 요소를 더한 결과가 새 배열의 요소가 됩니다.
- 만약 입력받은 두 배열의 길이가 갖지 않다면, 긴 배열에 있는 요소를 새 배열의 같은 위치에 포함시키세요.

예:
```
addArray([1, 2, 3], [4, 5, 6, 7]) -> [5, 7, 9, 7]
```
```js
const print = (arr1,arr2) => {
  // 원본배열이 변경됨 .slice() 는 배열을 복사할 때도 사용된다
  // let longer
  // let shorter
  // if (arr1.length > arr2.length){
  //   longer = [...arr1]
  //   shorter = arr2.slice()
  // } else {
  //   longer = arr2.slice()
  //   shorter = arr1.slice()
  // }
  // for(let i =0; i < shorter.length ; i++){
  //   longer[i] =+ shorter[i]
  // }
  //   return longer;

  if (arr1.length > arr2.length) {
    const temp = arr1
    arr1 = arr2
    arr2 = temp
  }
  const newArr = [];
  for(let i =0; i < arr2.length ; i++){
    if(arr1[i] === undefined){
      newArr.push(arr2[i]);
    } else {
      newArr.push(arr1[i]+arr2[i]);
    }
  }
  return newArr 
}
print([1, 2, 3], [4, 5, 6, 7]);

```

### 문제 6

배열을 입력받아, 배열의 요소 중 두 개를 선택하는 조합을 모두 포함하는 배열을 작성하세요.
예:
```
combination([1, 2, 3]); -> [[1, 2], [1, 3], [2, 3]]
//
```
```js
const combination = (arr) => {
  const newArr = [];
  for (let i =0 ; i < arr.length-1 ; i++) {
  // -1 끝까지 갈 필요가없다.
    for (let j =i+1 ; j < arr.length ; j++){
      newArr.push([arr[i],arr[j]])
    }
  }
  return newArr;
  }

combination([1,2,3]);
```



### 문제 7

'금액'과 '동전의 종류가 들어있는 배열'를 입력받아, 최소한의 동전을 사용해서 금액을 맞출 수 있는 방법을 출력하는 함수를 작성하세요.
(단, 동전의 종류가 들어있는 배열에는 큰 동전부터 순서대로 들어있다고 가정합니다.)

예:
```
coins(263, [100, 50, 10, 5, 1]);
// 출력
100
50
10
1
1
1
```
```js
const print = (money,coins) => {
  //방어적 코드02 : 배열을 반드시 내림차순으로 정렬
  coins.sort((x,y) => y - x);
  //현재 내가 보고 있는 동전종류
  let currentIndex = 0;
  let remain = money ;
  while (remain > 0 && currentIndex < coins.length){
    // 방어적 코드01 : && currentIndex < coins.length
    if(coins[currentIndex] <= remain) {
        remain -= coins[currentIndex];
      //남은 금액에서 현재 보고 있는 코인을 빼서
      // 출력
      // return - 끝
      console.log(coins[currentIndex])
    } else if (coins[currentIndex] > remain) {
      currentIndex ++ ;
    }
  }  
}
print(263, [50, 100, 10, 5]);
```

### 문제 8

수 타입의 값만 들어있는 배열을 입력받아, 해당 배열을 오름차순 정렬하는 함수를 작성하세요. (`Array.prototype.sort`를 사용하지 않고 작성해보세요. [선택 정렬](https://ko.wikipedia.org/wiki/%EC%84%A0%ED%83%9D_%EC%A0%95%EB%A0%AC)을 참고하세요.)

### 추가문제 1.
배열을 입력받아, 해당 배열에 들어있는 요소들 중 최대값을 찾는 함수를 작성하세요. (루프를 이용하세요)
```js
const print = (arr) => {
  for(let i =0; i < arr.length ; i++){
    arr.sort((x, y) => y - x);
  }
  return arr;
}
print([1,4,9,2]);
```

### 추가문제 2. 
배열을 입력받아, 해당 배열에 들어있는 요소들 중 최대값을 찾는 함수를 작성하세요. (Array.prototype.reduce를 이용하세요)
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

## 추가문제 3.
2차원 배열을 입력받아 1차원 배열로 바꾸는 함수를 작성하세요. (루프를 이용하세요)
```js
const print = (...arr) => {
  const newArr = Array.from(arr);
  let arr1 = [];
  //배열 루프 돌려서 추가해
  // console.log(newArr);
  for(let i =0; i < newArr.length ; i++){
    let current = arr[i]
    for(let j =0; j < current.length ; j++){
      arr1.push(current[j]);
    }
  }
  return arr1
}
print([1,2,3],[4,5,6],[7,8,9]);
```

## 추가문제 4.
2차원 배열을 입력받아 1차원 배열로 바꾸는 함수를 작성하세요. (Array.prototype.reduce를 이용하세요)
```js
//01.
const print = (arr) => {
  return arr.reduce((acc,item)=>acc.concat(item),[]);
  //[] : 초기 누적값
}
print([[1,2,3],[4,5,6],[7,8,9]]);

```

## 추가문제 5.
(3 * 3) 빙고 판을 표현한 배열을 입력받아, 빙고인 경우 true, 아니면 false를 반환하는 함수를 작성하세요. (단, 칸이 비어있는 경우는 0, 칸이 채워져 있는 경우는 1로 표현합니다.)
```js
/* 01. 루프 */
//가로
const bingo = (arr) => {
  //한줄한줄
  for(let i =0; i < 3 ; i++){
    let checked = true; //내가 지금까지 본 것이 모두 x표시이면 true, 아니면 false
    //한칸한칸
    for(let j =0; j < 3 ; j++){
      if(arr[i][j]===0){
        checked = false;
      }
    }
    if(checked){
      return true //만약에 한줄을 다 봤는데도 checked가 true이면 빙고!
      //if의 위치
    }
  //false의 위치
}
  //세로
  for(let i =0; i < 3 ; i++){
    let checked = true; //내가 지금까지 본 것이 모두 x표시이면 true, 아니면 false
    //한칸한칸
    for(let j =0; j < 3 ; j++){
      if(arr[j][i]===0){
        checked = false;
      }
    }
    if(checked){
      return true //만약에 한줄을 다 봤는데도 checked가 true이면 빙고!
      //if의 위치
    }
  }

  //대각선
  //오른쪽
  let checked = true;
  for(let j =0; j < 3 ; j++){
    //한칸한칸
    for(let j =0; j < 3 ; j++){
      if(arr[j][j]===0){
        checked = false;
      }
    }
    if(checked){
      return true //만약에 한줄을 다 봤는데도 checked가 true이면 빙고!
      //if의 위치
    }
  }
  //왼쪽
  let checked2 = true;
  for(let j =0; j < 3 ; j++){
    //한칸한칸
    for(let j =0; j < 3 ; j++){
      if(arr[j][2-j]===0){
        checked2 = false;
      }
    }
    if(checked2){
      return true //만약에 한줄을 다 봤는데도 checked가 true이면 빙고!
      //if의 위치
    }
  }
return false
}

bingo([
  [0, 1, 0], 
  [0, 1, 0],
  [1, 0, 1]
]) // -> true




/* .every(), .some() 메소드 - 가로 */
const horizontal = arr.some(
  innerArr => innerArr.every(item => item === 1)
  //한줄한줄
  //하나라도 1 이라면,
  )
  if(horizontal){
    return true
  }
```


## 추가문제 7.
배열을 입력받아, 요소 중 아무거나 하나를 골라서 반환하는 함수를 작성하세요.
```js
const randomItem = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
}
randomItem([1, 2, 76, 4, 5])
```

## 추가문제 8.
배열을 입력받아, 요소들의 순서를 뒤섞은 새 배열을 반환하는 함수를 작성하세요. (단, 원본 배열이 변경되어서는 안 됩니다.)
```js
const shuffleArray = (arr) => {
   const temp = arr.slice();
   const newArr = [];
   const len = temp.length;
   for(let i=0;i < len;i++){
      newArr.push(temp.splice(Math.floor(Math.random()*temp.length),1)[0]);
   }
   console.log(`원본배열은 : [${arr}]`);
   return newArr;
}
shuffleArray(['a','b','c']);
```