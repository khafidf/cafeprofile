import React from 'react'
import './Product.css'
import { coffeDatas } from '../../data';
import wave from '../../assets/wave.svg'

const Product = () => {
    return (
        <div>
            <div className='product-container' id='product'>
                <img src={wave} />
            </div>
            <div>
                {coffeDatas.map((item) => (
                    <div className='product-wrapper'>
                        <span className='bg-img'><img src={item.img} className='product-img' /></span>
                        <p className='product-desc'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Product