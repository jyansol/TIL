# JAVASCRIPT 07. Array Cardio Day 2


# View Source

    // ## Array Cardio Day 2

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


    const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);
    //19살 이상이 있는지 알아보는 함수
    //.some() : 조건에 맞는 것이 있으면 true, 없다면 false 반환
    //person 이 callback함수?
    //person이라는 조건을 .some()을 통해 people array에 다 실행해봄.
    //person : new.Date() 현재 시간에서 현재 년도를 얻어냄 - 태어난년도를 뺐을때 19살 이상이 있는지


    console.log({isAdult});
    // 맞는것이 있으니까 true 반환


    const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
    // .every() : 콜백 함수가 모든 배열 요소에 대해 참인(truthy) 값을 반환하는 경우 true; 그렇지 않으면, false.
    console.log({allAdults});
    // 모두 truthy아니니까 false

    const comment = comments.find(comment => comment.id === 823423);
    console.log(comment);


    const index = comments.findIndex(comment => comment.id === 823423);
    console.log(index);
    //요소가 테스트를 통과하면 배열의 인덱스. 그렇지 않으면 -1
    //통과했으니까 823423의 인덱스인 1 출력

    const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1)
    ];
    //??
    // (0, index) : Love this, Super good
    // (index +1) : you are the best


# memo
 * 



