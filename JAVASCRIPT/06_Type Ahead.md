# JAVASCRIPT 06. Type Ahead


# View Source

```js
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
//city 정보를담은 JSON 데이터

const cities = [];
// cities 초기화, 검색어에 따라 바뀔 부분

fetch(endpoint)
  .then((blob) => blob.json())
  // 객체의 값을 json으로 변환
  .then((data) => cities.push(...data));
// data에 'cities에 ...data'를 push

// 기본구조: fetch('주소', 설정객체).then(콜백).catch(콜백);
// blob: 응답 객체에서 값을 볼 수 있게 해주는 메소드

function findMatches(wordToMatch, cities) {
  //wordToMatch : input text value
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, 'gi');
    //검색시 단어가 일치하는 도시 또는 주를 변환하는 함수
    // RegExp : 검색할때 패턴을 설정해줄 수 있는 생성자
    // gi : '전체'에서 대소문자 구분 없이 검색 가능
    return place.city.match(regex) || place.state.match(regex);
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  // toString() : 숫자에는 replace()메소드를 사용할 수 없기 때문에 사용함
  // replace() :  어떤 패턴에 일치하는 일부 또는 모든 부분이 교체된 새로운 문자열을 반환
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  //일치하는 값을 matchArray에 담기
  //this = target.event
  const html = matchArray
    .map((place) => {
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
    .join('');
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
```

# 정리
- fetch를 사용하는 이유 :: ajax를 구현하기 위한 기술
  * 나는 axios 라이브러리를 사용하여 데이터와 통신했다.
- ajax란 :: fetch가 나오기전까지 자바스크립트에서 ajax를 사용하기가 매우 까다롭고, 브라우저 호환문제로 손쉬운 jQuery를 통해 통신하였다.
            어쨌든 ajax는 쉽게말해서 자바스크립트를 통해 서버에 데이터를 요청하는 것이다. 자바스크립트는 웹 브라우저에 대한 스크립트 언어로 만들어진 언어기때문에 본래 서버와 통신하는 기능은 없었으나 AJAX는 가능하다.

