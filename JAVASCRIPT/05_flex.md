# JAVASCRIPT 05. FLEX


# View Source
```js
    const panels = document.querySelectorAll('.panel');

    function toggleOpen() {
      this.classList.toggle('open');
      //classList는 add, remove, contains, toggle 함수를 제어한다.
    }

    function toggleActive(e) {
      console.log(e.propertyName);
      if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
      }
    }

    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
```

# memo
 * classList는 add, remove, contains, toggle 함수를 제어한다.
 * flex 속성 : flex-grow, flex-shrink, flex-basis



