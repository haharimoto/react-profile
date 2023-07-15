import React from 'react'
import { useState, useEffect } from 'react'
// import macbook from '../../public/macbookFrame.png'
// import iphone from '../../public/iphone14Max.png'
// import imageApp from '../../public/carousel/images/imageApp.png'



function Project() {
  const [activeIndex, setActiveIndex] = useState(0)
  const slides = [
    {image: '../../public/carousel/images/imageApp.png', name: 'imageApp'},
    {image: '../../public/carousel/images/memeGenerator.png', name: 'memeGenerator'},
    {image: '../../public/carousel/images/photoRonin.png', name: 'photoRonin'}
  ]

  useEffect(() => {
    setActiveIndex(Math.floor(Math.random() * 3))
  }, [])

  function selectSlide(index) {
    setActiveSlide(index)
  }


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
        <button onClick={selectSlide}>Image App</button>
        <button onClick={selectSlide}>Photo Ronin</button>
        <button onClick={selectSlide}>Meme Generator</button>
        <button onClick={selectSlide}>See More</button>
      </div>
    </div>
  )
}

export default Project

{/* <img src={imageApp} alt="" /> */}
