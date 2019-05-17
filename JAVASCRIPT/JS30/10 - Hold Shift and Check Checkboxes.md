# JAVASCRIPT 10 - Hold Shift and Check Checkboxes

# View Source

```js
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;
//lastchecked 빈값 만들어줘야하는 이유 : 
function handleCheck(e) {
  let inBetween = false;
  // inbetween
  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        //checkbox 자신이거나 checkbox가 비어있으면..?
        inBetween = !inBetween;
        console.log('Starting to check them inbetween!');
        //근데 왜 콘솔 안찍히지
      }//줄긋기 함수 , 음@.@?

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

```      