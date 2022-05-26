import React from 'react'
import ErrorBoundry from './ErrorBoundry'
import Hero from './Hero'

function Error() {
  return (
    <div className='about'>
        <ErrorBoundry >
            <Hero heroName='SAIKUMAR' />
            
        </ErrorBoundry>
        <ErrorBoundry >
            <Hero heroName='SUPERMAN' />
            
        </ErrorBoundry>
        <ErrorBoundry >
            <Hero heroName='Joker' />
            
        </ErrorBoundry>
    </div>
  )
}

export default Error