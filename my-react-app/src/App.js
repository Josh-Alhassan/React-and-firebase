import './App.css';
import { useState } from 'react'

import Title from './components/Title';

function App() {
  const [showEvents, setShowEvents] = useState(true);
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

  const subtitle = 'All the latest events in Marioaland'
  return (
    <div className="App">
      <Title title='Events in Your Area' subtitle={subtitle} />
      
      {showEvents && (<div>
        <button onClick={() => setShowEvents(false)}>Hide Event</button>
      </div>)
      }
      {!showEvents && (<div>
        <button onClick={() => setShowEvents(true)}>Show Event</button>
      </div>)
      }
      <h1>Build web apps with React</h1>
      {showEvents && events.map((event, index) => (
        <div key={event.id}>
          <h2>{index} - {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>Delete event</button>
        </div>
      ))}
    </div>
  );
}

export default App;
