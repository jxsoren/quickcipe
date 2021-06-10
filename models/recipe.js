const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    difficulty: {
        type: Number,
        required: true
    },

    ingredients: {
        type: String,
        required: true
    },

    totalCookTime: {
        type: Number,
        required: true
    }, 

    equipment: {
        type: String,
        required: true
    },

    imgURL: {
        type: String,
        required: false
    },

    servingSize: {
        type: Number,
        required: true
    },

    steps: {
        type: Array,
        required: true
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Recipe", recipeSchema)