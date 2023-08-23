import React from 'react'
import Header from './Header'
import Contact from './Contact'

function ErrorPage() {
  const lottiePath = '/lottie404.json'

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


// In Vite, the public directory is also used for serving static assets that should not be bundled or imported by your code. Anything in the public directory is served as-is at the root level.

// So, if you have a file called lottie404.json inside the public directory of a Vite project, you'd reference it in your JavaScript/JSX code as: const lottiePath = '/lottie404.json'

// Ensure that you are not trying to import assets from the public directory using ES module imports. Instead, just use string literals to point to the correct URL, as shown above.
