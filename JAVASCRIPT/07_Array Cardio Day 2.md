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
    // Array.prototype.some() : 배열의 함수가 some()안의 함수를 통과하는지 안하는지 판별한 후, true, false 반환
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

    // --------------------------------------- //
    // Array.prototype.every() :
    const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
    //every &&
    console.log({allAdults});

    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423


    const comment = comments.find(comment => comment.id === 823423);
    //find() 한번 / filter() 여러개
    console.log(comment);

    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423
    const index = comments.findIndex(comment => comment.id === 823423);
    //여러개 ㄴㄴ
    console.log(index);

    // comments.splice(index, 1); 
    

    const newComments = [
      ...comments.slice(0, index), //지워진 것
      ...comments.slice(index + 1)
    ];
    //...? 

    console.log(newComments);

```

# memo
 * 



