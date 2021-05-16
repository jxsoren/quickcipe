import React, { useContext, useEffect } from 'react'
import { Recipe } from '../Recipe/Recipe.js'
import { RecipeContext } from '../../context/RecipeProvider.js'
import './Recipes.css'

export const Recipes = (props) => {
    const { allRecipes, recipes } = useContext(RecipeContext)
    
    useEffect(() => {
        allRecipes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [recipes.recipes.length])

    return(
        <div className="recipes">
            {recipes.recipes.map(recipe => {
                return (
                    <Recipe {...recipe} type="public" key={recipe._id} />
                )
            })}
        </div>
    )
}