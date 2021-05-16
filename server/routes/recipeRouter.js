const express = require('express')
const Recipe = require('../models/recipe.js')
const User = require('../models/user.js')

const recipeRouter = express.Router()

// Get all recipes
recipeRouter.get('/', (req, res, next) => {
    Recipe.find((err, recipes) => {
        if(err){
            res.status(500)
            return next(err)
        }
        res.status(200).send(recipes)
    })
})

// Get all recipes by user id
recipeRouter.get('/user', (req, res, next) => {
    Recipe.find({ user: req.user._id},
        (err, recipe) => {
            if(err){
                res.status(500)
                return next(err)
            }
            res.status(200).send(recipe)
        }
    )
})

// Post new recipe
recipeRouter.post('/', (req, res, next) => {
    req.body.user = req.user._id
    const newRecipe = new Recipe(req.body)
    newRecipe.save((err, savedRecipe) => {
        if(err){
            res.status(500)
            return next(err)
        }
        res.status(201).send(savedRecipe)
    })
})

// Delete Recipe
recipeRouter.delete('/:recipeID', (req, res, next) => {
    Recipe.findOneAndDelete(
        { _id: req.params.recipeID, user: req.user._id },
        (err, deletedRecipe) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted recipe: ${deletedRecipe}`)
        }
    )
})

// Update Recipe
recipeRouter.put('/:recipeID', (req, res, next) => {
    Recipe.findByIdAndUpdate({ _id: req.params.recipeID },
        req.body,
        { new: true },
        (err, updatedRecipe) => {
            if(err){
                res.status(500)
                return next(err)
            }
            res.status(201).send(updatedRecipe)
        }
    )
})

// Get Recipe Author
recipeRouter.get('/user/:userID', (req, res, next) => {
    User.findOne( { _id: req.params.userID }, 
            (err, username) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                res.status(200).send(username)
            }
        )
})

module.exports = recipeRouter