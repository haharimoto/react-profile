import React from 'react'
import { useState } from 'react'
import { animated, useSpring } from 'react-spring';

function Content() {
  const [isShowMore, setIsShowMore] = useState(false)

  // React-Spring
  const animation = useSpring({
    // maxHeight: isShowMore ? '1440px' : '480px',
    // after adding gap =>
    maxHeight: isShowMore ? '1580px' : '540px',
    config: { tension: 120, friction: 14 }
  });

  return (
    <div id='content'>
      <animated.div className="grid-container" style={animation}>

        <div className="grid-container--portrait first">
          <div className='grid-container--portrait first--text'>
            Me in 2020<br />When I Started Photography
          </div>
        </div>
        <div className="grid-container--square first"></div>
        <div className="grid-container--square second"></div>
        <div className="grid-container--landscape first"></div>
        <div className="grid-container--landscape second"></div>

        {isShowMore && (
          <>
            <div className="grid-container--portrait second">
              <div className="grid-container--portrait second--text">
                Second Portrait
              </div>
            </div>
            <div className="grid-container--portrait third">
              <div className="grid-container--portrait third--text">
                Third Portrait
              </div>
            </div>
            <div className="grid-container--landscape third"></div>
            <div className="grid-container--landscape fourth"></div>
            <div className="grid-container--landscape fifth"></div>
            <div className="grid-container--landscape sixth"></div>
            <div className="grid-container--square third"></div>
            <div className="grid-container--square fourth"></div>
            <div className="grid-container--square fifth"></div>
            <div className="grid-container--square sixth"></div>


          </>
         )
        }
      </animated.div>
      <button onClick={() => {setIsShowMore(!isShowMore)}}>button</button>
    </div>
  )
}

export default Content


// Instead of using CSS for the grid expansion and collapse, use React Spring, a physics-based animation library. This library provides a more intuitive way to handle complex transitions.

// By using react-spring, you're allowing the library to handle the physics-based animation. This approach should provide a smoother transition for both expansion and collapse. Remember, this still doesn't "transition" the grid-template-rows property, but it does achieve a similar effect by transitioning the maxHeight of the container with a smooth animation.
