import React from 'react'
import Globe from 'react-globe.gl'
import countries from '../../public/custom.geo.json'
import cities from '../../public/techHubs.json'
import earthImg from '../../public/earth.jpeg'
import { useState, useEffect, useRef } from 'react'


function About() {
  const [arcsData, setArcsData] = useState([])
  const globeEl = useRef()

  useEffect(() => {
    // Auto-rotate
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.8;
    globeEl.current.controls().enableZoom = false;
    globeEl.current.pointOfView({
      lat: 23.5,
      lng: 0,
      altitude: 2
    })
  }, [globeEl.current])

  function onGlobeReady() {
    //* arcsData
    const N = 8
    const newArcsData = [...Array(N).keys()].map(() => {
      // Randomly select two cities
      let randomEl = Math.floor(Math.random() * cities.length)
      let randomEl2
      do {
        randomEl2 = Math.floor(Math.random() * cities.length)
      } while (randomEl === randomEl2)  // ensure endCoords is different from startCoords
      const startCoords = cities[randomEl]
      const endCoords = cities[randomEl2]
      return {
        startLat: startCoords.latitude,
        startLng: startCoords.longitude,
        endLat: endCoords.latitude,
        endLng: endCoords.longitude,
        color: [
          ["pink", "navy", "skyblue", "purple"][Math.round(Math.random() * 3)],
          ["pink", "navy", "skyblue", "purple"][Math.round(Math.random() * 3)]
        ]
      }
    })
    setArcsData(newArcsData)
  }

  function toggleRotation() {
    globeEl.current.controls().autoRotate = !globeEl.current.controls().autoRotate
  }

  function scrollToProject(e) {
    e.preventDefault()
    const projectSection = document.getElementById('project')
    projectSection.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div id='about'>
      <div className="hero">
        <div className="hero--text">
          <h1>From Concept to Creation</h1>
          <p>
            Frontend Developer & Content Creator <br />
            Bridging the Gap Between Imagination and Reality
          </p>
        </div>

        <div className="hero--globe">
          <Globe
            ref={globeEl}
            globeImageUrl={earthImg}
            backgroundColor='rgba(0,0,0,0)'
            width={800}
            height={800}
            hexPolygonsData={countries.features}
            hexPolygonMargin={0.7}
            hexPolygonColor={() => 'rgba(255, 255, 255, 1)'}
            arcsData={arcsData}
            arcColor={"color"}
            arcDashLength={() => Math.random() + 2}
            arcDashGap={() => Math.random() + 1}
            arcDashAnimateTime={() => 1750}
            arcAltitudeAutoScale={0.4}
            pointsData={cities}
            pointLat="latitude"
            pointLng="longitude"
            pointColor={() => 'rgba(255, 255, 255, 1)'}
            pointRadius={0.5}
            pointAltitude={0.01}
            pointLabel={d => `${d.city}`}
            onGlobeReady={onGlobeReady}
            onGlobeRightClick={toggleRotation}
          />
        </div>
        <a href='' className="hero--arrow" onClick={(e) => scrollToProject(e)}></a>
      </div>
    </div>
  )
}

export default About

// GeoJSON
// https://geojson-maps.ash.ms/
// does not provide Antarctica but is light-weight and fast loading
// use website down below for all the continents, but beware bc the file size is too big and cause lengthy loading of the globe
// http://geojson.xyz/


// The useRef hook is used to reference a value that’s not needed for rendering. In this case, it’s used to reference the Globe component so that it can be manipulated using the controls() method of the globeEl.current object. The controls() method is used to access the controls of the globe and set the autoRotate and autoRotateSpeed properties to true and 1 respectively. This makes the globe rotate automatically1. (BING AI)
