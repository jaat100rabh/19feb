import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import MovieCard from '../components/MovieCard';
import { searchMovies, getPopularMovies } from '../services/api';
import '../styles/Home.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  // Load popular movies on component mount
  useEffect(() => {
    loadPopularMovies();
  }, []);

  // Search movies when query changes
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchQuery.trim()) {
        handleSearch();
      } else {
        loadPopularMovies();
      }
    }, 500); // Debounce search

    return () => clearTimeout(timeoutId);
  }, [searchQuery, currentPage]);

  const loadPopularMovies = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await getPopularMovies(currentPage);
      
      if (response.Response === 'True') {
        setMovies(response.Search || []);
        setTotalResults(parseInt(response.totalResults) || 0);
      } else {
        setError(response.Error || 'Failed to fetch movies');
        setMovies([]);
      }
    } catch (err) {
      setError('Failed to fetch movies. Please try again.');
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      loadPopularMovies();
      return;
    }

    try {
      setLoading(true);
      setError('');
      const response = await searchMovies(searchQuery, currentPage);
      
      if (response.Response === 'True') {
        setMovies(response.Search || []);
        setTotalResults(parseInt(response.totalResults) || 0);
      } else {
        setError(response.Error || 'No movies found');
        setMovies([]);
      }
    } catch (err) {
      setError('Failed to search movies. Please try again.');
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    handleSearch();
  };

  const handleNextPage = () => {
    setCurrentPage(prev => prev + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(1, prev - 1));
  };

  return (
    <div className="home-container">
      <Navbar />
      
      <div className="home-content">
        <div className="search-section">
          <form onSubmit={handleSearchSubmit} className="search-form">
            <input
              type="text"
              placeholder="Search for movies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-button">
              Search
            </button>
          </form>
        </div>

        <div className="movies-section">
          {loading && (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Loading movies...</p>
            </div>
          )}

          {error && (
            <div className="error-container">
              <p className="error-message">{error}</p>
            </div>
          )}

          {!loading && !error && movies.length === 0 && (
            <div className="no-results">
              <p>No movies found. Try searching for something else.</p>
            </div>
          )}

          {!loading && !error && movies.length > 0 && (
            <>
              <div className="movies-header">
                <h2>
                  {searchQuery ? `Search Results for "${searchQuery}"` : 'Popular Movies'}
                </h2>
                <p className="results-count">
                  {totalResults} results found
                </p>
              </div>
              
              <div className="movies-grid">
                {movies.map((movie) => (
                  <MovieCard key={movie.imdbID} movie={movie} />
                ))}
              </div>

              {/* Pagination */}
              {totalResults > 10 && (
                <div className="pagination">
                  <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className="pagination-button"
                  >
                    Previous
                  </button>
                  <span className="page-info">
                    Page {currentPage} of {Math.ceil(totalResults / 10)}
                  </span>
                  <button
                    onClick={handleNextPage}
                    disabled={currentPage >= Math.ceil(totalResults / 10)}
                    className="pagination-button"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
