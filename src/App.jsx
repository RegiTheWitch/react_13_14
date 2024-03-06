
import { useState } from 'react'
import './App.css'
// import for pages
import { Routes, Route } from 'react-router-dom'
// import components
import Header from './components/header/header'
import Banner from './components/banner/banner'
import Catalog from './components/catalog/catalog'
import CartPage from './components/cartPage/cartPage'
import UserPage from './components/userPage/UserPage'
import CreatePage from './components/createPage/CreatePage'
import Modalka from './components/modalka/Modalka'


function App(props) {
  return (
    <div className="blocks">
      <Header />
      <Routes>
        <Route path='/' element={<Banner />}/>
        <Route path='/catalog' element={<Catalog store={props.store} />}/>
        <Route path='/catalog/:id' element={<CartPage/>}/>
        <Route path='/users' element={<UserPage/>}/>
        <Route path='/create' element={<CreatePage/>}/>
        <Route path='/modalka' element= {<Modalka/>} />
      </Routes>
      <Header />
    </div>
  )
}

export default App
