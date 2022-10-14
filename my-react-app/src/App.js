import './App.css';
import { useState } from 'react'

function App() {
  
  const [events, setEvents] = useState([
    {title: "Joshua's Birthday celebrated", id: 1},
    {title: "browsers live stream", id: 2},
    {title: "race on moo moo farm", id: 3}
  ])


  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
    console.log(id)
  }
  return (
    <div className="App">
      <h1>Build web apps with React</h1>
      {events.map((event, index) => (
        <div key={event.id}>
          <h2>{index} - {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>Delete event</button>
        </div>
      ))}
    </div>
  );
}

export default App;
