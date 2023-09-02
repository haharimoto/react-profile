import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import combinedFrame from '../../public/slideshow/frames/combinedFrame.png'
import imageApp from '../../public/slideshow/images/imageApp.png'
import memeGenerator from '../../public/slideshow/images/memeGenerator.png'
import photoRonin from '../../public/slideshow/images/photoRonin.png'
import smartphoneImageApp from '../../public/slideshow/images/smartphoneImageApp.png'
import smartphoneMemeGenerator from '../../public/slideshow/images/smartphoneMemeGenerator.png'
import smartphonePhotoRonin from '../../public/slideshow/images/smartphonePhotoRonin.png'
import useOnScreen from './useOnScreen'


function Project() {
  const [activeIndex, setActiveIndex] = useState(0)
  const slides = [
    {image: imageApp, smallImage: smartphoneImageApp, name: 'UnSplash App'},
    {image: photoRonin, smallImage: smartphonePhotoRonin, name: 'Photo Ronin'},
    {image: memeGenerator, smallImage: smartphoneMemeGenerator, name: 'Meme Generator'}
  ]
  const slideShowRef = useRef()
  const isSlideShow = useOnScreen(slideShowRef)
  const carouselRef = useRef(null)
  const isCarousel = useOnScreen(carouselRef)
  const navigate = useNavigate()
  const buttonsRef = useRef()
  const isButtons = useOnScreen(buttonsRef)

  // centering the 'middle' image horizontally
  useEffect(() => {
    function scrollToCenter() {
      const carousel = carouselRef.current;
      if (!carousel) return;

      let imagesLoaded = 0;

      carousel.querySelectorAll('img').forEach((img) => {
        img.onload = () => {
          imagesLoaded++;
          if (imagesLoaded === slides.length) {
            let centerIndex;
            if (slides.length % 2 === 0) { // even
              centerIndex = slides.length / 2 - 1;
            } else { // odd
              centerIndex = (slides.length - 1) / 2;
            }

            const imageMargin = 20;  // 10px on each side, margin-inline of carousel img
            const imageWidth = img.offsetWidth + imageMargin;  // image width including margin
            const scrollPosition = centerIndex * imageWidth;

            carousel.scrollLeft = scrollPosition - carousel.offsetWidth / 2 + imageWidth / 2;
          }
        };
      });
    }

    scrollToCenter();

    window.addEventListener('resize', scrollToCenter);
    return () => window.removeEventListener('resize', scrollToCenter);
  }, []);


  // for removing hover effects of See More button on mobile devices
  useEffect(() => {
    function handleTouchStart() {
      document.body.classList.add("touch-device")
    }

    window.addEventListener("touchstart", handleTouchStart)

    return () => window.removeEventListener("touchstart", handleTouchStart)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevState => {
        return (prevState + 1) % slides.length
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [slides])


  return (
    <div id='project'>
      <div className={`slideshow ${isSlideShow ? '' : 'invisible'}`} ref={slideShowRef}>
        <img className='slideshow--frame' src={combinedFrame} alt="" />
        {slides.map((slide, index) => (
          <div className={`slideshow--slide ${index === activeIndex ? 'active' : ''}`} key={index}>
            <img src={slide.image} alt="" loading='lazy' className='slideshow--slide--regular' />
            <img src={slide.smallImage} alt="" loading='lazy' className='slideshow--slide--smartphone' />
          </div>
        ))}
      </div>

      <div className={`carousel ${isCarousel ? '' : 'invisible'}`} ref={carouselRef}>
          {slides.map((slide, index) => (
            <img key={index} src={slide.smallImage} alt="" loading='lazy'/>
          ))}
      </div>

      <div className={`buttons ${isButtons ? '' : 'invisible'}`} ref={buttonsRef}>
        {slides.map((slide, index) => (
          <button key={index} onClick={() => setActiveIndex(index)} className={`${index === activeIndex ? 'active' : ''}`}>
            {slide.name}
          </button>
        ))}
        <button onClick={() => navigate('/project')}>See More ➡</button>
      </div>
    </div>
  )
}

export default Project

// not recommended to use index for the key property bc the order of the index change if the structure inside of the slides array changes
