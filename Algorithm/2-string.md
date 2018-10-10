### 문제 1

두 문자열을 입력받아, 대소문자를 구분하지 않고(case insensitive) 두 문자열이 동일한지를 반환하는 함수를 작성하세요.

예:
```
insensitiveEqual('hello', 'hello'); -> true
insensitiveEqual('hello', 'Hello'); -> true
insensitiveEqual('hello', 'world'); -> false
```
```js
function insensitiveEqual(srt1, str2){
  return srt1.toLowerCase() === str2.toLowerCase();
  // ? true : false 이거 안적어줘도 됨.
}
insensitiveEqual('hello','Hello');
```

### 문제 2

문자열 `s`와 자연수 `n`을 입력받아, 만약 `s`의 길이가 `n`보다 작으면 `s`의 왼쪽에 공백으로 추가해서 길이가 `n`이 되게 만든 후 반환하고, 아니면 `s`를 그대로 반환하는 함수를 작성해보세요.

예:
```
leftPad('hello', 8); -> '   hello'
leftPad('hello', 3); -> 'hello'
```
```js
function leftPad(s,n){
  if(s.length < n){
    return s.padStart(n);
    // const spaceNum = n - s.length
    // return ''.repeat(spaceNum) + s
  } else {
    return s;
  }
}
leftPad('dd', 5);
```

### 문제 3

문자열을 입력받아, 문자열 안에 들어있는 모든 모음(a, e, i, o, u)의 갯수를 반환하는 함수를 작성하세요.
```js
function print(str){
  let num = 0;
  for(let i = 0; i < str.length ; i ++){
    // console.log(str[i]);
    if(str[i]==='a'||str[i]==='e'||str[i]==='i'||str[i]==='o'||str[i]==='u'){
      num += 1
    }
  }
  return num;
}
print('hello');
```

### 문제 4

문자열을 입력받아, 해당 문자열에 포함된 문자의 종류와 갯수를 나타내는 객체를 반환하는 함수를 작성하세요.

예:
```
countChar('tomato'); -> {t: 2, o: 2, m: 1, a: 1}
```
```js
const countChar = (str) => {
  let obj = {};

  for(let i = 0; i < str.length ; i++){ 
    const cahr = str[i] ;
      // 문자 하나하씩 쪼개서 빈 객체에 담을껀데
      // 문자가 있으면 숫자가 늘어나고
      // 아니면 새로 만들어서 넣고 "글자" : 1
    if(!(cahr in obj)){
      obj[cahr] = 1 ;
    }else {
      obj[cahr] ++ ;
    }
  }
  return obj;
}
countChar('tomato');

```


### 문제 5

문자열을 입력받아 그 문자열이 회문(palindrome)인지 판별하는 함수를 작성하세요. (회문이란, '토마토', 'never odd or even'과 같이 뒤에서부터 읽어도 똑같이 읽히는 문자열을 말합니다.)
```js
const palindrome = (str) => {
  // console.log(newStr);


  for(let i = 0; i < str.length; i++){
  // for(let i = 0; i <= str.length / 2-1; i++)

    //01.
    const left = i;
    const right = input.length -1 - i;
    if(str[left] !== str[right]){
      return false;
    }
    //02.
    // if(str[i] !== str[str.length-1]){
    //   return false;
    // }
    //03.
    // if(str[i] === str[str.length-1]){
    //   return true;
    // }
  return true;
  }
}
palindrome('토마토마토바토바토');
```

### 문제 6

문자열을 입력받아, 그 문자열의 모든 '부분 문자열'로 이루어진 배열을 반환하는 함수를 작성하세요.

예:
```
subString('햄버거');
// 결과: ['햄', '햄버', '햄버거', '버', '버거', '거']
```

### 문제 7

문자열을 입력받아, 해당 문자열에서 중복된 문자가 제거된 새로운 문자열을 반환하는 함수를 작성하세요.

예:
```
removeDuplicates('tomato'); -> 'toma'
removeDuplicates('bartender'); -> 'bartend'
```

```js
const removeDuplicates = (str) => {
  let memory ='';
  for(let i = 0; i < str.length ; i++){ 
    if(!memory.includes(str[i])){
      //memory.includes(str[i]) !== true 
      //includes()는 true, false 로 반환
    memory += str[i] ;
    }
  }
    console.log(memory);
}

removeDuplicates('tomato');
```


### 문제 8

이메일 주소를 입력받아, 아이디 부분을 별표(`*`)로 가린 새 문자열을 반환하는 함수를 작성하세요.

- 루프로 먼저 풀어보세요.
- `split` 메소드를 이용해서 풀어보세요.
```js
//01.
const removeId2 = (input) => {
  // '@'을 기준으로 쪼갠 후
  const splitted = input.split('@')
  // id 부분과 같은 길이를 갖는 별표 문자열을 만든다.
  const stars = '*'.repeat(splitted[0].length)
  // 별표를 @, 도메인 부분과 이어붙인 후 반환한다.
  return stars + '@' + splitted[1]
}

removeId2('test@test.com');


//02.
const removeId = (e) => {
  let seen = false;
  let memory = '';
  for(let i = 0 ; i < e.length ; i ++){
    // 한글자씩 보면서
    if(e[i]==='@'){
      // 내가 @을 봤다.
      seen = true;
    }
    if(seen){
      memory += e[i];
      //그대로
    } else {
      memory += '*';
      // *
    }
  }
    console.log(memory)
    console.log(seen);
}
removeId('hahn0406@gmail.com');
```

### 문제 9

문자열을 입력받아, 대문자는 소문자로, 소문자는 대문자로 바꾼 결과를 반환하는 함수를 작성하세요.
```js

```

### 문제 10

문자열을 입력받아, 각 단어의 첫 글자를 대문자로 바꾼 결과를 반환하는 함수를 작성하세요. (문자열에 개행이 없다고 가정합니다.)

### 문제 11

> 문자열을 입력받아, 문자열 안에 들어있는 단어 중 가장 긴 단어를 반환하는 함수를 작성하세요. (문자열에 개행이 없다고 가정합니다.)
```js
//배열메소드
const print = (str) => {
  const word = str.split(' ');
  word.sort((x, y) => y.length - x.length);
  return word[0];
}

print('haha he hoooooo');


//루프
function longestWord(input) {
  let longest = '' //지금까지 봤던 단어 중에 제일 긴 단어
  let current = '' //내가 지금 보고 있는 단어
  for(let i =0; i < input.length ; i++){
    if(input[i] !== ' '){
      //내가지금 보고 있는 글자가 공백이 아니면
      current += input[i]
      //지금까지 본 글자를 current에 저장
      if(current.length >= longest.length){
        longest = current;
        //만약에 지금 보고 있는(current) 단어가 longest보다 크면,
      }
    } else {
      current = ''
    }
  }
  return longest;
}
longestWord('haha hehe elel');
```

### 문제 12

> 문자열 `s`과 자연수 `n`을 입력받아, `s`의 첫 `n`개의 문자만으로 이루어진 새 문자열을 반환하는 함수를 작성하세요.
```js
//배열 메소드
const print = (str,num) => {
  return str.slice(0,num);
}
print('hoho',3);



//루프
function firstLetters(s,n){
  //n이 문자열의 길이보다 큰 숫자를 넣으면 그냥 s를 반환하는 제어문
  if(s.length < n){
    return s;
  }
  //내가 지금(n)까지 보고있었던 글자를 반환
  let memory = '';
  for(let i = 0; i < s.length ; i++){
    memory += s[i]
    if(memory.length === n){
      //memory.length === n 길이가 같아야지만 출력
      return memory;
    }
  }
}
firstLetters('hello',9); //hel
```

### 문제 13

> Camel case의 문자열을 입력받아, snake case로 바꾼 새 문자열을 반환하는 함수를 작성하세요.
```js
const camelToSnake = (str) => {
  //input이 CamelCase가 아니면 다시 입력하게 하고싶다.
  let memory = '';
  for(let i = 0; i < str.length ; i ++){
    if(str[i]===str[i].toUpperCase()){
      memory += '_' + str[i].toLowerCase(); 
    } else {
      memory += str[i];
    }
  }
  return memory;
}
camelToSnake('camelCase');
```

### 문제 14

Snake case의 문자열을 입력받아, camel case로 바꾼 새 문자열을 반환하는 함수를 작성하세요.

### 문제 15

> `String.prototype.split`과 똑같이 동작하는 함수를 작성하세요.

예:
```
split('Hello World'); -> ['Hello World']
split('Hello World', ' '); -> ['Hello', 'World']
split('let,const,var', ',') -> ['let', 'const', 'var']
```

```js
const split = (str, sepChar) => {
  const newArr = [];
  let start = 0;
  let end = str.length;
  for(let i = start; i <= str.length ; i++){
    if(str[i] === sepChar){
      end = i;
      newArr.push(str.slice(start, end));
      start = end + 1;
    }else if (i === str.length) {
      end = str.length;
      newArr.push(str.slice(start, end));
    }
  }
  return newArr;
}

split('hello,world,haha',',');
```



### 문제 16

2진수를 표현하는 문자열을 입력받아, 그 문자열이 나타내는 수 타입의 값을 반환하는 함수를 작성하세요. (`parseInt`를 사용하지 말고 작성해보세요.)

예:
```
convertBinary('1101'); -> 13
```

### 문제 17

숫자로만 이루어진 문자열을 입력받아, 연속된 두 짝수 사이에 하이픈(-)을 끼워넣은 문자열을 반환하는 함수를 작성하세요.

예:
```
insertHyphen('437027423'); -> '4370-274-23'
```
