import React from 'react'
import { useState } from 'react'
// import macbook from '../../public/macbookFrame.png'
// import iphone from '../../public/iphone14Max.png'
import imageApp from '../../public/carousel/images/imageApp.png'



function Project() {
  const slides = [
    {image: '../../public/carousel/images/imageApp.png', name: 'imageApp'},
    {image: '../../public/carousel/images/memeGenerator.png', name: 'memeGenerator'},
    {image: '../../public/carousel/images/photoRonin.png', name: 'photoRonin'}
  ]

  return (
    <div id='project'>
      <div className="project-container">
        <img src={imageApp} alt="" />

        {/* {slides.map((slide, index) => (
          <li key={index}>
            <img src={slide} alt="" />
          </li>
        ))} */}
      </div>
    </div>
  )
}

export default Project


{/* <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8" alt="" /> */}
