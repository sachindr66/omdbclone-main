import React from 'react'
import './omdb.css/Footer.css'
import { Call, FacebookRounded, Instagram, LocationCityRounded, Mail, Twitter } from '@mui/icons-material'

const Footer = () => {
  return (
    <footer>
        <div className='footer1'> 
        <div className='footerchild'>
          <span className='footerheader'>
            <i><LocationCityRounded/></i>
            <div>
            <h3>Find us</h3>
            <p>110 Avenue, sw 54321 </p>
            </div>
          </span>
          <span className='footerheader'>
            <i> <Call/></i>
            <div>
            <h3>Call us</h3>
            <p>123-436-789</p>
            </div>
          </span>
          <span className='footerheader'>
            <i><Mail/></i>
            <div>
            <h3>Mail us</h3>
            <p>omdbschin@gmail.com</p>
            </div>
          </span>
        </div>

        <div className='footerinner'>
        <div className='logofollowus'>
        <div className='footerlogo'>
            <h1 className='logo'><a href="/">OMDBCLONE</a></h1>
            <p>OMDb -Open movie data baseThe OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users.</p>
        </div>
        <div className='followus'>
            <h3>Follow us</h3>
            <div className='icons'>
              <i><a href=""><FacebookRounded/></a></i>
              <i><a href=""><Instagram/></a></i>
              <i><a href=""><Twitter/></a></i>
            </div>
        </div>
        </div>
        <div className='linksinput'>
          <div className='quicklinks'>
          <h4>Quick Links</h4>
          <div className='linkslist'>
            <div>
            <ul>
              <li><a className='links' href="/">Home</a></li>
              <li><a className='links' href="./About">About us</a></li>
              <li><a className='links' href="./Services">Services</a></li>
              <li><a className='links' href="./Apikeys">Api-keys</a></li>
              <li><a className='links' href="./Contact">Contact us</a></li>
            </ul>
            </div>
            <div>
            <ul>
              <li><a className='links' href="/">Facebook</a></li>
              <li><a className='links' href="./About">  Twitter</a></li>
              <li><a className='links' href="./Services">Linkdin</a></li>
              <li><a className='links' href="./Apikeys">Instagram</a></li>
              <li><a className='links' href="./Contact">You Tube</a></li>
            </ul>
            </div>
          </div>
          </div>
          <div className='letssyaconnect'>
            <h4>Let's Stay Connected</h4>
            <div>
            <p>Enter your email to unlock 10% OFF</p>
            <div className='subscribe'>
              <input type="text" name="" id="footerinput" placeholder='Enter Email'/>
              <button className='footerbtn'>Subscribe</button>
            </div>
            </div>
          </div>
          </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer