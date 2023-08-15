import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Globe from 'react-globe.gl'
import countries from '../../public/custom.geo.json'
import cities from '../../public/techHubs.json'
import earthImg from '../../public/earth.png'


function GlobeComponent() {
  const [arcsData, setArcsData] = useState([])
  const globeEl = useRef()
  const location = useLocation()

  useEffect(() => {
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = location.pathname === '/' ? 0.8 : 1;
    globeEl.current.controls().enableZoom = false;
    globeEl.current.pointOfView({
      lat: location.pathname === '/' ? 30 : 23.5,
      lng: 155,
      altitude: location.pathname === '/' ? 1.9 : 1.95
    })
  }, [globeEl.current, location.pathname])

  function onGlobeReady() {
    //* arcsData
    let N

    if (location.pathname === '/') {
      N = 7
    } else {
      N = 5
    }

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
    <div>
      <Globe
        ref={globeEl}
        globeImageUrl={earthImg}
        backgroundColor='rgba(0,0,0,0)'
        width={location.pathname === '/' ? 1100 : 400}
        height={location.pathname === '/' ? 1100 : 400}
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
  )
}

export default GlobeComponent


// GeoJSON
// https://geojson-maps.ash.ms/
// does not provide Antarctica but is light-weight and fast loading
// use website down below for all the continents, but beware bc the file size is too big and cause lengthy loading of the globe
// http://geojson.xyz/


// The useRef hook is used to reference a value that’s not needed for rendering. In this case, it’s used to reference the Globe component so that it can be manipulated using the controls() method of the globeEl.current object. The controls() method is used to access the controls of the globe and set the autoRotate and autoRotateSpeed properties to true and 1 respectively. This makes the globe rotate automatically1. (BING AI)
