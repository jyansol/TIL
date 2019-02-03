# JAVASCRIPT 06. Type Ahead


# View Source

```js

      const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
      //city 정보

      const cities = [];
      // cities 초기화

      fetch(endpoint)
        .then((blob) => blob.json())
        .then((data) => cities.push(...data));
      //date에 'cities에 ...date'를 push
      //ajax를 구현하는 여러가지 기술이 있음. 그 중에 fetch API가 있음.
      //형태 뜻
      //blob의 의미
      //...date의 의미
      //console

      function findMatches(wordToMatch, cities) {
        //wordToMatch : input text value
        return cities.filter((place) => {
          // here we need to figure out if the city or state matches what was searched
          // place 는 cities의 하나하나
          const regex = new RegExp(wordToMatch, 'gi'); //검색시 단어가 일치하는 도시 또는 주를 변환하는 함수
          // RegExp : 검색할때 패턴을 설정해줄 수 있는 생성자
          //
          // gi : 전체에서 대소문자 구분 없이 검색 가능
          return place.city.match(regex) || place.state.match(regex);
        });
      } //검색시 일치하는 값을 찾아내는 함수

      function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        // 인구수에 commas
        //tostring() > 숫자에 replace()를 못쓰기때문 하지만 이미 string이었음
        //string DOM vs 일반 DOM
      }

      function displayMatches() {
        const matchArray = findMatches(this.value, cities); //일치하는 값을 matchArray에 담기 //this = target.event
        const html = matchArray
          .map((place) => {
            //.map() : 배열 내의 모든 요소 각각에 함수호출 > 새로운 배열로 반환
            const regex = new RegExp(this.value, 'gi');
            const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
            const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
            return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
          })
          .join(''); //.join() : 배열의 모든 요소를 연결해 하나의 문자열로
        suggestions.innerHTML = html;
      } 

      const searchInput = document.querySelector('.search');
      const suggestions = document.querySelector('.suggestions');

      searchInput.addEventListener('change', displayMatches);
      searchInput.addEventListener('keyup', displayMatches);
```

# memo
 * fetch API
 * 전체적으로 반복해서 복습할 필요가 있음



