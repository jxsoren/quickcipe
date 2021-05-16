import React, { useContext } from 'react'
import { RecipeContext } from '../../../context/RecipeProvider.js'
import './EditButton.css'

export const EditButton = () => {
    const { editRecipe } = useContext(RecipeContext)
    return(
        <button 
            className="editButton"
            onClick={editRecipe}
        >
            Edit
        </button>
    )
}