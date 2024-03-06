import React from 'react'
import '../banner/banner.css'
import banner_logo from '../banner/banner_img/logoBanner.png'
import Slider from '../Slider/Slider'
import Accordion from '../accordion/Accordion'

export default function Banner(){
        return(
            <>
            <div className="banner">
                <div className="banner-content">
                    <img src={banner_logo} alt="logo" />
                    <h2 className="title">БРЕНД ОДЕЖДЫ</h2>
                    <a href="#" className="banner-btn">Перейти в категории</a>
                </div>
              
            </div>
            <Slider/>
            <div className="accordion_banner">
                    <h2>Аккордион</h2>
                    <Accordion title="JS" content="hello" />
                    <Accordion title="React" content="hello" />
                    <Accordion title="Php" content="hello" />
                </div>
            </>
            
        
        
        )
}

