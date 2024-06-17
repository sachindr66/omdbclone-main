import React, {  useState } from 'react'
import  './omdb.css/Home.css';
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';


const Home = () => {
    let[data, Setdata]=useState([])
    let[search, Setsearch]=useState('')
    let[Errormsg, Seterrormsg]=useState('')

    const onsubmits=(e)=>{
        Setsearch(e.target.value)
    }
    const Submits= async (e)=>{
        e.preventDefault()
      fetch(`https://www.omdbapi.com/?s=${search}&apikey=31edf87f`)
        .then((response)=>response.json())
        .then((value)=>{console.log(value)
            if(value.Response === "True"){
                Setdata(value.Search)
                Seterrormsg('')
                Setsearch('')
            }else{
                Setdata([])
                Seterrormsg('No movies found. Please check the spelling and try again.')
            }
        })
    }
    const handleDownload =async(url)=>{
        const response =await axios.get(url,{resposeType:"blob"})
        const downloadUrl =window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', 'movie_poster.jpg');
        document.body.appendChild(link);
        link.click();
         link.parentNode.removeChild(link);
      };

  return (
    <React.Fragment>
        <div className='parent'>
            <div className='headingparent'>
                <h1  className='heading'>WELCOME TO MY WEBSITE</h1>
                <p className='heading1'>SEARCH MOVIE POSTER</p>
            </div>
        <div className='omdbsearchparent'>
            <form action="" onSubmit={Submits}>
             <div className='searchinput'> 
            <i><SearchIcon /></i> 
            <input className='inputs' type="text" value={search} onChange={onsubmits} id="" />
            <button className='omdbbtn' type='submit'>Search</button>
            </div>  
            </form>
            <div className='cardslist'>
            {Errormsg ?(
                <p className='errormsg'>{Errormsg}</p>

            ):(
            data.map((movie)=>(
                    <div className='omdbcards'>
                        <div className='titel'>
                         {movie.Title}
                        </div>
                        <div className='obdbcardheadre'>
                        <img src={movie.Poster} alt="" width={200} height={300} />
                        </div>
                        <div className='cardbody'>
                        <div>
                         Type:{movie.Type}
                        </div>
                        <div>
                        Year:{movie.Year}
                        </div>
                        <div>
                        imdbID:{movie.imdbID}
                        </div>
                       <button className='downloaddbtn' onClick={() => handleDownload(movie.Poster)}>Download</button>
                        </div>
                       <button className='downloaddbtn1' onClick={() => handleDownload(movie.Poster)}></button>
                    </div>
                ))
            ) }
            </div>

        </div>
        </div>
      
    </React.Fragment>
        
  )
}

export default Home