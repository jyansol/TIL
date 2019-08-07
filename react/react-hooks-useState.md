# useState
- 가장 기본적인 react hooks로, 함수형 컴포넌트에서 상태를 지닐 수 있게 한다. 즉, 상태를 관리해야할때 사용하면 된다.
> ## How to
```js
import React, { useState } from 'react';
```
import를 통해 불러오고, 아래와 같이 사용한다.
```jsx
const [state, setState] = useState(initialState);
```
배열 비구조화 할당 문법으로 작성한다. useState 함수 파라미터에 기본값을 넣어준다. 
> ## issue
기본값에 어떤 초기값도 넣어주지 않고 객체를 받아오면, state로 객체값을 불러올 수 있었지만(console), 접근할 수는 없었다.