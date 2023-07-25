import React from 'react'

function Content() {
  return (
    <div id='content'>
      <div className="grid-container">
        <div className="grid-container--portrait"></div>
        <div className="grid-container--square first"></div>
        <div className="grid-container--landscape first"></div>
        <div className="grid-container--landscape second"></div>
        <div className="grid-container--square second"></div>
      </div>
    </div>
  )
}

export default Content
