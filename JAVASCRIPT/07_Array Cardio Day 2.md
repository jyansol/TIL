# JAVASCRIPT 07. Array Cardio Day 2


# View Source

```js

    const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 },
    ];

    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];


    // Some and Every Checks
    // Array.prototype.some() : 배열안의 어떤요소가 함수를 통과하는지 안하는지 판별한 후, true, false 반환
    // 한개라도 있으면 true
    const isAdult = people.some(function(person) {
      const currentYear = (new Date()).getFullYear();
      // currentYear : new Date() => 반드시 생성자로 호출 / getFullYear() => 지정된 날짜의 연도
      if(currentYear - person.year >= 19) {
        return true;
      }
      // (현재년도) - (태어난 년도) >= 19 : 현재 나이가 19살보다 많은 사람이 있으면, true를 반환하게하는 조건문
    });

    // 아래와 같이 줄여서 쓸 수 있다!
    const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);
    console.log({isAdult});

    // Array.prototype.every() : 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트합니다.
    const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
    console.log({allAdults});

    // find() : 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환
    const comment = comments.find(comment => comment.id === 823423);
    console.log(comment);

    // findIndex() : 제공된 테스트 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환합니다. 그렇지 않으면 -1을 반환
    const index = comments.findIndex(comment => comment.id === 823423);
    console.log(index);

    // splice() : 배열의 기존 요소를 삭제 또는 교체 하거나 새 요소를 추가여 배열의 내용을 변경
    comments.splice(index, 1); 
    const newComments = [
      ...comments.slice(0, index), //지워진 것
      ...comments.slice(index + 1)
    ];
    console.log(newComments);

```

# memo
 * [배열메소드](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)

# 정리 
- `some()` :  배열안의 어떤요소가 함수를 통과하는지 안하는지 판별한 후, true, false 반환
- `every()` : 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트
- `find()` : 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환
- `findIndex()` : 제공된 테스트 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환합니다. 그렇지 않으면 -1을 반환
- `splice()` : 배열의 기존 요소를 삭제 또는 교체 하거나 새 요소를 추가여 배열의 내용을 변경



