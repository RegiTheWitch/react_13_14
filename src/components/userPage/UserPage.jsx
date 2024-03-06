import {useEffect, useState} from "react"
import '../userPage/UserPage.css'

export default function UserPage(){
    const [users,setUsers]=useState([])

    async function fetchUsers(){
        const response = await fetch ('https://jsonplaceholder.typicode.com/users')
        const users= await response.json()
        setUsers(users)
    }

    useEffect(() =>{
        fetchUsers()
    },[])
    useEffect(()=>{
        fetchUsers()
    },[])
    return(
        <div className="json">
         <h1>Пользователи</h1>
        <ul>
            {users.map((user)=>{
                return(
                    <li className="lili">{user.name}</li>
                )
            })}
        </ul>
        </div>
       
    
    )
}
