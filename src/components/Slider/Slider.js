import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from "../Product/Product";
import wave from '../../assets/wave.svg'
import { coffeDatas } from "../../data";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <div className='product-container' id='product'>
                    <img src={wave} />
                </div>
                <div><h1 className="product-header">Produk</h1></div>
                <Slider {...settings}>
                    {coffeDatas.map((item) => (
                        <div>
                            <Product
                                coffee={item.img}
                                desc={item.desc}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}