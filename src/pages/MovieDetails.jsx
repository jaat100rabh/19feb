import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { getMovieDetails } from '../services/api';
import '../styles/MovieDetails.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchMovieDetails();
  }, [id]);

  const fetchMovieDetails = async () => {
    try {
      setLoading(true);
      setError('');
      
      const response = await getMovieDetails(id);
      
      if (response.Response === 'True') {
        setMovie(response);
      } else {
        setError(response.Error || 'Movie not found');
      }
    } catch (err) {
      setError('Failed to fetch movie details. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Handle missing poster
  const posterUrl = movie?.Poster === 'N/A' 
    ? 'https://via.placeholder.com/400x600?text=No+Poster' 
    : movie?.Poster;

  if (loading) {
    return (
      <div className="movie-details-container">
        <Navbar />
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading movie details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="movie-details-container">
        <Navbar />
        <div className="error-container">
          <p className="error-message">{error}</p>
          <Link to="/home" className="back-button">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="movie-details-container">
        <Navbar />
        <div className="error-container">
          <p className="error-message">Movie not found</p>
          <Link to="/home" className="back-button">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="movie-details-container">
      <Navbar />
      
      <div className="movie-details-content">
        <div className="movie-poster-section">
          <img 
            src={posterUrl} 
            alt={movie.Title} 
            className="movie-details-poster"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400x600?text=No+Poster';
            }}
          />
        </div>
        
        <div className="movie-info-section">
          <div className="movie-header">
            <h1 className="movie-title">{movie.Title}</h1>
            <div className="movie-meta">
              <span className="movie-year">{movie.Year}</span>
              <span className="movie-rated">{movie.Rated}</span>
              <span className="movie-runtime">{movie.Runtime}</span>
            </div>
          </div>
          
          <div className="movie-rating">
            <span className="imdb-rating">
              ⭐ IMDb: {movie.imdbRating}
            </span>
            <span className="imdb-votes">
              ({movie.imdbVotes} votes)
            </span>
          </div>
          
          <div className="movie-genres">
            <strong>Genre:</strong> {movie.Genre}
          </div>
          
          <div className="movie-plot">
            <h3>Plot</h3>
            <p>{movie.Plot}</p>
          </div>
          
          <div className="movie-cast">
            <div className="cast-item">
              <strong>Director:</strong> {movie.Director}
            </div>
            <div className="cast-item">
              <strong>Actors:</strong> {movie.Actors}
            </div>
            <div className="cast-item">
              <strong>Writer:</strong> {movie.Writer}
            </div>
          </div>
          
          <div className="movie-additional-info">
            <div className="info-item">
              <strong>Language:</strong> {movie.Language}
            </div>
            <div className="info-item">
              <strong>Country:</strong> {movie.Country}
            </div>
            <div className="info-item">
              <strong>Awards:</strong> {movie.Awards}
            </div>
            <div className="info-item">
              <strong>Box Office:</strong> {movie.BoxOffice}
            </div>
          </div>
          
          <div className="movie-actions">
            <Link to="/home" className="back-button">
              ← Back to Movies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
