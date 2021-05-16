import React, { useContext } from 'react'
import { RecipeContext } from '../../../context/RecipeProvider.js'
import './DeleteButton.css'

export const DeleteButton = (props) => {
    const { id } = props
    const { deleteRecipe } = useContext(RecipeContext)
    return(
        <button 
            className="deleteButton"
            onClick={() => deleteRecipe(id)}
        >
            X
        </button>
    )
}