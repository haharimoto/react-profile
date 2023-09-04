import React from "react"

class ErrorBoundary extends React.Component {
  state = {hasError: false}

  // method gets called when the component and its children has an error
  // for updating state
  static getDerivedStateFromError(error) {
    return {hasError: true}
  }

  // method for running specific code like logging
  componentDidCatch(error, info) {
    console.log(error, info)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}

export default ErrorBoundary
