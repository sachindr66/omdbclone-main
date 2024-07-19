import React, { useState } from "react";
import "./omdb.css/Home.css";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import { ArrowDownward} from "@mui/icons-material";
import Carousel from "./Carousel";
import About from "./About";
import Contact from "./Contact";
import TopratedMovies from "./TopratedMovies";
import PosterDetails from "./PosterDetails";

const Home = () => {
  let [data, Setdata] = useState([]);
  let [search, Setsearch] = useState("");
  let [Errormsg, Seterrormsg] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null); // State to hold selected movie details

  const onsubmits = (e) => {
    Setsearch(e.target.value);
  };
  
  const Submits = async (e) => {
    e.preventDefault();
     const trimmedSearch =search.replace(/\s+/g, ' ').trim()
     const encodeSearch =encodeURIComponent(trimmedSearch)
   
    fetch(`https://www.omdbapi.com/?s=${encodeSearch}&apikey=31edf87f`)
      .then((response) => response.json())
      .then((value) => {
        console.log(value);
        if (value.Response === "True") {
          Setdata(value.Search);
          Seterrormsg("");
          Setsearch("");
        } else {
          Setdata([]);
          Seterrormsg(
            "No movies found. Please check the spelling and try again."
          );
        }
      })
  };

  const handleMovieClick = async (imdbID) => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=31edf87f&i=${imdbID}&plot=full`);
      const data = response.data;
      setSelectedMovie(data); // Set selected movie details
    } catch (error) {
      console.error('Failed to fetch movie details:', error);
    }
  };

  const handleCloseDetails = () => {
    setSelectedMovie(null); // Close movie details view
  };

  const handleDownload = async (url) => {
    try {
      const response = await axios.get(url, { responseType: "blob" });

      // Ensure compatibility with different browsers and user preferences
      const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
      const isBlobSupported =
        URL.createObjectURL && typeof URL.createObjectURL === "function";

      if (isBlobSupported) {
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.setAttribute("download", "movie_poster.jpg");
        link.style.display = "none"; // Hide the link for better UX
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        // Fallback for browsers that don't support createObjectURL
        const a = document.createElement("a");
        a.href = url;
        a.setAttribute("download", "movie_poster.jpg");
        a.target = "_blank"; // Open the image in a new tab
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        console.warn(
          "Browser does not fully support image downloads. Opening in a new tab."
        );
      }
    } catch (error) {
      console.error("Error downloading image:", error);
      // Handle download errors gracefully (e.g., display an error message to the user)
    }
  };

  return (
    <React.Fragment>
      <div className="parent">
        <div className="headingparent">
          <h1 className="heading">WELCOME TO MY WEBSITE</h1>
          <p className="heading1">SEARCH MOVIE POSTER</p>
        </div>
        <div className="omdbsearchparent">
          <form action="" onSubmit={Submits} className="form">
            <div className="searchinput">
              <i>
                <SearchIcon />
              </i>
              <input
                className="main_input"
                type="text"
                value={search}
                onChange={onsubmits}
                id=""
                placeholder="Search for movies..."
              />
              <button className="omdbbtn" type="submit">
                Search
              </button>
            </div>
          </form>
          <div className="cardslist">
            {Errormsg ? (
              <p className="errormsg">{Errormsg}</p>
            ) :selectedMovie ? (
              <PosterDetails selectedMovie={selectedMovie} handleCloseDetails={handleCloseDetails} />
            ): (
              data.map((movie) => {
                let { Title, Poster, Type, Year, imdbID} = movie;
                return (
                  <div className="card-parent">
                    <div className="omdb-card">
                      <div className="omdb-poster">
                        <img src={Poster} alt="" className="poster" />
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
                    <button className="downloaddbtn" onClick={() => handleDownload(movie.Poster)}> Download </button>
                    <button className="downloaddbtn1" onClick={() => handleDownload(movie.Poster)}> <ArrowDownward  className="downloadicon" fontSize="small"   style={{ height: "16px" }} /></button>
                  </div>
                );
              })
            )}
          </div>
        </div>
        <div className="carousel">
          <Carousel />
        </div>
        <div className="topratedmovies">
          <TopratedMovies/>
        </div>
        <div className="projectdetails">
          <About/>
          <Contact/>
        </div>
      </div>
      {selectedMovie && (
        <PosterDetails selectedMovie={selectedMovie} handleCloseDetails={handleCloseDetails} />
      )}
    </React.Fragment>
  );
};

export default Home;


