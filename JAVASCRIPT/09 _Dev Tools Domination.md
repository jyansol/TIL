# JAVASCRIPT 09 - Dev Tools Domination

# View Source
  
  ```js
  <script>
    const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    } 
    //makeGreen으로 바꿔주는 함수

    // Regular
    console.log('hello', dogs);

    // Interpolated
    console.log('Hello I am a %s string!', '💩');

    // Styled
    // console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue')

    // warning!
    console.warn('OH NOOO');

    // Error :|
    console.error('Shit!');

    // Info
    console.info('dogs', dogs);
    // 출력메소드 : console에 여러객체 출력하기 , log랑 뭐가 다름?

    // Testing
    const p = document.querySelector('p');

    console.assert(p.classList.contains('ouch'), 'That is wrong!');
    // 첫 번째 인자가 false인 경우 로그 메시지와 스택 트레이스를 콘솔에 출력한다.
    // contains : 특정 클래스 값이 요소의 클래스 속성에 존재하는지 확인한다.
    // classList : 클래스 목록에 접근

    // clearing
    // console.clear();

    // Viewing DOM Elements
    console.log(p);
    console.dir(p);

    // console.clear();

    // Grouping together
    dogs.forEach(dog => {
      console.groupCollapsed(`${dog.name}`);
      console.log(`This is ${dog.name}`);
      console.log(`${dog.name} is ${dog.age} years old`);
      console.log(`${dog.name} is ${dog.age * 7} dog years old`);
      console.groupEnd(`${dog.name}`);
    });
    //hugo는?



    // counting

    console.count('Wes');
    console.count('Wes');
    console.count('Steve');
    console.count('Steve');
    console.count('Wes');
    console.count('Steve');
    console.count('Wes');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');

    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/wesbos')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
      });

    console.table(dogs);

  </script>
  ```
