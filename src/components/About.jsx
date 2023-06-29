import React from 'react'
import Globe from 'react-globe.gl'
import { useEffect, useRef } from 'react'


function About() {
  const globeEl = useRef()

  useEffect(() => {
    // Auto-rotate
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 1;
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
          width={500}
          height={500}
        />
      </div>
    </div>
  )
}

export default About
