import '../card/card.css'
import add from '../catalog/catalog_img/add.png'
import like from '../catalog/catalog_img/like.png'
import { Link } from 'react-router-dom'
import Modalka from '../modalka/Modalka'

export default function Card({ name, price, id, img, ost }) {
    return (
        <div className="card_once">
            <img src={img} alt="" className='catalog_img' />
            <h2 className="catalog_title">{name}</h2>
            <div className="catalog_btn">
                <h2 className="price">{price}</h2>
                <div className="btns">
                    <img src={like} alt="#" />
                    <img src={add} alt="#" />
                </div>
            </div>
            <Link to={`${id}`} className='card_link'>Подробнее</Link>
            {ost === 0 ? <Modalka></Modalka> : null}
        </div>
    )
}