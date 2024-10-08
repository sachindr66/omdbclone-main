import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Rating } from "@mui/material";
import { data } from "./Carouseldata";
import "./omdb.css/Carousel.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1600,

    customPaging: i => (
      <div className="custom-dot"><img src='sss' alt="" /></div>
    ),
    // appendDots: dots => (
    //   <div>
    //     <ul style={{ margin: '0px' }}>{dots}</ul>
    //   </div>
    // ),

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 730,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="sliders">
      <div>
        <Slider {...settings}>
          {data.map((obj,index) => {
            let { name, year, description, type, quality, image } = obj;
            return (
              <div key={index} className="carosel-card">
                <div className="movie-card">
                  <div className="movie-card1">
                    <div className="movie-image">
                      <img src={image} alt="" className="movie-poster" />
                    </div>
                    <div className="movie-info">
                      <div className="movie-info1">
                        <div className="caroselchip">
                          <p className="chip3">{quality}</p>
                          <p className="chip3">{type}</p>
                          <p className="chip3">{year}</p>
                        </div>
                        <Rating name="size-small" style={{color:"aqua" }}  defaultValue={5} size="small"/>
                        <h3>{name}</h3>
                        <p>{description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
