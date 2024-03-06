import React from 'react'
import '../catalog/catalog.css'
import { store } from '../../app/store'
import { useState } from 'react'
import Card from '../card/card'

export default function Catalog() {
    const [query, setQuery] = useState("")
    const [sorting, setSorting] = useState("")
    const [category, setCategory] = useState(0)

    function search(e) {
        setQuery(e.target.value)
    }

    const filterdProducts = store.products.filter(
        (item) => item.name.toLowerCase().includes(query.toLowerCase())
            &&
            (item.category == category || category == 0))

    function sort(event) {
        const sortValue = event.target.value
        setSorting(sortValue)
    }
    const sortProduct = (sorting, catalog) => {
        switch (sorting) {
            case 'price_asc':
                return [...catalog].sort((a, b) => a.price - b.price)
            case 'price_desc':
                return [...catalog].sort((a, b) => b.price - a.price)
            case 'ost_asc':
                return [...catalog].sort((a, b) => a.ost - b.ost)
            case 'ost_desc':
                return [...catalog].sort((a, b) => b.ost - a.ost)
            default:
                return catalog

        }
    }

    const sortAndFilterProduct = sortProduct(sorting, filterdProducts)

    return (

        <div className="catalog">
            <div className="catalog-content">
                <input onChange={search} type="search" name="search" className='search' placeholder='Поиск' />
                <div className="pagin">
                    <a href="" className='paginA'>Главная</a> \
                    <a href="" className='paginA'>Каталог</a>
                </div>

                <div className="catalog-inform">
                   

                    <div className="catalog-inform-blog">
                       
                        <select onChange={sort}>
                            <option value="price_asc">По возрастанию цены</option>
                            <option value="price_desc">По убыванию цены</option>
                            <option value="ost_asc">По возрастанию количества товара</option>
                            <option value="ost_desc">По убыванию количества товара</option>
                       =
                        </select>
                        <hr />
                        <button onClick={()=>setCategory(0)}>Все категории</button>
                        <button onClick={()=>setCategory(1)}>Футболки</button>
                        <button onClick={()=>setCategory(2)}>Штанишки</button>

                        <div className="catalog-blog">
                            {
                                sortAndFilterProduct.length?
                                sortAndFilterProduct.map((card,index) =>{
                                    return (
                                        <Card key={index} {...card} />

                                    )
                                })
                                :
                                <h2>по запросу "{query}" ничего не найдено</h2>
                            }
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )

}