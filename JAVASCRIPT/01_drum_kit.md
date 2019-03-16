# JAVASCRIPT 01. Drum Kit

# View Source

```js
// transition을 지우는 함수
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  // 만약에 propertyName이 transform이 아니면 함수를 종료해라.
  e.target.classList.remove('playing');
  // playing 클래스명도 지워라. 
}

// 소리가 나는 함수
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  // audio인 태그들을 가져와라.
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  // 속성이 [date-key=""]인 div를 가져와라.
  if (!audio) return; 
  // 만약 audio가 아니면 playSound() 함수를 return

  key.classList.add('playing');
  // key(div)에 playing 클래스를 붙여라.
  audio.currentTime = 0; 
  audio.play();
  // audio 즉시실행
}

// 각 키에 함수를 적용시키는 코드
const keys = Array.from(document.querySelectorAll('.key')); 
// key(div)를 모아 배열로 만들자.
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// 배열이된 key들에게 하나씩 이벤트를 달자.
// transitionend이 됐을때, removeTransition하자.
window.addEventListener('keydown', playSound); 
// 윈도우에 키다운이 일어났을때 playSound 실행
```

# memo


