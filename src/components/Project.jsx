import React from 'react'
import { useState, useEffect } from 'react'
import combinedFrame from '../../public/slideshow/frames/combinedFrame.png'
import imageApp from '../../public/slideshow/images/imageApp.png'
import memeGenerator from '../../public/slideshow/images/memeGenerator.png'
import photoRonin from '../../public/slideshow/images/photoRonin.png'
import smartphoneImageApp from '../../public/slideshow/images/smartphoneImageApp.png'
import smartphoneMemeGenerator from '../../public/slideshow/images/smartphoneMemeGenerator.png'
import smartphonePhotoRonin from '../../public/slideshow/images/smartphonePhotoRonin.png'



function Project() {
  const [activeIndex, setActiveIndex] = useState(0)
  const slides = [
    {image: imageApp, smallImage: smartphoneImageApp, name: 'UnSplash Image App'},
    {image: memeGenerator, smallImage: smartphoneMemeGenerator, name: 'Meme Generator'},
    {image: photoRonin, smallImage: smartphonePhotoRonin, name: 'Photo Ronin'}
  ]

  // useEffect(() => {
  //   // setActiveIndex(Math.floor(Math.random() * 3))
  //   const interval = setInterval(() => {
  //     setActiveIndex(prevState => {
  //       return (prevState + 1) % slides.length
  //     })
  //   }, 5000);

  //   return () => clearInterval(interval)
  // }, [slides])


  return (
    <div id='project'>
      <div className="slideshow">
        <img src={combinedFrame} alt="" className='slideshow--frame'/>

        {slides.map((slide, index) => (
          <div className={`slideshow--slide ${index === activeIndex ? 'active' : ''}`} key={index}>
            <img src={slide.image} alt="" className='slideshow--slide--regular'/>
            <img src={slide.smallImage} alt="" className='slideshow--slide--smartphone'/>
          </div>
        ))}
      </div>

      <div className="buttons">
        {slides.map((slide, index) => (
          <button key={index} onClick={() => setActiveIndex(index)}>{slide.name}</button>
        ))}
      </div>
    </div>
  )
}

export default Project

// not recommended to use index for the key property bc the order of the index change if the structure inside of the slides array changes
