import React, { useContext, useState } from 'react'
import { RecipeContext } from '../../context/RecipeProvider.js'
import './RecipeForm.css'
import './RecipeForm.scss'

import { Icon } from '@iconify/react';

import warningAlt from '@iconify-icons/carbon/warning-alt';
import baselineDescription from '@iconify-icons/ic/baseline-description';
import utensilsAlt from '@iconify-icons/uil/utensils-alt';
import stepsIcon from '@iconify-icons/grommet-icons/steps';
import peopleIcon from '@iconify-icons/bi/people';
import listSolid from '@iconify-icons/clarity/list-solid';
import alarmIcon from '@iconify-icons/bi/alarm';

export const RecipeForm = ( props ) => {
    const { addRecipe, editRecipe } = useContext(RecipeContext)
    const { editToggle, setEditToggle, _id } = props
    const { title, description, difficulty, ingredients, totalCookTime,
    equipment, servingSize, steps, imgURL } = props

    const initInputs = {
        title: '',
        description:  0,
        difficulty:  '',
        ingredients:  '',
        totalCookTime:  0,
        equipment:  '',
        servingSize:   0,
        steps: [],
        imgURL:  ''
    }

    const initStepInputs = {
        stepOne: '',
        stepTwo: '',
        stepThree: ''
    }

    const [ recipeInputs, setRecipeInputs ] = useState(initInputs)
    const [ stepInputs, setStepInputs ] = useState(initStepInputs)

    const { stepOne, stepTwo, stepThree } = stepInputs 

    const handleSubmit = ( e ) => {
        // e.preventDefault()
        const { stepOne, stepTwo, stepThree } = stepInputs

        recipeInputs.steps.push(stepOne, stepTwo, stepThree)
        addRecipe(recipeInputs)
        setRecipeInputs(initInputs)
        // setStepInputs(initStepInputs)

        console.log(initInputs)
        console.log(recipeInputs)
    }

    const handleEditSubmit = e => {
        e.preventDefault()
        editRecipe(recipeInputs, _id)
        setEditToggle(prevTog => !prevTog)
    }

    const handleChange = ( e ) => {
        const { name, value } = e.target
        setRecipeInputs(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleStepChange = ( e ) => {
        const { name, value } = e.target
        setStepInputs(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return(
        <div className="recipe-form-parent">
            { !editToggle  ? 
                <>
                    <form id="recipe-form">
                        <div className="recipe">
                            <div className='recipe-thumb'>
                                <span id="recipe-img-value" className="value">
                                    <label for="imgURL">Recipe Image*</label>
                                    <input 
                                        type="url"
                                        name="imgURL"
                                        placeholder="Recipe Image Url"
                                        onChange={handleChange}
                                        value={imgURL}
                                    />
                                </span>
                            </div>

                            <div className="recipe-title-wrapper">
                                <h2 id="recipe-title-form" className="recipe-title">
                                    <label for="title">Recipe Name*</label>
                                    <input 
                                        type="text"
                                        name="title"
                                        placeholder="Recipe Name"
                                        onChange={handleChange}
                                        value={title}
                                        required
                                    />
                                </h2>
                            </div>

                            <hr />

                            <ul className="recipe-details">
                                <div className="recipe-details-row1">
                                    <li>
                                        <span className="icon">
                                            <Icon icon={alarmIcon} />
                                        </span>

                                        <div className="cook-time-wrapper">
                                            <span className="value">
                                                <label for="totalCookTime">Cook Time*</label>
                                                <input 
                                                    type="number"
                                                    name="totalCookTime"
                                                    placeholder="Recipe Cook Time"
                                                    onChange={handleChange}
                                                    value={totalCookTime}
                                                    required
                                                    />
                                            </span>
                                            <span className="recipe-minutes-title">
                                                Minutes
                                            </span>
                                        </div>
                                    </li>
                        
                                    <li>
                                        <span className="icon">
                                            <Icon icon={peopleIcon} />
                                        </span>
                                        <span className="value">
                                            <label for="difficulty">Serving Size*</label>
                                            <input 
                                                type="number"
                                                name="servingSize"
                                                placeholder="Recipe Serving Size"
                                                onChange={handleChange}
                                                value={servingSize}
                                                required
                                                />
                                        </span>
                                    </li>

                                    <li>  
                                        <span className="icon">
                                            <Icon icon={warningAlt} />
                                        </span>
                                        <div className="difficulty-wrapper">
                                            <span className="value">
                                                <label for="difficulty">Difficulty*</label>
                                                <input 
                                                    type="number"
                                                    name="difficulty"
                                                    placeholder="Recipe Difficulty"
                                                    onChange={handleChange}
                                                    value={difficulty}
                                                    min={0}
                                                    max={10}
                                                    required
                                                    />
                                                /10
                                            </span>
                                        </div>
                                    </li>
                                </div>

                                <li className="large-input-wrapper">
                                    <span className="icon">
                                        <Icon icon={baselineDescription} />
                                    </span>
                                    <span className="value">
                                        <label for="description">Description*</label>
                                        <textarea 
                                            name="description"
                                            form="recipe-form"
                                            onChange={handleChange}
                                            value={description}
                                            placeholder="Recipe Description"
                                            required
                                        />
                                    </span>
                                </li>

                                <li className="large-input-wrapper">
                                    <span className="icon">
                                        <Icon icon={listSolid} />
                                    </span>
                                    <span className="value">
                                        <label for="ingredients"> Ingredients*</label>
                                        <input 
                                            type="text"
                                            name="ingredients"
                                            placeholder="Recipe Ingredients"
                                            onChange={handleChange}
                                            value={ingredients}
                                            required
                                            />
                                    </span>
                                </li>
                    
                                <li className="large-input-wrapper">
                                        <span className="icon">
                                            <Icon icon={utensilsAlt} />
                                        </span>
                                        <span className="value">
                                            <label for="equipment">Equipment Needed*</label>
                                            <input 
                                                type="text"
                                                name="equipment"
                                                placeholder="Recipe Equipment"
                                                onChange={handleChange}
                                                value={equipment}
                                                required
                                                />
                                        </span>
                                </li>

                                <li className="large-input-wrapper">
                                    <span className="icon">
                                        <Icon icon={stepsIcon} />
                                    </span>
                                    <span className="value">
                                        <label for="ingredients">Steps*</label>
                                        <input 
                                            type="text"
                                            name="stepOne"
                                            placeholder="Recipe Step #1"
                                            onChange={handleStepChange}
                                            value={stepOne}
                                            required
                                            />
                                        <input 
                                            type="text"
                                            name="stepTwo"
                                            placeholder="Recipe Step #2"
                                            onChange={handleStepChange}
                                            value={stepTwo}
                                            required
                                            />
                                        <input 
                                            type="text"
                                            name='stepThree'
                                            placeholder="Recipe Step #3"
                                            onChange={handleStepChange}
                                            value={stepThree}
                                            required
                                            />
                                    </span> 
                                </li>
                            </ul>
                        </div>

                        <button id="recipe-submit-button" onClick={handleSubmit}>Submit</button>
                    </form>
                </>

            :
                // (editToggle === true)
                <>
                    <form id="recipe-form">
                        <div className="recipe">
                            <div className='recipe-thumb'>
                                <span id="recipe-img-value" className="value">
                                    <label for="imgURL">Recipe Image*</label>
                                    <input 
                                        type="url"
                                        name="imgURL"
                                        placeholder="Recipe Image Url"
                                        onChange={handleChange}
                                        // value={imgURL}
                                    />
                                </span>
                            </div>

                            <div className="recipe-title-wrapper">
                                <h2 id="recipe-title-form" className="recipe-title">
                                    <label for="title">Recipe Name*</label>
                                    <input 
                                        type="text"
                                        name="title"
                                        placeholder="Recipe Name"
                                        onChange={handleChange}
                                        // value={title}
                                        required
                                    />
                                </h2>
                            </div>

                            <hr />

                            <ul className="recipe-details">
                                <div className="recipe-details-row1">
                                    <li>
                                        <span className="icon">
                                            <Icon icon={alarmIcon} />
                                        </span>

                                        <div className="cook-time-wrapper">
                                            <span className="value">
                                                <label for="totalCookTime">Cook Time*</label>
                                                <input 
                                                    type="number"
                                                    name="totalCookTime"
                                                    placeholder="Recipe Cook Time"
                                                    onChange={handleChange}
                                                    // value={totalCookTime}
                                                    required
                                                    />
                                            </span>
                                            <span className="recipe-minutes-title">
                                                Minutes
                                            </span>
                                        </div>
                                    </li>
                        
                                    <li>
                                        <span className="icon">
                                            <Icon icon={peopleIcon} />
                                        </span>
                                        <span className="value">
                                            <label for="difficulty">Serving Size*</label>
                                            <input 
                                                type="number"
                                                name="servingSize"
                                                placeholder="Recipe Serving Size"
                                                onChange={handleChange}
                                                // value={servingSize}
                                                required
                                                />
                                        </span>
                                    </li>

                                    <li>  
                                        <span className="icon">
                                            <Icon icon={warningAlt} />
                                        </span>
                                        <div className="difficulty-wrapper">
                                            <span className="value">
                                                <label for="difficulty">Difficulty*</label>
                                                <input 
                                                    type="number"
                                                    name="difficulty"
                                                    placeholder="Recipe Difficulty"
                                                    onChange={handleChange}
                                                    // value={difficulty}
                                                    min={0}
                                                    max={10}
                                                    required
                                                    />
                                                /10
                                            </span>
                                        </div>
                                    </li>
                                </div>

                                <li className="large-input-wrapper">
                                    <span className="icon">
                                        <Icon icon={baselineDescription} />
                                    </span>
                                    <span className="value">
                                        <label for="description">Description*</label>
                                        <textarea 
                                            name="description"
                                            form="recipe-form"
                                            onChange={handleChange}
                                            // value={description}
                                            placeholder="Recipe Description"
                                            required
                                        />
                                    </span>
                                </li>

                                <li className="large-input-wrapper">
                                    <span className="icon">
                                        <Icon icon={listSolid} />
                                    </span>
                                    <span className="value">
                                        <label for="ingredients"> Ingredients*</label>
                                        <input 
                                            type="text"
                                            name="ingredients"
                                            placeholder="Recipe Ingredients"
                                            onChange={handleChange}
                                            // value={ingredients}
                                            required
                                            />
                                    </span>
                                </li>
                    
                                <li className="large-input-wrapper">
                                        <span className="icon">
                                            <Icon icon={utensilsAlt} />
                                        </span>
                                        <span className="value">
                                            <label for="equipment">Equipment Needed*</label>
                                            <input 
                                                type="text"
                                                name="equipment"
                                                placeholder="Recipe Equipment"
                                                onChange={handleChange}
                                                // value={equipment}
                                                required
                                                />
                                        </span>
                                </li>

                                <li className="large-input-wrapper">
                                    <span className="icon">
                                        <Icon icon={stepsIcon} />
                                    </span>
                                    <span className="value">
                                        <label for="ingredients">Steps*</label>
                                        <input 
                                            type="text"
                                            name="stepOne"
                                            placeholder="Recipe Step #1"
                                            onChange={handleStepChange}
                                            // value={stepOne}
                                            required
                                            />
                                        <input 
                                            type="text"
                                            name="stepTwo"
                                            placeholder="Recipe Step #2"
                                            onChange={handleStepChange}
                                            // value={stepTwo}
                                            required
                                            />
                                        <input 
                                            type="text"
                                            name='stepThree'
                                            placeholder="Recipe Step #3"
                                            onChange={handleStepChange}
                                            // value={stepThree}
                                            required
                                            />
                                    </span> 
                                </li>
                            </ul>
                        </div>

                        <div className="button">
                            <button
                                className="editButton"
                                onClick={handleEditSubmit}
                            >
                            Submit Edit</button>

                            <button
                                className="closeButton"
                                onClick={() => setEditToggle(prev => !prev)}
                            >
                                Close 
                            </button>
                        </div>  

                    </form>
                </>
            }
            
        </div>
    )
}