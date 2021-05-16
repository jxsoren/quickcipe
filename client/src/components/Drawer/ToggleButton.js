import React from 'react'
import './ToggleButton.css'

export default function drawerToggleButton(props){
    return(
        <button className="toggle-button" onClick={props.handleClick}>
            <div id="menuToggle">
                <input type="checkbox" />

                <span></span>
                <span></span>
                <span></span>

                <ul id="menu">
                    
                </ul>

            </div>
        </button>
    )
}