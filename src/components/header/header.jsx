import React from 'react'
import '../header/header.css'
import { Link } from 'react-router-dom'
// import images
import logo from '../header/header_img/logo.png'
import like from '../header/header_img/like.png'
import cart from '../header/header_img/cart.png'
import search from '../header/header_img/search.png'
import UserPage from '../userPage/UserPage'
import Modalka from '../modalka/Modalka'


export default function Header() {
        return (
            <header>
                <div className="header_content">
                    <div className="header_menu">
                        <img src={logo} alt="#" className='logo' />
                        <div className="line"></div>
                        <Link to="/" className="menu_item">главная</Link>
                        <Link to="/catalog" className="menu_item">каталог</Link>
                        <div className="line"></div>
                        <Link to="/" className="menu_item">информация</Link>
                        <Link to="/users" className="menu_item">пользователи</Link>
                        <div className="line"></div>
                        <Link to="/create" className="menu_item">добавить</Link>
                        <Link to="/" className="menu_item"><Modalka></Modalka></Link>

                    </div>
                    <div className="btn_menu">
                        <img src={search} alt="#" className="imgBtn" />
                        <img src={cart} alt="#" className="imgBtn" />
                        <img src={like} alt="#" className="imgBtn" />
                    </div>
                </div>
            </header>
        )
}

