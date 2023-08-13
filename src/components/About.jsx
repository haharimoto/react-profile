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
    const N = 7
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
          <div className="about--container--intro--text">
            <h1>Hi, I'm Harry Harimoto</h1>
            <p>
              As a Frontend Developer💻 I specialize in developing web applications with a focus on optimal performance and responsive design. And, when I'm not immersed in code, you'll find me exploring and appreciating the vibrant city of Tokyo, capturing the cityscape and people through my lens.
            </p>
            <p>
              With the unique fortune of having experienced living in Japan, China, and the US, I've garnered a broad perspective and a global mindset from a young age. This multicultural background has empowered me to approach things differently, fostering my ability to think outside the box. <br />
              And, Indeed, if the Earth is our 'box', my experiences have instilled in me a profound appreciation for the boundless beauty of the universe🌌
            </p>
            <ul>
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Ruby</li>
              <li>React</li>
              <li>Ruby on Rails</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>Figma</li>
              <li>Photoshop</li>
              <li>Lightroom</li>
              <li>DaVinci Resolve</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
