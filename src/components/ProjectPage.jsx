import React from 'react'
import { useEffect } from 'react'
import Header from './Header'
import GlobeComponent from './GlobeComponent'
import Contact from './Contact'
import unsplash from '../../public/projectPage/unsplash.jpg'
import photoRonin from '../../public/projectPage/photoRonin.jpg'
import chromeDino from '../../public/projectPage/chromeDino.jpg'
import memeGenerator from '../../public/projectPage/trollFace.png'


function ProjectPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
                <GlobeComponent />
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
