import React from 'react'
import Header from './Header'
import Contact from './Contact'
import unsplashImg from '../../public/projectPage/unsplash.jpg'

function ProjectPage() {
  return (
    <div id='project-page'>
      <Header />
      <div className='project-page--projects'>

        <div className="project">
          <div className="project--image">
            <div className="image-overlay"></div>
            <a href="https://zesty-wisp-923d7f.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img src={unsplashImg} alt="" />
              <div className="hover-text">Visit Website</div>
            </a>
          </div>
          <div className="project--text">
            <div>
              <h1>Unsplash App</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis ad sit ea consequuntur alias explicabo quia tenetur porro voluptatum. Asperiores quasi a modi numquam consequuntur. Amet officiis nisi illum voluptas qui eaque veritatis laborum dignissimos minima at? Corporis, eius a?</p>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="project--image">
            <div className="image-overlay"></div>
            <a href="" target="_blank" rel="noopener noreferrer">
              <img src={unsplashImg} alt="" />
              <div className="hover-text">Visit Website</div>
            </a>
          </div>
          <div className="project--text">
            <div>
              <h1>Photo Ronin</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis ad sit ea consequuntur alias explicabo quia tenetur porro voluptatum. Asperiores quasi a modi numquam consequuntur. Amet officiis nisi illum voluptas qui eaque veritatis laborum dignissimos minima at? Corporis, eius a?</p>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="project--image">
            <div className="image-overlay"></div>
            <a href="" target="_blank" rel="noopener noreferrer">
              <img src={unsplashImg} alt="" />
              <div className="hover-text">Visit Website</div>
            </a>
          </div>
          <div className="project--text">
            <div>
              <h1>Interactive Globe</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis ad sit ea consequuntur alias explicabo quia tenetur porro voluptatum. Asperiores quasi a modi numquam consequuntur. Amet officiis nisi illum voluptas qui eaque veritatis laborum dignissimos minima at? Corporis, eius a?</p>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="project--image">
            <div className="image-overlay"></div>
            <a href="" target="_blank" rel="noopener noreferrer">
              <img src={unsplashImg} alt="" />
              <div className="hover-text">Visit Website</div>
            </a>
          </div>
          <div className="project--text">
            <div>
              <h1>Meme Generator</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis ad sit ea consequuntur alias explicabo quia tenetur porro voluptatum. Asperiores quasi a modi numquam consequuntur. Amet officiis nisi illum voluptas qui eaque veritatis laborum dignissimos minima at? Corporis, eius a?</p>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="project--image">
            <div className="image-overlay"></div>
            <a href="" target="_blank" rel="noopener noreferrer">
              <img src={unsplashImg} alt="" />
              <div className="hover-text">Visit Website</div>
            </a>
          </div>
          <div className="project--text">
            <div>
              <h1>Chrome Dino</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis ad sit ea consequuntur alias explicabo quia tenetur porro voluptatum. Asperiores quasi a modi numquam consequuntur. Amet officiis nisi illum voluptas qui eaque veritatis laborum dignissimos minima at? Corporis, eius a?</p>
            </div>
          </div>
        </div>

      </div>
      <Contact />
    </div>
  )
}

export default ProjectPage
