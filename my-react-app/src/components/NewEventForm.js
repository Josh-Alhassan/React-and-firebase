import { useState } from 'react';
import './NewEventForm.css';

export default function NewEventForm({ addEvent }) {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');

    function resetForm() {
        setTitle('');
        setDate('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const event = {
            title: title,
            date: date,
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
                    onChange={(e) => setTitle(e.target.value)} 
                    value={title}    
                />
            </label>
            <label>
                <span>Event Date:</span>
                <input 
                    type="date" 
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                />
            </label>
            <button>Submit</button>
            {/* <p>Title - {title}, date - {date}</p> */}
            {/* <p onClick={resetForm} >Reset Form</p> */}
        </form>
    )
}