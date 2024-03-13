import logo from './logo.svg';
import './App.css';  //앱 디자인
function Header(props) { //사용자 정의 태그를 만들때는 첫글자 대문자로 upper 이것이 바로 !!컴포넌트!!
  console.log('props: ', props, props.title);
  return <header>
    <h1><a href="/">{props.title}</a></h1>
  </header>

}

function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

function Nav(props) {
  const lis = [];
  for(let i=0; i<props.topics.length; i++) {
    let t = props.topics[i];
    console.log("topics 동적 html 그리기",t);
    lis.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>)
  }

  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}

function App() {
  const topics = [ //동적으로 그려줄 데이터
    { id: 1, title: 'html', body: 'html is ...' }
    , { id: 2, title: 'css', body: 'css is ...' }
    , { id: 3, title: 'javascript', body: 'javascript is ...' }
  ]

  return (
    <div>
      <Header title="WEB"></Header>   {/* This is Component!! */}
      <Nav topics={topics}></Nav>                       {/* This is Component!! */}
      <Article title="Welcome" body="Hello, WEB"></Article>               {/* This is Component!! */}
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
