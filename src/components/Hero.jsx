import React from 'react'


function Hero() {
  function handleClick(e) {
    e.preventDefault()
    const aboutSection = document.getElementById('about')
    aboutSection.scrollIntoView({ behavior: 'smooth' })
  }


  return (
    <div id='hero'>
      <div className="hero--container">
        <div className="hero--container--text">
          <h1>from Concept <br /> to <span>Creation</span></h1>
          <p>
            frontend developer & content creator <br />
            bridging the gap between imagination and reality
          </p>
        </div>
        <a href='' className="hero--container--arrow" onClick={(e) => handleClick(e)}></a>
      </div>
    </div>
  )
}

export default Hero
