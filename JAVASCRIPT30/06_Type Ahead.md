# JAVASCRIPT 06. Type Ahead


# View Source

    const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'; 
    //city 정보 


    const cities = [];
    // cities 초기화


    fetch(endpoint)
    .then(blob => blob.json()) 
    .then(data => cities.push(...data)); 
    //date에 'cities에 ...date'를 push
    //ajax를 구현하는 여러가지 기술이 있음. 그 중에 fetch API가 있음.
    //형태 뜻
    //blob의 의미
    //...date의 의미


    function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
     
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex)
    });
    }

    function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
    <li>
    <span class="name">${cityName}, ${stateName}</span>
    <span class="population">${numberWithCommas(place.population)}</span>
    </li>
    `;
    }).join('');
    suggestions.innerHTML = html;
    }

    const searchInput = document.querySelector('.search');
    const suggestions = document.querySelector('.suggestions');

    searchInput.addEventListener('change', displayMatches);
    searchInput.addEventListener('keyup', displayMatches);


# memo
 * 



