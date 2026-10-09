import React from 'react'
import { useRef } from 'react'
import useOnScreen from './useOnScreen'
import GlobeComponent from './GlobeComponent'
import ErrorBoundary from './ErrorBoundary'
const MemoizedGlobeComponent = React.memo(GlobeComponent)


function About() {
  const textRef = useRef()
  const isVisible = useOnScreen(textRef)


  return (
    <div id='about'>
      <div className="about--container">
        <div className="about--container--globe">
          <ErrorBoundary fallback="Error">
            <MemoizedGlobeComponent />
          </ErrorBoundary>
        </div>
        <div className="about--container--intro">
          <div className={`about--container--intro--text ${isVisible ? '' : 'invisible'}`} ref={textRef}>
            <h1>Hi, I'm Harry Harimoto</h1>
            <p>
              As a <b><em>Full-Stack Developer</em></b>💻 I specialize in building web applications end-to-end, from responsive React/Next.js interfaces to Node.js APIs and databases like Firebase and PostgreSQL. And, when I'm not immersed in code, you'll find me exploring and appreciating new places, capturing the cityscapes and people through my lens.
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
              <li>Next.js</li>
              <li>Node.js</li>
              <li>Ruby on Rails</li>
              <li>Firebase</li>
              <li>PostgreSQL</li>
              <li>Stripe</li>
              <li>Nginx</li>
              <li>AWS (EC2)</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

// React.memo is a higher order component that memoizes the rendered output of the wrapped component, preventing unnecessary renders if the props haven't changed.
