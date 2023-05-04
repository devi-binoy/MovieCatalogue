import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BookingForm from './BookingForm';

function Summary() {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const data = await response.json();
      setShow(data);
    }
    fetchData();
  }, [id]);

  if (!show) {
    return <div>Loading...</div>;
  }

  function handleBookTicket() {
    const ticketData = {
      showName: show.name,
      showId: show.id,
    };
    localStorage.setItem('ticketData', JSON.stringify(ticketData));
    setShowForm(true);
  }

  return (
    <div className="show-summary-box">
      <h2 className="show-title">{show.name}</h2>
      <img src={show.image?.medium} alt={show.name} />
      <div className="show-details">
        <p>Genre: {show.genres.join(", ")}</p>
        <p>Language: {show.language}</p>
        <p>Rating: {show.rating.average || 'N/A'}</p>
        <div className="show-summary-text" dangerouslySetInnerHTML={{__html: show.summary}}></div>
        <button onClick={handleBookTicket} className="bookButton">Book Ticket</button>
        {showForm && <BookingForm show={show} />}
      </div>
    </div>
  );
}

export default Summary;
