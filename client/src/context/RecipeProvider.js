import React, { useState } from 'react'
import axios from 'axios'

export const RecipeContext = React.createContext()
const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function RecipeProvider(props){
    const [ userRecipes, setUserRecipes ] = useState({ userRecipes: []})
    const [ recipes, setRecipes ] = useState({ recipes: [] })

    const getUserRecipes = () => {
        userAxios.get('/api/recipes/user')
         .then(res => {
            setUserRecipes(prev => ({
                ...prev,
                userRecipes: res.data
            }))
         })
    }

    const allRecipes = () => {
        userAxios.get('api/recipes')
         .then(res => {
             setRecipes(prev => ({
                 ...prev,
                 recipes: res.data
             }))
         })
    }

    const addRecipe = ( newRecipe ) => {
        userAxios.post('/api/recipes', newRecipe)
         .then(res => {
             setUserRecipes(prev => ({
                 ...prev,
                 userRecipes: [...prev.userRecipes, res.data]
             }))

             setRecipes(prev => ({
                ...prev,
                recipes: [...prev.recipes, res.data]
             }))
         })
         .catch(err => console.log(err))
    }

    const deleteRecipe = ( recipeID ) => {
        userAxios.delete(`api/recipes/${ recipeID }`)
        .then(res =>  {
            setUserRecipes(prev => ({
                ...prev, 
                userRecipes: prev.userRecipes.filter(recipe => recipe._id !== recipeID)
            }))
        })
    }

    const editRecipe = ( updates, recipeID ) => {
       userAxios.put(`/api/recipes/${ recipeID }`, updates)
        .then(res => {
            setUserRecipes(prev => ({
                ...prev,
                userRecipes: prev.userRecipes.map(recipe => recipe._id !== recipeID ? recipe : res.data)
            }))
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }

    return(
        <RecipeContext.Provider
            value={{
                userRecipes,
                recipes,
                addRecipe,
                deleteRecipe,
                editRecipe,
                allRecipes,
                getUserRecipes,
                userAxios
            }}
        >
            {props.children}
        </RecipeContext.Provider>
    )
}



