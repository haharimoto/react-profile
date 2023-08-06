import React from 'react'
import moonIcon from '../../public/moonIcon.png'

function Contact() {
  function scrollToSections(e, id) {
    e.preventDefault()
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }


  return (
    <div id='contact'>
       <footer>
        <div className="footer--container">

          <div className="footer--container--first">
            <img className='footer--icon' src={moonIcon} alt="" />
            <h2>
              from Concept <br />
              to <span>Creation</span>
            </h2>
          </div>

          <div className="footer--container--second">
            <div className="footer--container--second--links">
              <a href="">Instagram</a>
              <a href="">GitHub</a>
              <a href="">LinkedIn</a>
              <a href="">Email</a>
            </div>
          </div>
        </div>

        <div className="footer--end">
          <div>© 2023 haharimoto</div>
          <div className="footer--end--links">
            <a href='' onClick={(e) => scrollToSections(e, 'hero')}>Home</a>
            <a href='' onClick={(e) => scrollToSections(e, 'about')}>About</a>
            <a href='' onClick={(e) => scrollToSections(e, 'project')}>Project</a>
            <a href='' onClick={(e) => scrollToSections(e, 'content')}>Content</a>
            <a href='' onClick={(e) => scrollToSections(e, 'contact')}>Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Contact
