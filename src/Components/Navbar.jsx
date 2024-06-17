import React, { useRef, useState, useEffect } from 'react'
import  './omdb.css/Navbar.css';
import {  Link } from 'react-router-dom'
import { Menu} from '@mui/icons-material';

const Navbar = () => {
  const [state, setstate]=useState()
  const dropdownRef = useRef(null)

  const click=()=>{
    setstate(!state)
  }

  

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setstate(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    // return () => {
    //   document.removeEventListener('mousedown', handleClickOutside);
    // };
  }, []);


  return (
    <>
      <header className='omdbheader'>
      <div>
        <h1 className='logo'>OMDBCLONE</h1>
        
      </div>
      <div className='tabs'>
      <Link className='link' to="/">Home</Link>
      <Link className='link'  to="/About">About</Link>
      <Link className='link'  to="/Apikeys">Apikeys</Link>
      <Link className='link'  to="/Contact">Contact</Link>
      <Link className='link'  to="/Parameeter">Parameeter</Link>
      </div>

      <div className='menubutton' ref={dropdownRef}>
      <p onClick={click} ><i className='menu'>{state? <Menu/>:<Menu/>} </i></p>     
      {state &&(
      <div className='tabs1'>
      <Link className='link' onClick={click} to="/">Home</Link>
      <Link className='link' onClick={click}  to="/About">About</Link>
      <Link className='link' onClick={click} to="/Apikeys">Apikeys</Link>
      <Link className='link' onClick={click} to="/Contact">Contact</Link>
      <Link className='link' onClick={click} to="/Parameeter">Parameeter</Link>
      </div> 
      )}
   </div>
 
      </header>       
    </>
  )
}
export default Navbar