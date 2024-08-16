
import React from 'react'
import "./index.css"


const Modules = (props) => {
    const { each } = props
    const { total, text, color } = each
    const colorText = {
        color: `${color}`
    }
    return (
        <div className='d-flex flex-column align-items-center shadow course-container'>
            <p className='fs-2' style={colorText}></p>
            <p>{text} </p>
        </div>
    )
}

export default Modules
