import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Rating } from '@mui/material';
import { data } from './Carouseldata';
import  './omdb.css/Carousel.css';


const Carousel=()=> {
    const settings = {
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
    };
  
    return (
      <div className='sliders'>
        <Slider {...settings} >
        {
          data.map((obj)=>{
            let{name, year, description,type,quality,image}=obj
            return(
            
          <div className='carouse'>
          <div  className='carouselinner'> 
          <div className='carouselimg'>
          <img src={image} className='carimages' alt="" />
          </div>
          <div className='caruselcontent'>
          <div className='caroselchip'>
              <p className='chip3'>{quality}</p>
              <p className='chip3'>{type}</p>
              <p className='chip3'>{year}</p>
          </div>
          <h1 className='moviename'>{name}</h1>
          <Rating   defaultValue={4} size='large' 
            sx={{
              '& .MuiRating-iconFilled': { color: 'rgb(250,175,0)' }, 
              '& .MuiRating-iconEmpty': { color: 'rgb(250,175,0)' },  
          }} />
          <p  className='description'>{description}</p>
          </div>
          </div>
          </div>


)})
}
    

        
     

        </Slider>
      </div>
    );
  }
  
  export default Carousel;
  