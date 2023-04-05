import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


function Header() {
  return (
    <div>
      <header>
        <a href="https://github.com/">
          <FontAwesomeIcon icon={faGithub} style={{height: "32px", width: "32px", color: "white"}} />
        </a>
      </header>
    </div>
  )
}

export default Header
