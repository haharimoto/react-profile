import React from 'react'
import { useState, useEffect } from 'react'
// import macbook from '../../public/macbookFrame.png'
// import iphone from '../../public/iphone14Max.png'
import imageApp from '../../public/carousel/images/imageApp.png'
import memeGenerator from '../../public/carousel/images/memeGenerator.png'
import photoRonin from '../../public/carousel/images/photoRonin.png'



function Project() {
  const [activeIndex, setActiveIndex] = useState(0)
  const slides = [
    {image: imageApp, name: 'UnSplash Image App'},
    {image: memeGenerator, name: 'Meme Generator'},
    {image: photoRonin, name: 'Photo Ronin'}
  ]

  useEffect(() => {
    // setActiveIndex(Math.floor(Math.random() * 3))
    const interval = setInterval(() => {
      setActiveIndex(prevState => {
        return (prevState + 1) % slides.length
      })
    }, 5000);

    return () => clearInterval(interval)
  }, [])


  return (
    <div id='project'>
      <div className="slideshow">
        {slides.map((slide, index) => (
          <div className={`slideshow--slide ${index === activeIndex ? 'active' : ''}`} key={index}>
            <img src={slide.image} alt="" />
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
