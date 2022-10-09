import React from 'react'
import './Map.css'

const Map = () => {
  return (
    <div className='map-container' id='map'>
      <div>
        <h1 className='map-header'>Peta</h1>
      </div>
      <div>
      <iframe className='map-embed' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31732.596088836774!2d106.82343783416044!3d-6.187650696226782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4151ceb7767%3A0x79ac645c2aef736f!2sGiyanti%20Coffee%20Roastery!5e0!3m2!1sid!2sid!4v1665012098654!5m2!1sid!2sid"></iframe>
      </div>
      
    </div>
  )
}

export default Map
