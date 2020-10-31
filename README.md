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

## 📢 Custom Hooks

<details markdown="3">

<summary>📑 useInput</summary>

### useInput이란?

input 역활을 제어 하는 것

``` javascript
const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
        const {
            target: { value }
        } = event;
        let willUpdate = true;
        if (typeof validator === "function") {
            willUpdate = validator(value);
        }
        if (willUpdate) {
            setValue(value);
        }
    };
    return { value, onChange };
};

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

``` javascript
const useTabs = (initialTab, allTabs) => {
    if (!allTabs || !Array.isArray(allTabs)) {
        return;
    }
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    return {
        currnetItem: allTabs[currentIndex],
        changeItem: setCurrentIndex
    };
};

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

``` javascript
const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    };
    useEffect(updateTitle, [title]);
    return setTitle;
};

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

유저가 element를 클릭한 시점으로 이벤트 주기

``` javascript
const useClick = (onClick) => {
    if (typeof onclick !== "function") {
        return;
    }
    const element = useRef();
    useEffect(() => {
        if (element.current) {
            element.current.addEventListener("click", onClick);
        }
        return () => {
            if (element.current) {
                element.current.removeEventListener("click", onClick);
            }
        };
    }, []);
    return element;
};

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

유저가 element를 호버한 시점으로 이벤트 주기

``` javascript
const useHover = (onHover) => {
    if (typeof onHover !== "function") {
        return;
    }
    const element = useRef();
    useEffect(() => {
        if (element.current) {
            element.current.addEventListener("mouseenter", onHover);
        }
        return () => {
            if (element.current) {
                element.current.removeEventListener("mouseenter", onHover);
            }
        };
    }, []);
    return element;
};

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

유저가 어떠한 이벤트를 발생 시 여부를 확인 하는 것

``` javascript
const useConfirm = (message = "", onConfirm, onCancel) => {
    if (!onConfirm || typeof onConfirm !== "function") {
        return;
    }
    if (onCancel && typeof onCancel !== "function") {
        return;
    }
    const confirmAction = () => {
        if (confirm(message)) {
            onConfirm();
        } else {
            onCancel();
        }
    };
    return confirmAction;
};

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

유저가 변경사항이나 무엇이든간에 저장하지 않고 페이지를 벗어나길 원할 때 확인하는 것

``` javascript
const usePreventLeave = () => {
    const listener = (event) => {
        event.preventDefault();
        event.returnValue = "";
    };
    const enablePrevent = () => window.addEventListener("beforeunload", listener);
    const disaPrevent = () =>
        window.removeEventListener("beforeunload", listener);
    return { enablePrevent, disaPrevent };
};

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

유저가 페이지를 벗어나는 시점을 발견하고 함수를 실행

``` javascript
const useBeforeLeave = (onBefore) => {
    if (typeof onBefore !== "function") {
        return;
    }
    const handle = (event) => {
        const { clientY } = event;
        if (clientY <= 0) {
            onBefore();
        }
    };
    useEffect(() => {
        document.addEventListener("mouseleave", handle);
        return () => document.removeEventListener("mouseleave", handle);
    }, []);
};

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

어떤 element든 상관없이 애니메이션을 element 안으로 서서히 사라지게 만드는 것

``` javascript
const useFadeIn = (duration = 1, delay = 0) => {
    if (typeof duration !== "number" || typeof delay !== "number") {
        return;
    }
    const element = useRef();
    useEffect(() => {
        if (element.current) {
            const { current } = element;
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
            current.style.opacity = 1;
        }
    }, []);
    return { ref: element, style: { opacity: 0 } };
};

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

현재 Online or Offline 상태인지를 감지하는 것

``` javascript
const useNetwork = (onChange) => {
    const [status, setStatus] = useState(navigator.onLine);
    const handleChange = (event) => {
        if (typeof onChange === "function") {
            onChange(navigator.onLine);
        }
        setStatus(navigator.onLine);
    };
    useEffect(() => {
        window.addEventListener("online", handleChange);
        window.addEventListener("offline", handleChange);
        return () => {
            window.removeEventListener("online", handleChange);
            window.removeEventListener("offline", handleChange);
        };
    }, []);
    return status;
};

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

<details markdown="13">

<summary>📑 useScroll</summary>

### useScroll이란?

스크롤을 사용할 때를 감지해 알려주는 것

``` javascript
const useScroll = () => {
    const [status, setStatus] = useState({ x: 0, y: 0 });
    const onScroll = () => {
        setStatus({ x: window.scrollX, y: window.scrollY });
    };
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return status;
};

function App() {
    const { y } = useScroll();
    return (
        <div className="App" style={{ height: "1000vh" }}>
            <h1 style={{ position: "fixed", color: y > 1000 ? "blue" : "red" }}>
                Hello
        </h1>
        </div>
    );
}
```

</details>

<details markdown="14">

<summary>📑 useFullscreen</summary>

### useFullscreen이란?

어떤 element든 풀크스린으로 만들거나 일반 화면으로 돌아가게 하는 것

``` javascript
const useFullscreen = (callback) => {
    const element = useRef();
    const runCb = (isFull) => {
        if (callback && typeof callback === "function") {
            callback(isFull);
        }
    };
    const triggerFull = () => {
        if (element.current) {
            if (element.current.requestFullscreen) {
                element.current.requestFullscreen();
            } else if (element.current.mozRequestFullscreen) {
                element.current.mozRequestFullscreen();
            } else if (element.current.webkitRequestFullscreen) {
                element.current.webkitRequestFullscreen();
            } else if (element.current.msRequestFullscreen) {
                element.current.msRequestFullscreen();
            }
            runCb(true);
        }
    };
    const exitFull = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        runCb(false);
    };
    return { element, triggerFull, exitFull };
};

function App() {
    const onFullS = (isFull) => {
        console.log(isFull ? "We are full" : "We are small");
    };
    const { element, triggerFull, exitFull } = useFullscreen(onFullS);
    return (
        <div className="App">
            <h1>Hello</h1>
            <div ref={element}>
                <img
                    src="https://mblogthumb-phinf.pstatic.net/MjAxODAyMDZfMTk0/MDAxNTE3OTA5NDQ3MjYy._A5goNQD2IUU1ZVepodSGGYRkzsj6Qzvo-7N40S-OzMg.ITZqPfqEABCTd4tuLxQrMXY-nRU40sD2tMpDZRkA_34g.JPEG.xbeebee/%EC%9B%B0%EC%8B%9C%EC%BD%94%EA%B8%B0.jpg?type=w800"
                    alt="img"
                />
                <button onClick={exitFull}>Exit Fullscreen</button>
            </div>
            <button onClick={triggerFull}>Make Fullscreen</button>
        </div>
    );
}
```

</details>

<details markdown="15">

<summary>📑 useNotification</summary>

### useNotification이란?

notification API를 사용할 때 유저에게 알람을 보내주는 것

``` javascript
const useNotification = (title, options) => {
    if (!("Notification" in window)) {
        return;
    }
    const fireNotif = () => {
        if (Notification.permission !== "granted") {
            Notification.requestPermission().then((permission) => {
                if (permission === "granted") {
                    new Notification(title, options);
                } else {
                    return;
                }
            });
        } else {
            new Notification(title, options);
        }
    };
    return fireNotif;
};

function App() {
    const triggerNotif = useNotification("Can I steal your kimchi?", {
        body: "I love kimchi dont you"
    });
    return (
        <div className="App">
            <h1>Hello</h1>
            <button onClick={triggerNotif}>Hello</button>
        </div>
    );
}
```

[Notification API](https://developer.mozilla.org/ko/docs/Web/API/notification)

</details>

<details markdown="16">

<summary>📑 useAxios</summary>

### useAxios이란?

HTTP requests client axios을 위한 wrapper 같은 것

``` javascript
const useAxios = (options, axiosInstance = defaultAxios) => {
    const [state, setSate] = useState({
        loading: true,
        error: null,
        data: null
    });
    const [trigger, setTrigger] = useState(0);
    if (!options.url) {
        return;
    }
    const refetch = () => {
        setSate({
            ...state,
            loading: true
        });
        setTrigger(Date.now());
    };
    useEffect(() => {
        axiosInstance(options)
            .then((data) => {
                setSate({
                    ...state,
                    loading: false,
                    data
                });
            })
            .catch((error) => {
                setSate({
                    ...state,
                    loading: false,
                    error
                });
            });
    }, [trigger]);
    return { ...state, refetch };
};

function App() {
    const { loading, data, refetch } = useAxios({
        url:
            "https://cors-anywhere.herokuapp.com/https://yts.am/api/v2/list_movies.json"
    });
    console.log(loading, data, JSON.stringify(data), refetch);
    return (
        <div className="App">
            <h1>{data && data.status}</h1>
            <h1>{loading && "Loading"}</h1>
            <button onClick={refetch}>Refetch</button>
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
- [X] useScroll
- [X] useFullscreen
- [X] useNotification
- [X] useAxios
