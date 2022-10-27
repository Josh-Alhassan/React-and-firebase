import { useState } from 'react';
import './NewEventForm.css';

export default function NewEventForm({ addEvent }) {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('lokoja')
    // const title = useRef()
    // const date = useRef()

    function resetForm() {
        setTitle('');
        setDate('');
        setLocation('lokoja')
        // title.current.value = "";
        // date.current.value = "";
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, date)

        const event = {
            // title: title.current.value,
            // date: date.current.value,
            title: title,
            date: date,
            location: location,
            id: Math.floor(Math.random() * 10000)
        }
        console.log(event)
        addEvent(event)
        resetForm();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <span>Event Title:</span>
                <input 
                    type="text"
                    // ref={title}
                    onChange={(e) => setTitle(e.target.value)} 
                    value={title}    
                />
            </label>
            <label>
                <span>Event Date:</span>
                <input 
                    type="date"
                    // ref={date}
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                />
            </label>
            <label>
                <span>Event Location</span>
                <select onChange={(e) => setLocation(e.target.value)} >
                    <option value="lokoja">Lokoja</option>
                    <option value="ankpa">Ankpa</option>
                    <option value="ayingba">Ayingba</option>
                </select>
            </label>
            <button>Submit</button>
            {/* <p>Title - {title}, date - {date}</p> */}
            {/* <p onClick={resetForm} >Reset Form</p> */}
        </form>
    )
}