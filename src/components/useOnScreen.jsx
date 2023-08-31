import { useState, useEffect } from 'react'

// custom hook for Intersection Observer API
function useOnScreen(ref) {
  const [isVisible, setIsVisible] = useState(false)
  // console.log(isVisible)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // console.log(entries)
      const entry = entries[0]
      setIsVisible(entry.isIntersecting)
    },
    {
      threshold: 1
    }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.unobserve(ref.current)
    }
  }, [])

  return isVisible
}

export default useOnScreen
