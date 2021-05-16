import React from 'react'
import ToggleButton from '../Drawer/ToggleButton'
import './Navbar.css'

export const Navbar = (props) => {
    const { logout, token, toggle } = props
    return(
        <div className="navbar">
            <div className="toggle-button-parent">
                <ToggleButton handleClick={toggle} />
            </div>

            { token ? <button onClick={logout} className="logout-btn">Logout</button> : <></>}
        </div>

    )
}