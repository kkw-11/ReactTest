import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { use } from 'react';

function Header(props){
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
        props.onChangeMode(Number(event.target.id));
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
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);

  const topics = [
    {id:1, title:'html', body:'html is...'},
    {id:2, title:'css', body:'css is...'},
    {id:3, title:'javascript', body:'javascript is...'}
  ];

  let content = null;
  if(mode === 'WELCOME'){
    content = <Article title="Welcome" body="Hello, WEB!"></Article>
  }else if(mode === 'READ'){
    let title, body = null;
    for(let i =0; i<topics.length; ++i){
      if(topics[i].idx === id){
        title = topics[i].title;
        body = topics[i].body;
        console.log(title, body);
      }
    }
    content = <Article title={title} body={body}></Article>
  }
  return (
    <div className="App">
      <Header title="WEB" onChangeMode={()=>{
        setMode('WELCOME');
        }}></Header>
      <Nav topics={topics} onChangeMode={(_id)=>{
        setMode('READ');
        setId(_id);
      }}></Nav>
      {content}
    </div>
  );
}

export default App;
