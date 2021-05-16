import React, { useContext, useEffect } from 'react'
import { RecipeContext } from '../../context/RecipeProvider'
import { RecipeForm } from '../RecipeForm/RecipeForm.js'
import { Recipe } from '../Recipe/Recipe.js'
import './Profile.css'

export const Profile = () => {
  const { getUserRecipes, userRecipes } = useContext(RecipeContext)

  useEffect(() => {
    getUserRecipes()
  }, [])

  console.log(userRecipes.userRecipes)

  return (
    <div className="profile">
      <RecipeForm />

      <div classNamne="profile-user-recipes">
          <h1 className="my-recipes-title">My Recipes</h1>
          {
            userRecipes.userRecipes.length > 0 ? 
              userRecipes.userRecipes.map(recipe => {
                return (
                  <Recipe {...recipe} type="personal"  key={recipe._id} />
                )
            })
            : 
            <div>
              <h2>You don't have any recipes :/</h2>
              <h2 className="no-recipes">Fill out the entire form and click submit to add your first recipe! :)</h2>
            </div>
          }
      </div>
    </div>
  )
}