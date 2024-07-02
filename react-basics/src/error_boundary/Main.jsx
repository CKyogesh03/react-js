import React from 'react'
import ErrorBoundary from './ErrorBoundary'
import Hero from './Hero'

const Main = () => {
  return (
    <ErrorBoundary>
        <Hero heroName="Joker"/>
    </ErrorBoundary>
  )
}

export default Main