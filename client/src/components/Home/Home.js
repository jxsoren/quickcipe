import React from 'react'
import { Recipes } from '../Recipes/Recipes.js'
import logo2 from './logo2.png'
import './Home.css'

export const Home = (props) => {
    return(
        <div className="home">
            <img 
                src={logo2}
                alt="logo"
                className="logo"
            />
            <h2 className="pubRes-title">Public Recipes</h2>

            <Recipes />
        </div>
    )
}

