# JAVASCRIPT 02. JS and CSS clock


# View Source



    const secondHand = document.querySelector('.second-hand');

    const minsHand = document.querySelector('.min-hand');

    const hourHand = document.querySelector('.hour-hand');



    function setDate(){
    
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90; 
    //계산의 의미 ㅠㅠ
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`; 
    
    } 
    
    setInterval(setDate, 1000); //1초마다 반복
    
    setDate(); //선언


# memo
 * 수학을 잘하면 '좋겠다'
 * transform

