import React from 'react'
import { Link } from 'react-router-dom'
import './Drawer.css'

export default function Drawer(props){
    let drawerClasses = 'side-drawer'
    if(props.show){
        drawerClasses = 'side-drawer open'    
    }
    return(
        <div className={drawerClasses}>
            <ul onClick={props.handleBackdropClick}
            className="drawer-links-wrapper">
                <li>
                    <Link to='/home'>
                        <h1 className="drawer-home">
                            Home
                        </h1>
                    </Link>
                </li>
                
                <li>
                    <Link to='/profile'>
                        <h1 className="drawer-profile">
                            My Profile
                        </h1>
                    </Link>
                </li>

            </ul>
        </div>
    )
}



        