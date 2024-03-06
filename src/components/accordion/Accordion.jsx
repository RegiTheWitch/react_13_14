import '../accordion/Accordion.css'
import { useState } from 'react'

export default function Accordion({title, content}){
    const [isActive, setIsActive] = useState(false)

    return(
        
        <div className="accordion">
            <div className="accordion_item">
                <div className="accordion_title" onClick={()=> setIsActive(!isActive)}>
                    <div className='title'>{title}</div>
                    <div className="plus">{isActive? '-':'+'}</div>
                </div>
                {
                    isActive &&
                    <div className="accordion_content">{content}</div>
                }
            </div>
        </div>
    )
}