## 📢 목적

해당 프로젝트는 노마드 코더 "실전형 리액트 Hooks 10개" 강의를 수강하여 리액트를 공부하는 프로젝트입니다.

## 📢 공부 내용

<details markdown="2">

<summary>📑 useState</summary>

#### useState란?

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

#### 참고 사이트

[useState 가이드](https://ko.reactjs.org/docs/hooks-state.html) <br>

</details>


## 📢 공부 진행

- [ ] useState
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