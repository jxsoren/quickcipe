import React from 'react'
import './Backdrop.css'

export default function backdrop(props){
    return(
        <div className="backdrop" onClick={props.handleBackdropClick} />
    )
}