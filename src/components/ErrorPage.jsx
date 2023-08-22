import React from 'react'
import Header from './Header'
import Contact from './Contact'

function ErrorPage() {
  const lottiePath = '../../public/lottie404.json'

  return (
    <div id='error-page'>
      <Header />
      <div className="error-page--container">
        <lottie-player
          src={lottiePath}
          background="transparent"
          speed="1"
          style={{ maxWidth: '500px', maxHeight: '500px', width: '100%', height: '100%' }}
          loop
          autoplay
        ></lottie-player>
      </div>
      <Contact />
    </div>
  )
}

export default ErrorPage
