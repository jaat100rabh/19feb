import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MovieCard.css';

const MovieCard = ({ movie }) => {
  // Handle missing poster
  const posterUrl = movie.Poster === 'N/A' 
    ? 'https://via.placeholder.com/300x450?text=No+Poster' 
    : movie.Poster;

  return (
    <Link to={`/movie/${movie.imdbID}`} className="movie-card-link">
      <div className="movie-card">
        <div className="movie-poster-container">
          <img 
            src={posterUrl} 
            alt={movie.Title} 
            className="movie-poster"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/300x450?text=No+Poster';
            }}
          />
        </div>
        <div className="movie-info">
          <h3 className="movie-title">{movie.Title}</h3>
          <div className="movie-meta">
            <span className="movie-year">{movie.Year}</span>
            <span className="movie-type">{movie.Type}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
