import logo from './logo.svg';
import './App.css';

function Header(props){
  console.log('props', props, props.title);
  return <header>
  <h1>
    <a href="/" onClick={(event)=>{
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a>
  </h1>
</header>
}


function Article(props){
  return <article>
  <h2>{props.title}</h2>
  {props.body}
</article>
}

function Nav(props){
  const lis = [
  ];

  for(let i=0; i<props.topics.length; ++i){
    let topicObj = props.topics[i];
    lis.push(<li key={topicObj.id}>
      <a id={topicObj.id} href={'/read/'+topicObj.id} onClick={event=>{
        event.preventDefault();
        props.onChangeMode(event.target.id);
      }}>{topicObj.title}</a>
      </li>)
  }

  return <nav>
  <ol>
    {lis}
  </ol>
</nav>
}

function App() {
  const topics = [
    {id:1, title:'html', body:'html is...'},
    {id:2, title:'css', body:'css is...'},
    {id:3, title:'javascript', body:'javascript is...'}
  ];
  return (
    <div className="App">
      <Header title="WEB" onChangeMode={()=>{
          alert('Header');
        }}></Header>
      <Nav topics={topics} onChangeMode={(id)=>{
        alert(id);
      }}></Nav>
      <Article title="Welcome" body="Hello, WEB!"></Article>
      <Article title="Hi" body="Hello, React!"></Article>
    </div>
  );
}

export default App;
