import React from 'react'
import { useState, useEffect } from 'react'
import combinedFrame from '../../public/slideshow/frames/combinedFrame.png'
import imageApp from '../../public/slideshow/images/imageApp.png'
import memeGenerator from '../../public/slideshow/images/memeGenerator.png'
import photoRonin from '../../public/slideshow/images/photoRonin.png'
import smartphoneImageApp from '../../public/slideshow/images/smartphoneImageApp.png'
import smartphoneMemeGenerator from '../../public/slideshow/images/smartphoneMemeGenerator.png'
import smartphonePhotoRonin from '../../public/slideshow/images/smartphonePhotoRonin.png'
// import linkIcon from '../../public/slideshow/external-link.png'


function Project() {
  const [activeIndex, setActiveIndex] = useState(0)
  const slides = [
    {image: imageApp, smallImage: smartphoneImageApp, name: 'UnSplash Image App', url: 'http://example1.com', description: 'Unsplash description'},
    {image: photoRonin, smallImage: smartphonePhotoRonin, name: 'Photo Ronin', url: 'http://example2.com', description: 'Photo Ronin description'},
    {image: memeGenerator, smallImage: smartphoneMemeGenerator, name: 'Meme Generator', url: 'http://example3.com', description: 'Meme Generator description'}
  ]

  useEffect(() => {
    // setActiveIndex(Math.floor(Math.random() * 3))
    const interval = setInterval(() => {
      setActiveIndex(prevState => {
        return (prevState + 1) % slides.length
      })
    }, 5000);

    return () => clearInterval(interval)
  }, [slides])


  return (
    <div id='project'>
      <div className="slideshow">
        <img className='slideshow--frame' src={combinedFrame} alt="" />

        {slides.map((slide, index) => (
          <div className={`slideshow--slide ${index === activeIndex ? 'active' : ''}`} key={index}>
            <img src={slide.image} alt="" className='slideshow--slide--regular'/>
            <img src={slide.smallImage} alt="" className='slideshow--slide--smartphone'/>
          </div>
        ))}
      </div>

      <div className="buttons">
        {slides.map((slide, index) => (
          <button key={index} onClick={() => setActiveIndex(index)} className={`${index === activeIndex ? 'active' : ''}`}>
            {slide.name}
          </button>
        ))}
        <button>See More</button>
      </div>
    </div>
  )
}

export default Project

// not recommended to use index for the key property bc the order of the index change if the structure inside of the slides array changes
