# JAVASCRIPT 08. Fun with HTML5 Canvas

# View Source
```js
const canvas = document.querySelector('#draw'); //#draw를 const에 담고
const ctx = canvas.getContext('2d');
// <canvas></canvas>는 getContext()메서드를 이용해 그리기 함수를 사용할 수 있다.
// 타입을 지정하는 하나의 파라미터 :: 이 예제에서는 "2d"로 지정함.
canvas.width = window.innerWidth; // innerWidth :: 뷰포트 폭
canvas.height = window.innerHeight; 
// 가로,세로를 그리는 이유는 처음에 blank임.
ctx.strokeStyle = '#BADA55'; // 도형의 윤곽
ctx.lineJoin = 'round'; //선이 만나는 지점
ctx.lineCap = 'round'; //선이 끝나는 지점
ctx.lineWidth = 100; //선의 두께
ctx.globalCompositeOperation = 'multiply';

let isDrawing = false; 
let lastX = 0; 
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return; 
  // true 면 return ?
  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath(); 
  ctx.moveTo(lastX, lastY); 
  ctx.lineTo(e.offsetX, e.offsetY); 
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  // 자유로운 선 ? 을 그리기위해 필요한 조건 ? 들

  hue++; // mousedown 하면 hue++
  if (hue >= 360) {
      hue = 0;
  }
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
      direction = !direction;
  } 
  if(direction) {
      ctx.lineWidth++;
  } else {
      ctx.lineWidth--;
  } 
}
  canvas.addEventListener('mousedown', (e) => { 
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});  

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false); 
canvas.addEventListener('mouseout', () => isDrawing = false);
```