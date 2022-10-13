import './App.css';
import { useState } from 'react'

function App() {
  const [name, setName] = useState('Joshua');

  const title = 'Learning React is freaking Awesome';
  const subtitle = 'This is a website for learning react.js';

  const handleClick = (e) => {
    setName('Alhassan')
  }
  return (
    <div className="App">
      <h1>Build web apps with React</h1>
      <p>My name is {name}</p>
      <button onClick={handleClick}>Change name</button>
    </div>
  );
}

export default App;
