import './App.css';
import { useState } from 'react'

function App() {
  const [name, setName] = useState('Joshua');
  const [events, setEvents] = useState([
    {title: "Joshua's Birthday celebrated", id: 1},
    {title: "browsers live stream", id: 2},
    {title: "race on moo moo farm", id: 3}
  ])

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
      {events.map((event, index) => (
        <div key={event.id}>
          <h2>{index} - {event.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
