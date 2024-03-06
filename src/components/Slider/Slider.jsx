import SkickSlider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../Slider/Slider.css'

import img_1 from '../catalog/catalog_img/S035c1162fb30422799044906f5a9d0ecG 10.png'
import img_2 from '../catalog/catalog_img/S035c1162fb30422799044906f5a9d0ecG 11.png'
import img_3 from '../catalog/catalog_img/S035c1162fb30422799044906f5a9d0ecG 12.png'

export default function Slider(){
    const setting ={
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1
    }
    return(
        < div className='slider_content'>
        <h1>Слайдер</h1>
        <div className="slider_place">
            <SkickSlider {...setting}>
                <div className="slide">
                    <img src={img_1} className='img_sl'/>
                </div>
                <div className="slide">
                    <img src={img_2} className='img_sl'/>
                </div>
                <div className="slide">
                    <img src={img_3} className='img_sl'/>
                </div>
            </SkickSlider>
        </div>
        </div>
    )
}