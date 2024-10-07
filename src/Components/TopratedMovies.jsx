import React, { useEffect, useState } from "react";
import "./omdb.css/Home.css";
import axios from "axios";
import { ArrowDownward } from "@mui/icons-material";
import PosterDetails from "./PosterDetails";

const OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const POSTERS_COUNT = 100;
const TOP_RATED_MOVIES = [
  'K.G.F', 'Kantara', 'Inception', 'Interstellar', 'The Dark Knight',
  'The Godfather', 'The Shawshank Redemption', 'Pulp Fiction', 'Fight Club',
  'Forrest Gump', 'The Matrix', 'The Lord of the Rings: The Return of the King',
  'The Empire Strikes Back', 'Back to the Future', 'Gladiator', 'Braveheart',
  'Avatar', 'Titanic', 'The Avengers', 'Jurassic Park'
]; 

const TopratedMovies = () => {
  const [data, setData] = useState([]);
  const [errormsg, setErrormsg] = useState("");
  const [loading, setLoading] = useState(true); // State to track loading status
  const [selectedMovie, setSelectedMovie] = useState(null); // State to hold selected movie details
  
  useEffect(() => {
    fetchTopRatedMovies();
  }, []);

  const fetchTopRatedMovies = async () => {
    let results = [];
    setLoading(true); 
    try {
      for (const title of TOP_RATED_MOVIES) {
        const response = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&t=${title}`);
        const data = response.data;

        if (data && data.Response !== "False") {
          results.push(data);
        }
        if (results.length >= POSTERS_COUNT) break;
      }
      setData(results);
      setLoading(false); // Set loading to false after fetch completes
    } catch (err) {
      setErrormsg("Failed to fetch movie data.");
      setLoading(false); // Set loading to false in case of error
      console.error(err);
    }
  };

  const handleMovieClick = async (imdbID) => {
  setLoading(true)
    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${imdbID}&plot=full`);
      const data = response.data;
      setSelectedMovie(data); // Set selected movie details
    } catch (error) {
      console.error('Failed to fetch movie details:', error);
    }finally{
     setLoading(false)
    }
  }

  const handleCloseDetails = () => {
    setSelectedMovie(null); // Close movie details view
  };

  const handleDownload = async (url) => {
    try {
      const response = await axios.get(url, { responseType: "blob" });
      const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
      const isBlobSupported = URL.createObjectURL && typeof URL.createObjectURL === "function";

      if (isBlobSupported) {
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.setAttribute("download", "movie_poster.jpg");
        link.style.display = "none"; // Hide the link for better UX
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        const a = document.createElement("a");
        a.href = url;
        a.setAttribute("download", "movie_poster.jpg");
        a.target = "_blank"; // Open the image in a new tab
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        console.warn("Browser does not fully support image downloads. Opening in a new tab.");
      }
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  return (
    <React.Fragment>
     <div className="topratedmovies">
        <p className="heading1">TOP RATED MOVIES</p>
      <div className="toprated_cardslist">
        {loading ? (
          <p className="loader"></p> 
        ) : errormsg ? (
          <p className="errormsg">{errormsg}</p> 
        ) : selectedMovie ?(
          <PosterDetails selectedMovie={selectedMovie} handleCloseDetails={handleCloseDetails} />
        ):(
          data.map((movie) => {
            let { Title, Poster, Type, Year, imdbID } = movie;
            return (
              <div className="card-parent" key={imdbID}>
                <div className="omdb-card">
                  <div className="omdb-poster">
                    <img className="poster" src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/200'} alt={Title} />
                  </div>
                  <div className="poster-info">
                    <div className="poster-info1">
                      <div className="poster-info2">
                        <p className="info">Type: {Type}</p>
                        <p className="info">Year: {Year}</p>
                        <p className="info">imdbId: {imdbID}</p>
                      </div>
                      <h3 className='title' onClick={() => handleMovieClick(imdbID)} style={{ cursor: 'pointer' }}>{Title}</h3>
                    </div>
                  </div>
                </div>
                <button className="downloaddbtn" onClick={() => handleDownload(Poster)}>Download</button>
                <button className="downloaddbtn1" onClick={() => handleDownload(Poster)}>
                  <ArrowDownward className="downloadicon" fontSize="small" style={{ height: "16px" }} />
                </button>
              </div>
            );
          })
        )}
      </div>
      </div>
     
    </React.Fragment>
  );
};

export default TopratedMovies;
