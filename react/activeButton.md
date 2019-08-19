# react로 다중 active 되는 button 만들기 (feat.apollo-cache / styled-component)

1. 먼저 버튼 UI에 필요한 constants.js 파일을 만들어준다.
```jsx
// constants.js
export const EXAMPLES = [
  {
    name: '하나',
    value: 'first'
  },
  {
    name: '둘',
    value: 'second'
  },
  // ...
]
```

2. 필요한 component에 constants 파일을 불러와 UI를 그려준다.

3. 클릭이벤트 함수
- button의 name과 value를 인자로 받아온다. (constants.js에 저장해둔 값)
- client-cache query & update 포함
- 만약에 update된 값이 있을 때, button을 클릭하면 값이 없어지는 로직 포함
- setActive() : 버튼을 클릭했을 때 받아온 값을 useState로 컴포넌트 내의 전역변수처럼 사용할 수 있게 담아둔다.
```jsx
const handleTypeClick = (type, name) => () => {
  // 클릭하면 EXAMPLES 의 [value] : name 으로 apollo cache에 저장된다.
  // apollo-cache에는
  // first : ''
  // second : '' 
  // 의 초기값이 저장되어 있다.
    updateValue({
      variables: {
        ...buttonsTypeValue,
        [type]: name
      }
    });
    // apollo-client에 저장된 값을 비워주는 함수
    if (buttons[type]) {
      updateValue({
        variables: {
          ...buttonsTypeValue,
          [type]: ''
        }
      });
    }
    setActive(name);
    // active css 효과를 위해 컴포넌트 내의 로컬상태로 사용하기 위해 value를 useState()로 저장해둔다.
    // active === EXAMPLES 의 name
  };
```
4. active 조건 달아주기
- 언제 button에 active가 될지 조건을 달아준다.
- name : '하나' or '둘'
- buttons[type] : `buttons.first` or `buttons.second` 의 값 === '하나' or '둘'
```jsx
{Constants.EXAMPLES.map(ex => {
  const { name, value } = ex;
  return (
    <Button
      key={name}
      value={active}
      active={name === buttons[type]}
      onClick={handleTypeClick(value, name)}
    >
      {name}
    </Button>
  )
})}
```

## 이슈
- 처음에 버튼을 클릭했을 때, true / false 조건을 걸어 true 일때, active를 줌. 그랬더니 모든 버튼에 적용되서 1번 버튼을 누르면 true가 되고 2번 버튼을 누르면 false가 되서 버튼을 2번씩 클릭해야 원하는 UI가 그려짐.
- 그래서 버튼 각각의 고유한 값과 비교해서 UI를 그려주는 조건이 필요했음.

## 마무리
- 그런데 너무 급하게 원하는 UI를 그리려고해서 코드가 더러운거같음. 코드리뷰가 필요함. 간결한 코드를 그리고싶다!
