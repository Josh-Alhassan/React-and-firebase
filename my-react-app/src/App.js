import './App.css';
import React, { useState } from 'react'

import Title from './components/Title';
import Modal from './components/Modal';

function App() {
  const [showModal, setShowModal] = useState(false)
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

  const handleClose = () => {
    setShowModal(false)
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
        <React.Fragment key={event.id}>
          <h2>{index} - {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>Delete event</button>
        </React.Fragment>
      ))}

      {/* <Modal>
        <h2>10% OFF Coupon Code!!</h2>
        <p>Use the code NINJA10 at the checkout.</p>
      </Modal> */}
      {showModal && <Modal handleClose={handleClose}>
        <h2>Terms and Conditions</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </Modal>}
        <div>
          <button onClick={() => setShowModal(true)} >Open</button>
        </div>
    </div>
  );
}

export default App;
