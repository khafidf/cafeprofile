import React from 'react'
import './Product.css'

const Product = (props) => {
    return (
        <div>
            <div>
                <div className='product-wrapper'>
                    <span className='bg-img'><img src={props.coffee} className='product-img' /></span>
                    <p className='product-desc'>{props.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Product