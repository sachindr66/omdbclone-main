import React from 'react'
import  './omdb.css/Carousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

const Carousell = () => {
  return (
    <>
      <Carousel className='carss'
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      showDots={true}
      arrows={true}
      >
          <div className='sandaal'>
          <img src="https://static.toiimg.com/photo/99482854.cms" alt="mosque" />
          </div>
          <div className='sandaal'>
          <img src="https://static.toiimg.com/photo/99482854.cms" alt="mosque" />
          </div>
          <div className='sandal'>
          <img src="/images/kgf1.jpg" alt="mosque" width={400}/>
           <div className='legends'>
          <h1>SANDLEWOOD MOVIE POSTERS</h1>
          <p>Sandalwood: The Kannada-language film industry based in Karnataka.</p>
          </div>
          </div>

        </Carousel>
        </>
  )
}

export default Carousell