import React from 'react';
import { Link } from 'react-router-dom';

function Show({ show }) {
    return (
      <div className="show-card">
        <img className="show-image" src={show.image?.medium} alt={show.name} />
        <div className="show-content">
          <h3>{show.name}</h3>
          <p>Genre: {show.genres.join(", ")}</p>
          <p>Language: {show.language}</p>
          <p>Rating: {show.rating.average || 'N/A'}</p>
          <Link to={`/show/${show.id}`} className="show-summary-button">Show Summary</Link>
        </div>
      </div>
    );
  }

export default Show;
