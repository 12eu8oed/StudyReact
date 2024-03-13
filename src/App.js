import logo from './logo.svg';
import './App.css';  //앱 디자인
function Header() { //사용자 정의 태그를 만들때는 첫글자 대문자로 upper 이것이 바로 !!컴포넌트!!
  return <header>
    <h1><a href="/">WEB</a></h1>
  </header>

}

function Article() {
  return <article>
    <h2>Welcome</h2>
    Hello, WEB
  </article>
}

function Nav() {
  return <nav>
    <ol>
      <li><a href="/read/1">html</a></li>
      <li><a href="/read/2">css</a></li>
      <li><a href="/read/3">js</a></li>
    </ol>
  </nav>
}

function App() {
  return (
    <div>
      <Header></Header>   {/* This is Component!! */}
      <Header></Header>   {/* This is Component!! */}
      <Nav></Nav>         {/* This is Component!! */}
      <Article></Article> {/* This is Component!! */}
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <p>
    //       이것은 <code>신기하네용</code> 리액트 템플릿
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
