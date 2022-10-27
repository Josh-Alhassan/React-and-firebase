import './App.css';
import React, { useState } from 'react'

import Title from './components/Title';
import Modal from './components/Modal';

import NewEventForm from './components/NewEventForm';

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([])

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event]
    })
    setShowModal(false)
  }


  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
    console.log(id)
  }

  // const handleClose = () => {
  //   setShowModal(false)
  // }

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
      {showModal && <Modal isSalesModal={true}>
        <NewEventForm addEvent={addEvent} />
      </Modal>}
        <div>
          <button onClick={() => setShowModal(true)} >Add New Event</button>
        </div>
    </div>
  );
}

export default App;
