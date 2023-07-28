import React from 'react'
import Header from './Header'
import Globe from 'react-globe.gl'
import countries from '../../public/custom.geo.json'
import cities from '../../public/techHubs.json'
import earthImg from '../../public/earth.png'
import { useState, useEffect, useRef } from 'react'


function Hero() {
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
      altitude: 1.9
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
          ["pink", "darkslateblue", "skyblue", "azure"][Math.round(Math.random() * 3)],
          ["pink", "darkslateblue", "skyblue", "azure"][Math.round(Math.random() * 3)]
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
    <div id='hero'>
      <Header />
      <div className="hero">
        <div className="hero--text">
          <h1>from Concept <br /> to <span>Creation</span></h1>
          <p>
            frontend developer & content creator <br />
            bridging the gap between imagination and reality
          </p>
        </div>

        <div className="hero--globe">
          <Globe
            ref={globeEl}
            globeImageUrl={earthImg}
            backgroundColor='rgba(0,0,0,0)'
            width={750}
            height={750}
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
            pointColor={(city) => {
              if (city.city === 'Tokyo' || city.city === 'Beijing' || city.city === 'Raleigh') {
                return '#5a5096'
              } else {
                return 'white'
              }
            }}
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

export default Hero


// GeoJSON
// https://geojson-maps.ash.ms/
// does not provide Antarctica but is light-weight and fast loading
// use website down below for all the continents, but beware bc the file size is too big and cause lengthy loading of the globe
// http://geojson.xyz/


// The useRef hook is used to reference a value that’s not needed for rendering. In this case, it’s used to reference the Globe component so that it can be manipulated using the controls() method of the globeEl.current object. The controls() method is used to access the controls of the globe and set the autoRotate and autoRotateSpeed properties to true and 1 respectively. This makes the globe rotate automatically1. (BING AI)
