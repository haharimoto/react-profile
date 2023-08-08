import React from 'react'
import { useState } from 'react'

function Content() {
  const [isShowMore, setIsShowMore] = useState(false)

  const gridStyles = isShowMore ? {
    gridTemplateRows: 'repeat(12, 120px)'
  } : {}

  return (
    <div id='content'>
      <div className="grid-container" style={gridStyles}>

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
      </div>
      <button onClick={() => {setIsShowMore(!isShowMore)}}>button</button>
    </div>
  )
}

export default Content
