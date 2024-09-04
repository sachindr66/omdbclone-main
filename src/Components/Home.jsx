import React, { useEffect, useState } from "react";
import "./omdb.css/Home.css";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import { ArrowDownward } from "@mui/icons-material";
import Carousel from "./Carousel";
import About from "./About";
import Contact from "./Contact";
import TopratedMovies from "./TopratedMovies";
import PosterDetails from "./PosterDetails";
import HiddenComponent from "./HiddenComponent";

const Home = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [hasSearched, setHasSearched] = useState(false); // Track if a search has been performed

  const onInputChange = (e) => {
    setSearch(e.target.value);
    setErrorMsg("")
  };

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setHasSearched(true); 

    if (search.trim() === "") {
      setErrorMsg('Please enter a title (movie, series, etc.) to search.')
      setLoading(false);
      return;
    }

    const trimmedSearch = search.trim();
    const encodeSearch = encodeURIComponent(trimmedSearch);

    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${encodeSearch}&apikey=31edf87f`
      );
      const allData = response.data;

      if (allData.Response === "False") {
        setData([]);
        setErrorMsg("Please check the spelling and try again.");
      } else {
        setData(allData.Search);
        setErrorMsg("");
      }
    } catch (err) {
      setErrorMsg("Please check your internet connection.");
      console.error("Error searching for movies:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleMovieClick = async (imdbID) => {
    setLoading(true)
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=31edf87f&i=${imdbID}&plot=full`
      );
      const data = response.data;
      setSelectedMovie(data);
    } catch (error) {
      console.error("Failed to fetch movie details:", error);
    }finally{
    setLoading(false)
    }
  };

  const handleCloseDetails = () => {
    setSelectedMovie(null);
  };

  const handleDownload = async (url) => {
    try {
      const response = await axios.get(url, { responseType: "blob" });
      const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.setAttribute("download", "movie_poster.jpg");
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  return (
    <React.Fragment>
      <div className="parent">
        <HiddenComponent>
        <div className="headingparent">
          <h1 className="heading">WELCOME TO MY WEBSITE</h1>
          <p className="heading1">SEARCH MOVIE POSTER</p>
        </div>
        </HiddenComponent>
        <div className="omdbsearchparent">
          <form onSubmit={onSubmit} className="form">
        <HiddenComponent>
            <div className="searchinput" >
              <i className="search_icon" >
                <SearchIcon />
              </i>
              <input
                className="main_input"
                type="text"
                value={search}
                onChange={onInputChange}
                placeholder="Search by title (movies, series, etc.)"
                />
              <button className="omdbbtn" type="submit">
                Search
              </button>
            </div>
        </HiddenComponent>
          </form>
          {errorMsg && <p className="error">{errorMsg}</p>}
          <div className="cardslist">
            {loading ? (
              <p className="loader"></p>
            ) : selectedMovie ? (
              <PosterDetails
                selectedMovie={selectedMovie}
                handleCloseDetails={handleCloseDetails}
              />
            ) : hasSearched && data.length === 0 ? (
              <p>No results found</p>
            ) : (
              data.map((movie) => {
                const { Title, Poster, Type, Year, imdbID } = movie;
                return (
                  <div className="card-parent" key={imdbID}>
                    <div className="omdb-card">
                      <div className="omdb-poster">
                        <img src={Poster} alt={Title} className="poster" />
                      </div>
                      <div className="poster-info">
                        <div className="poster-info1">
                          <div className="poster-info2">
                            <p className="info">Type: {Type}</p>
                            <p className="info">Year: {Year}</p>
                            <p className="info">imdbId: {imdbID}</p>
                          </div>
                          <h3
                            className="title"
                            onClick={() => handleMovieClick(imdbID)}
                            style={{ cursor: "pointer" }}
                          >
                            {Title}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <button
                      className="downloaddbtn"
                      onClick={() => handleDownload(movie.Poster)}
                    >
                      Download
                    </button>
                    <button
                      className="downloaddbtn1"
                      onClick={() => handleDownload(movie.Poster)}
                    >
                      <ArrowDownward
                        className="downloadicon"
                        fontSize="small"
                        style={{ height: "16px" }}
                      />
                    </button>
                  </div>
                );
              })
            )}
          </div>
        </div>
        <HiddenComponent>
        <div className="carousel">
          <Carousel />
        </div>
        </HiddenComponent>
        <HiddenComponent>
        <div className="topratedmovies">
          <TopratedMovies />
        </div>
        </HiddenComponent>
        <div className="projectdetails">
        <HiddenComponent>
          <About />
        </HiddenComponent>
        <HiddenComponent>
          <Contact />
        </HiddenComponent>
        </div>
      </div>
      {selectedMovie && (
        <PosterDetails
          selectedMovie={selectedMovie}
          handleCloseDetails={handleCloseDetails}
        />
      )}
    </React.Fragment>
  );
};

export default Home;
