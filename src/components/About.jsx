import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Globe from 'react-globe.gl'
import countries from '../../public/custom.geo.json'
import cities from '../../public/techHubs.json'
import earthImg from '../../public/earth.png'


function About() {
  const [arcsData, setArcsData] = useState([])
  const globeEl = useRef()

  useEffect(() => {
    // Auto-rotate
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.8;
    globeEl.current.controls().enableZoom = false;
    globeEl.current.pointOfView({
      // lat: 23.5,
      lat: 30,
      lng: 155,
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

  return (
    <div id='about'>
      <div className="about--container">
        <div className="about--container--globe">
          <Globe
            ref={globeEl}
            globeImageUrl={earthImg}
            backgroundColor='rgba(0,0,0,0)'
            width={1100}
            height={1100}
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
        <div className="about--container--intro">
          <div className="about--container--intro--container">
            <h1>Hi, I'm Harry Harimoto</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem tempora dolores repellat corrupti quas at minus voluptas, porro reiciendis cum, optio dignissimos. Accusamus, beatae consequatur voluptas unde aliquam quod esse cum, incidunt neque assumenda blanditiis et dolorum nihil autem corrupti totam minima amet! Enim incidunt non minus. Quo, commodi quidem!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
