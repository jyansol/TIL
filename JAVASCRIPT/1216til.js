// class Person {
//   constructor({ name, age }) {
//     this.name = name;
//     this.age = age;
//   }
//   // es6 부터 자동으로 prototype으로 생성됨
//   sayName() {
//     return `나의 이름은 ${this.name}입니다.`;
//   }
//   sayAge() {
//     return `나의 나이는 ${this.age}입니다.`;
//   }
//   sayMe() {
//     return `나의 이름은 ${this.name}이며, 나이는 ${this.age}살 입니다.`;
//   }
// }

// const person = new Person({ name: '지한솔', age: 29 });
// person.sayMe();

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
];

//passed가 1500대
// const isPassed = (Num) = inventors.every((i) => i.passed > Num);
// const isPassed1500 = isPassed(1500);
// const isPassed1500 = isPassed(1000);

inventors.some((i) => i.passed === 1543);
inventors.every((i) => i.passed > 1500);

// 숫자 변수에 저장해두고  import => 한번만 수정
// 조건문 함수
