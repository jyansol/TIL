- 즉시실행함수 : 전역 스코프에 불필요한 변수를 추가해서 오염시키는 것을 방지
=> `import / export`
- 고차함수

- call, apply, bind => React에서 대응(ex, 화살표함수)
```js
call('this', '인자');

var pokemon = function(traniner) {
  return `hello ${traniner} I am ${this.firstName} ${this.lastName}`;
};

var pika = {
  firstName: '김',
  lastName: '피카',
};

var kobugi = {
  firstName: '김',
  lastName: '꼬북',
};

const getPika = pokemon.bind(pika, '지우');
const getKobugi = pokemon.bind(kobugi);

console.log(getPika());
console.log(getKobugi('이슬이'));
```

- 클로저
```js
const add = (x) => (y) => x + y;
add(5)(2);
```