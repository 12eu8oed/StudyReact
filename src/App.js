import logo from './logo.svg';
import './App.css';  //앱 디자인
import { useState } from 'react'; //훅을 이용한 뭐시기 저시기 라는데 잘 모르겠음 ㅋㅋ

function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

function Header(props) { //사용자 정의 태그를 만들때는 첫글자 대문자로 upper 이것이 바로 !!컴포넌트!!
  // console.log('props: ', props, props.title);
  return <header>
    <h1><a href="/" onClick={(event) => {  // 화살표 함수란, `function() {   }` 를 `() => {   }` 이런식으로 똑같다 동작이!
      event.preventDefault();  // 함수를 클릭하고 실행된 후 창이 새로고침되는 것 방지!!
      props.onChangeMode();    // App()에 있는 Header태그 부분에 props로 들어가있는 onChangeMode()를 실행 시켜준다!
    }} >{props.title}</a></h1>
  </header>

}

function Nav(props) { // Nav라는 이름을 가진 사용자 정의 태그(Component) props를 인자로 받는다.
  const lis = []; // lis라는 이름을 가진 빈 배열을 만든다. 여기에 동적으로 push()함수를 이용해서 html출력할 예정
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];

    lis.push(
      <li key={t.id}>  {/* 키 값으로 index처럼 주는 느낌! 고유 키*/}
        <a id={t.id} href={'/read/' + t.id} onClick={event => {  //const topics에 들어간 id값은 정수값이지만 a태그에 속성을 통해서 전달이 되어지면 String값으로 변한다!!
          event.preventDefault();  // 클릭시 새로고침 방지
          props.onChangeMode(Number(event.target.id)); //target은 이벤트를 유발시킨 태그를 가리킨다! 여기서는 <a> 태그
        }}>{t.title}</a>  {/*파라미터값이 하나일때는 괄호 생략가능함! (event) => {} */}
      </li>
    )
  }

  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}

function App() { //useState() App()다시 실행시키면서 값을 변경해 준다!
  // const mode = 'WELCOME'; //mode안에 값에 따라 출력되는 데이터가 다르게 나오게 만들 예정

  /*
  const _mode = useState('WELCOME'); //useState는 배열을 리턴하고 0번째 요소를 그 값을 읽을 때 사용하는 데이터 1번째 요소는 그 상태의 값을 변경할 때 사용하는 함수이다!!
  const mode = _mode[0];  // _mode의 0번째 인덱스 요소의 값을 가져오는 변수
  const Setmode = _mode[1]; // _mode의 1번째 인덱스 요소의 값을 세팅하는 변수
  */
  const [mode, setMode] = useState('WELCOME'); //위의 3줄과 똑같은 코드
  const [id, setId] = useState(null);
  const topics = [ //동적으로 그려줄 데이터
    { id: 1, title: 'html', body: 'html is ...' }
    , { id: 2, title: 'css', body: 'css is ...' }
    , { id: 3, title: 'javascript', body: 'javascript is ...' }
  ]

  let content = null; //mode값에 따라 출력되는 content 일단 null으로 선언
  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  }
  else if (mode === 'READ') {
    let title, body = null; //mode가 'READ'일 때, 출력되는 title과 body값을 설정해 주기위해 변수 선언!
    for(let i=0; i<topics.length; i++) {
      if(topics[i].id === id) { //정수값으로 들어오는 id의 값에 따라 topics의 i번째 요소를 결정하고 그에 따른 title과 body의 값을 결정한다!
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>  //content를 topics의 id값에 따라 동적으로 html 설정!!
  }
  return (
    <div>
      <Header title="WEB" onChangeMode={() => {   //Header태그를 클릭했을 때 function 안에 기능을 실행
        setMode('WELCOME')
      }}>
      </Header>   {/* This is Component!! */}

      <Nav topics={topics} onChangeMode={(_id) => {
        setMode('READ')
        setId(_id);
      }}>
      </Nav>                       {/* This is Component!! */}
      {content} {/* content안에 들어가는 Component를 동적으로 출력 */}
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