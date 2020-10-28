## 📢 목적

해당 프로젝트는 노마드 코더 "실전형 리액트 Hooks 10개" 강의를 수강하여 리액트를 공부하는 프로젝트입니다. <br>
해당 코드는 https://codesandbox.io/ 를 이용하여 제작되었습니다.

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

### 참고 사이트

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

<details markdown="3">

<summary>📑 useInput</summary>

### useInput이란?

input 역활을 제어 하는 것

- 예시 - [useInput.js 참고](./useInput.js)
``` javascript
function App() {
	const maxLen = (value) => value.length < 10;
	const name = useInput("your name", maxLen);
	return (
	<div className="App">
		<h1>Hello</h1>
      	<input placeholder="Name" {...name} />
    </div>
  );
}
```

</details>

<details markdown="4">

<summary>📑 useTabs</summary>

### useTabs이란?

웹사이트에 메뉴 또는 무엇이든 간에 tab을 사용하기 매우 쉽게 만들어주는 것

- 예시 - [useTabs.js 참고](./useTabs.js)
``` javascript
const content = [
    {
        tab: "Section 1",
        content: "I'm the content of the Section 1"
    },
    {
        tab: "Section 2",
        content: "I'm the content of the Section 2"
    }
];

function App() {
    const { currnetItem, changeItem } = useTabs(0, content);
    return (
        <div className="App">
            <h1>Hello</h1>
            {content.map((section, index) => (
                <button key={index} onClick={() => changeItem(index)}>
                    {section.tab}
                </button>
            ))}
            <div>{currnetItem.content}</div>
        </div>
    );
}
```

</details>

<details markdown="5">

<summary>📑 useTitle</summary>

### useTitle이란?

react document의 title을 몇개의 hoots와 함께 바꾸는 것

- 예시 - [useTitle.js 참고](./useTitle.js)
``` javascript
function App() {
    const titleUpdater = useTitle("Loading...");
    setTimeout(() => titleUpdater("home"), 5000);
    return (
        <div className="App">
            <h1>Hello</h1>
        </div>
    );
}
```

</details>

<details markdown="6">

<summary>📑 useClick</summary>

### useClick이란?



- 예시 - [useClick.js 참고](./useClick.js)
``` javascript
function App() {
    const onClick = () => console.log("hello");
    const title = useClick(onClick);
    return (
        <div className="App">
            <h1 ref={title}>Hello</h1>
        </div>
    );
}
```

</details>

<details markdown="7">

<summary>📑 useHover</summary>

### useHover이란?



- 예시 - [useHover.js 참고](./useHover.js)
``` javascript
function App() {
    const onHover = () => console.log("hello");
    const title = useHover(onHover);
    return (
        <div className="App">
            <h1 ref={title}>Hello</h1>
        </div>
    );
}
```

</details>

<details markdown="8">

<summary>📑 useConfirm</summary>

### useConfirm이란?



- 예시 - [useConfirm.js 참고](./useConfirm.js)
``` javascript
function App() {
    const deleteWorld = () => console.log("Deleting the world...");
    const abort = () => console.log("Aborted");
    const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);
    return (
        <div className="App">
            <h1>Hello</h1>
            <button onClick={confirmDelete}>Delete the world</button>
        </div>
    );
}
```

</details>

<details markdown="9">

<summary>📑 usePreventLeave</summary>

### usePreventLeave이란?



- 예시 - [usePreventLeave.js 참고](./usePreventLeave.js)
``` javascript
function App() {
    const { enablePrevent, disaPrevent } = usePreventLeave();
    return (
        <div className="App">
            <h1>Hello</h1>
            <button onClick={enablePrevent}>Protect</button>
            <button onClick={disaPrevent}>Unprotect</button>
        </div>
    );
}
```

</details>

<details markdown="10">

<summary>📑 useBeforeLeave</summary>

### useBeforeLeave이란?

탭을 닫을 때 실행되는 함수

- 예시 - [useBeforeLeave.js 참고](./useBeforeLeave.js)
``` javascript
function App() {
    const begForLife = () => console.log("Pls dont leave");
    useBeforeLeave(begForLife);
    return (
        <div className="App">
            <h1>Hello</h1>
        </div>
    );
}
```

</details>

<details markdown="11">

<summary>📑 useFadeIn</summary>

### useFadeIn이란?



- 예시 - [useFadeIn.js 참고](./useFadeIn.js)
``` javascript
function App() {
    const fadeInH1 = useFadeIn(1, 2);
    const fadeInP = useFadeIn(2, 3);
    return (
        <div className="App">
            <h1 {...fadeInH1}>Hello</h1>
            <p {...fadeInP}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                voluptatem debitis accusantium veritatis! Amet, minus consequatur eius
                ut dolorum expedita consectetur corrupti animi incidunt nihil iste illo,
                iure, voluptatem voluptates.
        </p>
        </div>
    );
}
```

</details>

<details markdown="12">

<summary>📑 useNetwork</summary>

### useNetwork이란?



- 예시 - [useNetwork.js 참고](./useNetwork.js)
``` javascript
function App() {
    const handleNetworkChange = (online) => {
        console.log(online ? "We just went online" : "We are offline");
    };
    const onLine = useNetwork(handleNetworkChange);
    return (
        <div className="App">
            <h1>Hello</h1>
            <h1>{onLine ? "Online" : "Offline"}</h1>
        </div>
    );
}
```

</details>

## 📢 공부 진행

- [X] useState
- [X] useInput
- [x] useTabs
- [X] useTitle
- [X] useClick
- [X] useHover
- [X] useConfirm - hook 사용 x
- [X] usePreventLeave - hook 사용 x
- [X] useBeforeLeave
- [X] useFadeIn
- [X] useNetwork
- [ ] useScroll
- [ ] useFullscreen
- [ ] useNotification
- [ ] useAxios
- [ ] NPM package 등록