import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


function Header() {
  return (
    <div>
      <header>
        <a href="https://github.com/">
          <FontAwesomeIcon icon={faGithub} style={{fontSize: "1.8em"}} />
        </a>
      </header>
    </div>
  )
}

export default Header
