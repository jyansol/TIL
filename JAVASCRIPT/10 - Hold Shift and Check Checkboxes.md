# JAVASCRIPT 10 - Hold Shift and Check Checkboxes

# View Source

```js
<script>
      const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

      let lastChecked;
      //lastchecked 빈값 만들어줘야하는 이유 : 


      function handleCheck(e) {
        // Check if they had the shift key down
        // AND check that they are checking it
        let inBetween = false;
        // inbetween
        if (e.shiftKey && this.checked) {
          // go ahead and do what we please
          // loop over every single checkbox
          //e, this  차이 ? 그리고 왜 2개를 써야함? 그냥 checked만 쓰면 안됨?
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