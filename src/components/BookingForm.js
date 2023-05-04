import React, { useState } from 'react';

function BookingForm({ show }) {
  const [name, setName] = useState('');
  const [numTickets, setNumTickets] = useState(1);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const ticketData = {
      showName: show.name,
      showId: show.id,
      name,
      numTickets,
      date,
      time,
    };
    localStorage.setItem('ticketData', JSON.stringify(ticketData));
    alert('Ticket data saved to local storage!');
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h3 className="booking-form-title">Booking Details</h3>
      <div className="booking-form-field">
        <label htmlFor="show-name-input">Show Name:</label>
        <input type="text" id="show-name-input" value={show.name} disabled />
      </div>
      <div className="booking-form-field">
        <label htmlFor="name-input">Name:</label>
        <input type="text" id="name-input" value={name} onChange={(event) => setName(event.target.value)} />
      </div>
      <div className="booking-form-field">
        <label htmlFor="num-tickets-input">Number of Tickets:</label>
        <input type="number" id="num-tickets-input" min={1} value={numTickets} onChange={(event) => setNumTickets(parseInt(event.target.value))} />
      </div>
      <div className="booking-form-field">
        <label htmlFor="date-input">Date:</label>
        <input type="date" id="date-input" value={date} onChange={(event) => setDate(event.target.value)} />
      </div>
      <div className="booking-form-field">
        <label htmlFor="time-input">Time:</label>
        <input type="time" id="time-input" value={time} onChange={(event) => setTime(event.target.value)} />
      </div>
      <div className="booking-form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default BookingForm;
