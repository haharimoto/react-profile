import React from 'react'
import Globe from 'react-globe.gl'
import countries from '../../public/geo.json'
import cities from '../../public/techHubs.json'
import earthImg from '../../public/earth.jpeg'
import { useState, useEffect, useRef } from 'react'


function About() {
  const [arcsData, setArcsData] = useState([])
  const globeEl = useRef()

  useEffect(() => {
    // Auto-rotate
    // console.log(globeEl.current);
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 1;
    globeEl.current.controls().enableZoom = false;
    globeEl.current.pointOfView({
      lat: 23.5,
      lng: 0,
      altitude: 2
    })
  }, [globeEl.current])

  function onGlobeReady() {
    // arcsData
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
          ["pink", "white", "skyblue", "purple"][Math.round(Math.random() * 3)],
          ["pink", "white", "skyblue", "purple"][Math.round(Math.random() * 3)]
        ]
      }
    })
    setArcsData(newArcsData)
  }


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
            // hexPolygonAltitude={altitude}
            arcsData={arcsData}
            arcColor={"color"}
            arcDashLength={() => Math.random() + 3}
            arcDashGap={() => Math.random() + 1}
            arcDashAnimateTime={() => 1500}
            arcAltitudeAutoScale={0.4}
            onGlobeReady={onGlobeReady}
          />

        </div>
      </div>
    </div>
  )
}

export default About

// GeoJSON
// https://geojson-maps.ash.ms/

// The useRef hook is used to reference a value that’s not needed for rendering. In this case, it’s used to reference the Globe component so that it can be manipulated using the controls() method of the globeEl.current object. The controls() method is used to access the controls of the globe and set the autoRotate and autoRotateSpeed properties to true and 1 respectively. This makes the globe rotate automatically1. (BING AI)


// import React, { useState, useEffect, useRef } from 'react';
// import Globe from 'react-globe.gl';
// import continents from '../../public/custom.geo.json';
// import earthImg from '../../public/earth.jpeg';

// function About() {
//   const [polygons, setPolygons] = useState(continents.features);
//   const globeEl = useRef();

//   useEffect(() => {
//     globeEl.current.controls().autoRotate = true;
//     globeEl.current.controls().autoRotateSpeed = 1;
//     globeEl.current.controls().enableZoom = false;
//     globeEl.current.pointOfView({
//       lat: 23.5,
//       lng: 0,
//       altitude: 2.5,
//     });
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const newPolygons = polygons.map(polygon => ({
//         ...polygon,
//         properties: {
//           ...polygon.properties,
//           altitude: Math.random() * 0.5 + 0.5
//         }
//       }));
//       setPolygons(newPolygons);
//     }, 100);
//     return () => clearInterval(interval);
//   }, [polygons]);

//   const handleGlobeClick = () => {
//     setPolygons([...polygons]);
//   }

//   return (
//     <div id='about'>
//       <div className="hero">
//         <div className="hero--text">
//           <h1>From Concept to Creation</h1>
//           <h4>Bridging the Gap Between Imagination and Reality</h4>
//           <div className="hero--description">
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br></br>Voluptates reprehenderit totam delectus neque error ex numquam, sint dolorum! Aperiam, ipsum?
//           </div>
//         </div>

//         <div className="hero--globe" onClick={handleGlobeClick}>
//           <Globe
//             ref={globeEl}
//             globeImageUrl={earthImg}
//             backgroundColor='rgba(0,0,0,0)'
//             width={1150}
//             height={1150}
//             hexPolygonsData={polygons} // Here is the change
//             hexPolygonMargin={0.7}
//             hexPolygonColor={() => 'rgba(255, 255, 255, 1)'}
//             hexPolygonAltitude={d => d.properties.altitude || 0.02}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;
