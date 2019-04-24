# JAVASCRIPT 05. FLEX


# View Source
# CSS code
```css

```
# JS code
```js
const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');
  // classList는 add, remove, item(Number), contains, toggle, replace(OldClass, newClass) 메서드를 가진다.
  // element.classList 는 읽기전용 프로퍼티지만, 메서드를 이용하여 변형할 수 있다.
}

function toggleActive(e) {
  console.log(e.propertyName);
  // propertyName은 toggleActive 됐을때, 전환효과가 적용된 css 속성이름 ?
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
// panels를 forEach돌려서 panel하나하나가 transitioned될때 toggleActive 함수를 달아준다.
```

# 정리
**파편조각이 된 지식들을 정리하자!**
**책을 읽어보자**

* DOM API는 프로그래밍 방식으로 `브라우저`에서 `DOM`과 통신하도록 만들어진 인터페이스



