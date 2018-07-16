# JAVASCRIPT 01. Drum Kit


# View Source

<a href="drum_kit.html"> VIEW DEMO </a>


    ### 프레임 지우기

    function removeTransition(e) {
    if (e.propertyName !== 'transform') return; 
    e.target.classList.remove('playing'); 
    //함수e가 지정된 타겟의 classList(속성)을 가져와서 .playing 인것을 지운다. 
    }



    ### 소리나게

    function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); 
    //const : 전역,지역 상수
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return; //의미?

    key.classList.add('playing'); 
    //key(keycode입력된div)의 속성에 .playing 추가
    audio.currentTime = 0; //의미? 클릭할때마다만?
    audio.play(); //재생 
    } 
    
    const keys = Array.from(document.querySelectorAll('.key')); 
    // .key 인 배열 생성(querySelectorAll) 
    
    keys.forEach(key => key.addEventListener('transitionend', removeTransition)); 
    // div.key에 key의 'transitionend'라는 eventlistener가 발생했을때 배열 각각에 함수 removerTransition을 add 
    
    window.addEventListener('keydown', playSound); //window에 keydown이라는 eventlistener가 발생했을때 playsound라는 함수 재생



# memo
- ES6 개념
- 함수의 인자 개념
- return의 의미
- var / let / const 차이
- vanila javascript는 거의 써본 적이 없고, jQuery 이용을 많이해서 생소한 부분이 많음

