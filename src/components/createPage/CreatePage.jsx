import {useEffect, useState} from "react"
import '../createPage/CreatePage.css'


export default function CreatePage(){
    const[message,setMessage]=useState()

    function createForm(event){
        event.preventDefault()
        const formData = new FormData(event.target)

        fetch('http://jsonplaceholder.typicode.com/posts',{
            method:'POST',
            body:formData
        })

        event.target.reset()
        setMessage('Форма отправлена')
    }
    return(
        <>
        <div className="json">
        <h1>Добавление</h1>
        <form onSubmit={createForm} className="form1">
            <label>title</label>
            <input type="text" name="title"/>
            <label>body</label>
            <textarea name="body"></textarea>
            <button type="submit" className="btn">Добавить</button>
            {message}
        </form>
        </div>
       
        </>
    )
}