import React from 'react'
import { useState, useRef } from 'react'
import { animated, useSpring } from 'react-spring';
import upIcon from '../../public/grid/up.png'
import downIcon from '../../public/grid/down.png'
import sakura from '../../public/grid/sakura.jpg'
import nightSakura from '../../public/grid/nightSakura.jpg'
import doggoCar from '../../public/grid/doggos.jpg'
import taxi from '../../public/grid/taxi.jpg'
import akihabaraClabo from '../../public/grid/akihabaraClabo.jpg'
import akihabaraKaikatsu from '../../public/grid/akihabaraKaikatsu.jpg'
import akihabaraDrug from '../../public/grid/akihabaraDrug.jpg'
import akihabaraPawn from '../../public/grid/akihabaraPawn.jpg'
import shinjukuWarm from '../../public/grid/shinjukuWarm.jpg'
import shinjukuCool from '../../public/grid/shinjukuCool.jpg'
import allCandles from '../../public/grid/allCandles.jpg'
import candleHand from '../../public/grid/candleHand.jpg'
import useOnScreen from './useOnScreen';


function Content() {
  const [isShowMore, setIsShowMore] = useState(false)
  // const contentRef = useRef()
  // const isVisible = useOnScreen(contentRef)

  // React-Spring
  const animation = useSpring({
    // maxHeight: isShowMore ? '1440px' : '480px',
    // after adding gap =>
    maxHeight: isShowMore ? '1570px' : '530px',
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
        <div className="grid-container--landscape first">
          <img className="original" src={sakura} alt="" loading='lazy' />
          <img className="hover" src={nightSakura} alt="" loading='lazy' />
        </div>
        <div className="grid-container--landscape second">
          <img className="original" src={doggoCar} alt="" loading='lazy' />
          <img className="hover" src={taxi} alt="" loading='lazy' />
        </div>

        {isShowMore && (
          <>
            <div className="grid-container--portrait second"></div>
            <div className="grid-container--portrait third"></div>
            <div className="grid-container--landscape third">
              <img className="original" src={akihabaraClabo} alt="" loading='lazy' />
              <img className="hover" src={akihabaraKaikatsu} alt="" loading='lazy' />
            </div>
            <div className="grid-container--landscape fourth">
              <img className="original" src={akihabaraDrug} alt="" loading='lazy' />
              <img className="hover" src={akihabaraPawn} alt="" loading='lazy' />
            </div>
            <div className="grid-container--landscape fifth">
              <img className="original" src={shinjukuWarm} alt="" loading='lazy' />
              <img className="hover" src={shinjukuCool} alt="" loading='lazy' />
            </div>
            <div className="grid-container--landscape sixth">
              <img className="original" src={allCandles} alt="" loading='lazy' />
              <img className="hover" src={candleHand} alt="" loading='lazy' />
            </div>
            <div className="grid-container--square third"></div>
            <div className="grid-container--square fourth"></div>
            <div className="grid-container--square fifth"></div>
            <div className="grid-container--square sixth"></div>
          </>
         )
        }
      </animated.div>
      <button onClick={() => {setIsShowMore(!isShowMore)}}>
        {isShowMore ? <img className='button--up' src={upIcon} alt="" /> : <img className='button--down' src={downIcon} alt="" />}
      </button>
    </div>
  )
}

export default Content


// Instead of using CSS for the grid expansion and collapse, use React Spring, a physics-based animation library. This library provides a more intuitive way to handle complex transitions.

// By using react-spring, you're allowing the library to handle the physics-based animation. This approach should provide a smoother transition for both expansion and collapse. Remember, this still doesn't "transition" the grid-template-rows property, but it does achieve a similar effect by transitioning the maxHeight of the container with a smooth animation.
