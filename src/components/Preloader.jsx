import React from 'react'

function Preloader() {
  const lottiePath = '/lottie.json'


  return (
    <div id="preloader">
      <lottie-player
        src={lottiePath}
        background="transparent"
        speed="1"
        style={{ width: '20.625rem', height: '20.625rem' }}
        loop
        autoplay
      ></lottie-player>
    </div>
  )
}

export default Preloader
