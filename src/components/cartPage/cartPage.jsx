import '../cartPage/cartPage.css'
import add from '../catalog/catalog_img/add.png'
import like from '../catalog/catalog_img/like.png'
    

import { useParams } from 'react-router-dom'
import { store } from '../../app/store'

export default function cartPage() {
    const { id } = useParams();
    const com = store.products.find(com => com.id === parseInt(id))

    return (
        <div className="catalog-inform-blog">
            <div className="catalog-blog">
                {
                    <article key={com.id}>
                        <div className="element">
                            <img src={com.img} alt="" className='catalog' />
                            <h2 className="catalog-title">{com.name}</h2>
                            <div className="catalog-btn">
                                <h2 className="price">{com.price}</h2>
                                <div className="btn-form">
                                    <img src={like} alt="#" />
                                    <img src={add} alt="#" />
                                </div>
                            </div>
                        </div>
                    </article>
                }
            </div>
        </div>
    )
}
