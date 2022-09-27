import React from 'react'
import { viewDatas } from '../../data'
import './Place.css'

const Place = () => {
  return (
    <div className='place-container' id='place'>
        <div className='place-header'>
            <h1>Tempat dan Suasana</h1>
        </div>
        <div className='place-wrapper'>
            {viewDatas.map((item) => (
                <img src={item.view} className='place-img' />
            ))}
        </div>
    </div>
  )
}

export default Place