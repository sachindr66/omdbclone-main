import React, { useEffect, useState } from 'react';
import './omdb.css/Movies.css';
import { Search } from '@mui/icons-material';
import PosterDetails from './PosterDetails';
import HiddenComponent from './HiddenComponent';

const OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const MIN_POSTERS_COUNT = 120; 
const SERIES_TYPE = 'series'; 

const Series = () => {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null); 
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false); 

    useEffect(() => {
       fetchMoviesByType();
    }, []);

    const fetchMoviesByType = async () => {
        setLoading(true)
        try {
            const encodeSearch = encodeURIComponent(SERIES_TYPE); 
            const response = await fetch(`https://www.omdbapi.com/?s=${encodeSearch}&type=series&apikey=${OMDB_API_KEY}`);
            const data = await response.json();

            if (data.Search && data.Search.length > 0) {
                const initialMovies = data.Search.slice(0, MIN_POSTERS_COUNT);
                setMovies(initialMovies);
                if (initialMovies.length < MIN_POSTERS_COUNT) {
                    await fetchMoreMovies(data.Search.length);
                }
            } else {
                setError('No series found.');
            }
        } catch (err) {
            console.error(err);
            setError('Failed to fetch series data. Please check your internet connection');
        }
        finally{
            setLoading(false)
        }
    };

    const fetchMoreMovies = async (startIdx) => {
        setLoading(true); 
        try {
            let currentMovies = [...movies];
            let page = 2;
            while (currentMovies.length < MIN_POSTERS_COUNT) {
                const response = await fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(SERIES_TYPE)}&type=series&apikey=${OMDB_API_KEY}&page=${page}`);
                const data = await response.json();
                if (data.Search && data.Search.length > 0) {
                    currentMovies = [...currentMovies, ...data.Search];
                }
                page++;
            }
            setMovies(currentMovies.slice(0, MIN_POSTERS_COUNT));
        } catch (err) {
            console.error('Failed to fetch additional series.', err);
        }
        finally{
        setLoading(false); 
            
        }
    };

    const handleMovieClick = async (imdbID) => {
        setLoading(true); 
        try {
            const response = await fetch(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${imdbID}&plot=full`);
            const data = await response.json();

            setSelectedMovie(data); 
        } catch (err) {
            console.error('Failed to fetch series details.', err);
        } finally {
            setLoading(false); 
        }
    };

    const handleCloseDetails = () => {
        setSelectedMovie(null); 
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmitSearch = async (e) => {
        e.preventDefault();
        if (searchTerm.trim() === '') {
            setError('Please enter a series title to search.');
            return;
        }
        setSelectedMovie(null);
        setLoading(true)
        try {
            const encodeSearch = encodeURIComponent(searchTerm.trim()); // Encode search term
            const response = await fetch(`https://www.omdbapi.com/?s=${encodeSearch}&apikey=${OMDB_API_KEY}`);
            const data = await response.json();

            if (data.Search && data.Search.length > 0) {
                setMovies(data.Search.slice(0, MIN_POSTERS_COUNT));
                setError('');
            } else {
                setMovies([]);
                setError('Please check the spelling and try again.');
            }
        } catch (err) {
            setError('Please check your internet connection.');
            console.error('Error searching for movies:', err);
        } finally {
            setLoading(false); 
        }
    };

    return (
        <div className='movies'>
            <HiddenComponent>
            <form onSubmit={handleSubmitSearch} className="forms">
                <div className="movie_input">
                    <input
                        type="text"
                        placeholder="Search for series..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className='inputs'
                    />
                    <button className="movie_btn" type="submit">
                        <i className='search_icon'><Search /></i>
                    </button>
                </div>
            </form>
            </HiddenComponent>
            <div className='contactcontent3'>Series</div>
            {error && <p className='error'>{error}</p>}
            {loading ? (
                <div className='loader'></div>
            ) : selectedMovie ? (
                <PosterDetails selectedMovie={selectedMovie} handleCloseDetails={handleCloseDetails} />
            ) : (
                <div className='cards_parent'>
                    <div className='cardslist'>
                        {movies.length > 0 ? (
                            movies.map(movie => (
                                <div key={movie.imdbID} className='carad-parent'>
                                    <div className="omdb-card">
                                        <div className='omdb-poster'>
                                            <img
                                                src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/200'}
                                                alt={movie.Title}
                                                className='poster'
                                            />
                                        </div>
                                        <div className="poster-info">
                                            <div className="poster-info1">
                                                <div className="poster-info2">
                                                    <p className="info">Type: {movie.Type}</p>
                                                    <p className="info">imdbID: {movie.imdbID}</p>
                                                    <p className="info">Year: {movie.Year}</p>
                                                </div>
                                                <div className='title' onClick={() => handleMovieClick(movie.imdbID)}>
                                                    <h3>{movie.Title}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="downloaddbtn" onClick={() => handleMovieClick(movie.imdbID)}>
                                        <p className='trigger_btn'>
                                            {movie.Title}
                                        </p>
                                    </button>
                                </div>
                            ))
                        ) : (
                            <p>No series found.</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Series;
