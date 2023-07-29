import React from 'react'
import Header from './Header'


function Hero() {
  function scrollToProject(e) {
    e.preventDefault()
    const aboutSection = document.getElementById('about')
    aboutSection.scrollIntoView({ behavior: 'smooth' })
  }


  return (
    <div id='hero'>
      <Header />
      <div className="hero--container">
        <div className="hero--container--text">
          <h1>from Concept <br /> to <span>Creation</span></h1>
          <p>
            frontend developer & content creator <br />
            bridging the gap between imagination and reality
          </p>
        </div>
        <a href='' className="hero--container--arrow" onClick={(e) => scrollToProject(e)}></a>
      </div>
    </div>
  )
}

export default Hero


// GeoJSON
// https://geojson-maps.ash.ms/
// does not provide Antarctica but is light-weight and fast loading
// use website down below for all the continents, but beware bc the file size is too big and cause lengthy loading of the globe
// http://geojson.xyz/


// The useRef hook is used to reference a value that’s not needed for rendering. In this case, it’s used to reference the Globe component so that it can be manipulated using the controls() method of the globeEl.current object. The controls() method is used to access the controls of the globe and set the autoRotate and autoRotateSpeed properties to true and 1 respectively. This makes the globe rotate automatically1. (BING AI)
