import {useEffect, useState} from "react"
import Modal from 'react-modal'
import '../modalka/Modalka.css'
export default function Modalka(){
    const [modalIsOpen,setModalIsOpen]=useState(false)

    function showModal(){
        setModalIsOpen(true)
    }

    function closeModal(){
        setModalIsOpen(false)
    }
    return(
        <>
        <button onClick={showModal} className="btn_hop">Добавить</button>
        <Modal isOpen={modalIsOpen}>
            <div className="hop-hop">
            <div className="chiki_bamboni">
                    <h2>ЗАЯВКА НА ТОВАР</h2> 
                    <label>ФИО</label>
                    <input type="text" name="title"  />
                    <label>НОМЕР ТЕЛЕФОНА</label>
                    <input type="text" name="title" />
                    <label>АДРЕС ДОСТАВКИ</label>
                    <input type="text" name="title" />
                <button onClick={closeModal} className="btn_hop he1">Закрыть</button>
            </div>
            </div>
          
        </Modal>
        </>
    )
}