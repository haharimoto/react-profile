import { useState, useEffect } from 'react'

// custom hook for Intersection Observer API
// animate once by scroll down
function useOnScreen(ref) {
  const [isVisible, setIsVisible] = useState(false)
  // console.log(isVisible)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // console.log(entries)
      const entry = entries[0]
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(ref.current)
      }
    },
    {
      threshold: 0.5
    }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return isVisible
}

export default useOnScreen

// animate by scroll up/down
// useEffect(() => {
//   const observer = new IntersectionObserver((entries) => {
//     const entry = entries[0]
//     setIsVisible(entry.isIntersecting)
//   },
//   {
//     threshold: 0.5
//   }
//   )

//   if (ref.current) {
//     observer.observe(ref.current)
//   }

//   return () => {
//     observer.unobserve(ref.current)
//   }
// }, [])
