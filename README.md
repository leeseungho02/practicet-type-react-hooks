## 📢 목적

해당 프로젝트는 노마드 코더 "실전형 리액트 Hooks 10개" 강의를 수강하여 리액트를 공부하는 프로젝트입니다.

## 📢 공부 내용

<details markdown="1">

<summary>📑 Hook</summary>

### Hook이란?

함수 컴포넌트에서 React state와 Lifecycle 기능을 연동할 수 있게 해주는 함수 (버전 16.8부터 도입)

### Hook의 사용 규칙

- 최상위에서만 Hook 호출이 가능
- 리액트 함수 컴포넌트 내에서만 호출이 가능하며, 일반 자바스크립트 함수 안에서는 호출하면 안됨 (custom hook에서는 가능)

### Hook이 만들어진 이유

- 컴포넌트들 사이에서 상태 로직을 재사용하는 것의 어려움
- 복잡한 컴포넌트는 이해하기 어려움
- Class 컴포넌트는 인간과 기계 모두를 혼란스럽게 함

### 사용 규칙

[Hook 소개](https://ko.reactjs.org/docs/hooks-intro.html) <br>

</details>

<details markdown="2">

<summary>📑 useState</summary>

### useState란?

기존 class 컴포넌트에서 사용하던 this.state와 동일한 역할을 한다. <br>
state 변수와 state를 업데이트 하는 함수, 두 가지 쌍을 반환한다.
``` javascript
const [age, setAge] = useState(20);
```
위와 같은 표현은 구조 분해 할당이라고 한다.

- 함수
``` javascript
function App() {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={incrementItem}>Increment</button>
      <button onClick={decrementItem}>Decrement</button>
    </div>
  );
}
```

- 클래스
``` javascript
class App extends React.Component {
  state = {
    item: 1
  };

  render() {
    const { item } = this.state;
    return (
      <div className="App">
        <h1>Hello {item}</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={this.incrementItem}>Increment</button>
        <button onClick={this.decrementItem}>Decrement</button>
      </div>
    );
  }

  incrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item + 1
      };
    });
  };

  decrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item + 1
      };
    });
  };
}
```

### 참고 사이트

[useState 가이드](https://ko.reactjs.org/docs/hooks-state.html) <br>

</details>


## 📢 공부 진행

- [X] useState
- [ ] useTitle
- [ ] useInput
- [ ] usePageLeave
- [ ] useClick
- [ ] useFadeIn
- [ ] useFullscreen
- [ ] useHover
- [ ] useNetwork
- [ ] useNotification
- [ ] useScroll
- [ ] useTabs
- [ ] usePreventLeave
- [ ] useConfirm
- [ ] useAxios
- [ ] NPM package 등록