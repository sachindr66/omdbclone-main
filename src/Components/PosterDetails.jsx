// MovieDetails.js
import React from 'react';

const PosterDetails = ({ selectedMovie, handleCloseDetails }) => {
    if (!selectedMovie) return null;

    return (
        <div className='movie_details'>
            <div className='movie_img'>
                <img
                    className='movie_poster'
                    src={selectedMovie.Poster !== 'N/A' ? selectedMovie.Poster : 'https://via.placeholder.com/200'}
                    alt={selectedMovie.Title}
                />
            </div>
            <div className='poster_info'>
                <h2>{selectedMovie.Title}</h2>
                <p>{selectedMovie.Plot}</p>
                <p>Director: {selectedMovie.Director}</p>
                <p>Actors: {selectedMovie.Actors}</p>
                <p>Genre: {selectedMovie.Genre}</p>
                <p>Rated: {selectedMovie.Rated}</p>
                <p>Runtime: {selectedMovie.Runtime}</p>
            <button className='movieclose_btn' onClick={handleCloseDetails}>Close</button>
            </div>
        </div>
    );
};

export default PosterDetails;
