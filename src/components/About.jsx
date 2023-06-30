import React from 'react'
import Globe from 'react-globe.gl'
import { useEffect, useRef } from 'react'


function About() {
  const globeEl = useRef()

  // The useRef hook is used to reference a value that’s not needed for rendering. In this case, it’s used to reference the Globe component so that it can be manipulated using the controls() method of the globeEl.current object. The controls() method is used to access the controls of the globe and set the autoRotate and autoRotateSpeed properties to true and 1 respectively. This makes the globe rotate automatically1. (BING AI)
  useEffect(() => {
    // Auto-rotate
    // console.log(globeEl.current);
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 1;
    globeEl.current.controls().enableZoom = false;
  }, [])

  return (
    <div id='about'>
      <div className="hero">
        <div className="hero--text">
          <h1>From Concept to Creation</h1>
          <h4>Bridging the Gap Between Imagination and Reality</h4>
          <div className="hero--description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br></br>Voluptates reprehenderit totam delectus neque error ex numquam, sint dolorum! Aperiam, ipsum?
          </div>
        </div>

        <Globe
          ref={globeEl}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          // backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
          backgroundColor="rgba(0,0,0,0)"
          width={600}
          height={600}

        />
      </div>
    </div>
  )
}

export default About
