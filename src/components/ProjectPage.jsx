import React from 'react'
import Header from './Header'
import Contact from './Contact'

function ProjectPage() {
  return (
    <div id='project-page'>
      <Header />
      <div className='project-page--projects'>
        <div className="project">
          <img src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
          <div className="project--text">
            <section>
              <h1>Heading</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis ad sit ea consequuntur alias explicabo quia tenetur porro voluptatum. Asperiores quasi a modi numquam consequuntur. Amet officiis nisi illum voluptas qui eaque veritatis laborum dignissimos minima at? Corporis, eius a?</p>
            </section>
          </div>
        </div>
        <div className="project">
          <img src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
          <div className="project--text">
            <section>
                <h1>Heading</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis ad sit ea consequuntur alias explicabo quia tenetur porro voluptatum. Asperiores quasi a modi numquam consequuntur. Amet officiis nisi illum voluptas qui eaque veritatis laborum dignissimos minima at? Corporis, eius a?</p>
              </section>
          </div>
        </div>
        <div className="project">
          <img src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
          <div className="project--text">
            <section>
                <h1>Heading</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis ad sit ea consequuntur alias explicabo quia tenetur porro voluptatum. Asperiores quasi a modi numquam consequuntur. Amet officiis nisi illum voluptas qui eaque veritatis laborum dignissimos minima at? Corporis, eius a?</p>
              </section>
          </div>
        </div>
        <div className="project">
          <img src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
          <div className="project--text">
            <section>
                <h1>Heading</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis ad sit ea consequuntur alias explicabo quia tenetur porro voluptatum. Asperiores quasi a modi numquam consequuntur. Amet officiis nisi illum voluptas qui eaque veritatis laborum dignissimos minima at? Corporis, eius a?</p>
              </section>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  )
}

export default ProjectPage
