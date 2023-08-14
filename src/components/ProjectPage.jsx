import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Header from './Header'
import Contact from './Contact'
import unsplash from '../../public/projectPage/unsplash.jpg'
import photoRonin from '../../public/projectPage/photoRonin.jpg'
import chromeDino from '../../public/projectPage/chromeDino.jpg'
// import interactiveGlobe from '../../public/projectPage/interactiveGlobe.jpg'
import memeGenerator from '../../public/projectPage/trollFace.png'
import Globe from 'react-globe.gl'
import countries from '../../public/custom.geo.json'
import cities from '../../public/techHubs.json'
import earthImg from '../../public/earth.png'


function ProjectPage() {
  const [arcsData, setArcsData] = useState([])
  const globeEl = useRef()

  useEffect(() => {
    // Auto-rotate
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 1;
    globeEl.current.controls().enableZoom = false;
    globeEl.current.pointOfView({
      lat: 23.5,
      lng: 155,
      altitude: 1.95
    })
  }, [globeEl.current])

  function onGlobeReady() {
    //* arcsData
    const N = 5
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
    <div id='project-page'>
      <Header />
      <div className='project-page--projects'>

        <div className="project">
          <div className="project--image">
            <div className="image-overlay"></div>
            <a href="https://zesty-wisp-923d7f.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img src={unsplash} alt="" />
              <div className="hover-text">Visit Website</div>
            </a>
          </div>
          <div className="project--text">
            <div>
              <h1>Unsplash App</h1>
              <p>Minimalistically designed image search app powered by Unsplash API.</p>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="project--image">
            <div className="image-overlay"></div>
            <a href="https://photo-ronin.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <img src={photoRonin} alt="" />
              <div className="hover-text">Visit Website</div>
            </a>
          </div>
          <div className="project--text">
            <div>
              <h1>Photo Ronin</h1>
              <p>Mobile-focused app designed for photographers to discover new ideas and locations. Collaboratively designed and developed with three other developers using Ruby on Rails.</p>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="project--image">
            <div className="image-overlay"></div>
            <a onClick={(e) => e.preventDefault()} style={{ cursor: "default" }} target="_blank" rel="noopener noreferrer">
              <img src={chromeDino} alt="" />
              <div className="hover-text">Coming Soon...</div>
            </a>
          </div>
          <div className="project--text">
            <div>
              <h1>Chrome Dino</h1>
              <p>Replica of the hidden game from Chrome offline mode.</p>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="project--image">
            <div className="image-overlay"></div>
            <a onClick={(e) => e.preventDefault()} style={{ cursor: "default" }} target="_blank" rel="noopener noreferrer">
              <div className="globe">
                <Globe
                  ref={globeEl}
                  globeImageUrl={earthImg}
                  backgroundColor='rgba(0,0,0,0)'
                  width={400}
                  height={400}
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
              <div className="hover-text">Coming Soon...</div>
            </a>
          </div>
          <div className="project--text">
            <div>
              <h1>Interactive Globe</h1>
              <p>
                Interactive Globe with react-globe.gl: <br />
                A React component crafted for data visualization on a 3D globe using a spherical projection, harnessing the power of ThreeJS/WebGL for enhanced 3D rendering. This project uniquely highlights cities I have lived, while also connecting major global tech hubs.
              </p>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="project--image">
            <div className="image-overlay"></div>
            <a href="https://bespoke-salamander-2319ba.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img src={memeGenerator} alt="" />
              <div className="hover-text">Visit Website</div>
            </a>
          </div>
          <div className="project--text">
            <div>
              <h1>Meme Generator</h1>
              <p>Simple meme generator app that sources random images using Imgflip API (credit to Scrimba).</p>
            </div>
          </div>
        </div>

      </div>
      <Contact />
    </div>
  )
}

export default ProjectPage
