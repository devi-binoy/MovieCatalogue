import React, { useState, useEffect } from 'react';
import Show from './Show';

function Catalogue() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
      const data = await response.json();
      const showList = data.map(item => item.show);
      setShows(showList);
    }
    fetchData();
  }, []);

  return (
    <div>
    <nav className="header-nav">
        <h1>QuadB TVMaze</h1>
    </nav>

    <div className="movie-list">
    {shows.map(show => (
        <Show key={show.id} show={show} />
      ))}
    </div>
    </div>
  );
}

export default Catalogue;
