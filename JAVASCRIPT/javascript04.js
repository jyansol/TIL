// String.prototype.sayStr = function() {
//   return this.toString();
// };

// Count.increment()

const count = {
  num: 0,
  increment: function() {
    this.num += 1;
    return count.num;
  },
  decrement: function() {
    this.num--;
    return count.num;
  },
};

// var Person = function(name, age) {
//   this.name = name;
//   this.age = age;
// };
// Person.prototype.sayHello = function() {
//   return `나의 이름은 ${this.name}이고 나이는${this.age}입니다.`;
// };

// const person1 = new Person('지한솔', '20');

const Count = function(number) {
  this.num = 1;
  this.number = number;
};
Count.prototype.increment = function() {
  return this.num + this.number;
};
Count.prototype.decrement = function() {
  return this.num--;
};
const count = new Count();

count.increment();

// 클래스
const Count = class Counter {
  constructor(number) {
    this.number = number || 1;
  }
  increment() {
    return this.number++;
  }
  decrement() {
    return this.number--;
  }
};
const count = new Count();
