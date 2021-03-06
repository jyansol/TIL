# JAVASCRIPT 04. Array Cardio Day 1


# View Source

```js
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
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];



    // Array.prototype.filter()
    // 주어진 판별 함수를 통과하는 요소를 모아 `새로운 배열`
    const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
    console.table(fifteen);

    // Array.prototype.map()
    // 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 `새로운 배열`을 반환
    const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
    console.log(fullNames);


    // Array.prototype.sort()
    // 배열의 요소를 적절한 위치에 정렬한 후 `그 배열을 반환`
    const ordered = inventors.sort(function(a, b) {
      if(a.year > b.year) {
        return 1;
      } else {
        return -1;
      }
    });
    // ===같음
    const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
    console.table(ordered);


    // Array.prototype.reduce()
    // 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, `하나의 결과값`을 반환
    const totalYears = inventors.reduce((total, inventor) => {
      return total + (inventor.passed - inventor.year);
    }, 0);
    console.log(totalYears);


    // Array.prototype.sort()
    const oldest = inventors.sort(function(a, b) {
      const lastInventor = a.passed - a.year;
      const nextInventor = b.passed - b.year;
      return lastInventor > nextInventor ? -1 : 1;
    });
    console.table(oldest);


    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    const category = document.querySelector('.mw-category');
    const links = Array.from(category.querySelectorAll('a'));
    const de = links
                .map(link => link.textContent)
                .filter(streetName => streetName.includes('de'));
  console.log(de)

    // 7. sort Exercise
    // Sort the people alphabetically by last name
    const alpha = people.sort((lastOne, nextOne) => {
      const [aLast, aFirst] = lastOne.split(', ');
      const [bLast, bFirst] = nextOne.split(', ');
      return aLast > bLast ? 1 : -1;
    });
    console.log(alpha);


    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

    const transportation = data.reduce(function(obj, item) {
      if (!obj[item]) {
        obj[item] = 0;
      }
      obj[item]++;
      return obj;
    }, {});

    console.log(transportation);
```

# memo
 * .filter() : JSON object로 이루어진 배열에서 특정 값 filter, 조건에 만족하지 못하는 원소들을 걸러냄
 * .map() : ()의 함수를 호출하고 그 결과를 새로운 array로 배출
 * .sort() : 배열 / 소스의 의미 ??
 * .reduce() : 
 * .map() 과 .filter() 차이

