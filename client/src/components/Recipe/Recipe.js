import React, { useEffect, useContext, useState } from 'react'
import { RecipeContext } from '../../context/RecipeProvider.js'
import { Icon } from '@iconify/react';
import warningAlt from '@iconify-icons/carbon/warning-alt';
import baselineDescription from '@iconify-icons/ic/baseline-description';
import utensilsAlt from '@iconify-icons/uil/utensils-alt';
import stepsIcon from '@iconify-icons/grommet-icons/steps';
import peopleIcon from '@iconify-icons/bi/people';
import listSolid from '@iconify-icons/clarity/list-solid';
import alarmIcon from '@iconify-icons/bi/alarm';
import { RecipeForm } from '../RecipeForm/RecipeForm.js'
import { DeleteButton } from '../Profile/DeleteButton/DeleteButton.js'

import './Recipe.scss'
// import '../RecipeForm/RecipeForm.scss'

export const Recipe = (props) => {
    const { user, title, description, difficulty, ingredients, totalCookTime, equipment, imgURL, servingSize, steps, type, _id } = props

    const { userAxios } = useContext(RecipeContext)

    const [ authorName, setAuthorName ] = useState("")
    const [ editToggle, setEditToggle ] = useState(false)

    const getRecipeAuthor = (userID) => {
        userAxios.get(`/api/recipes/user/${userID}`)
        .then(( res ) => {
            setAuthorName(res.data.username)
         })
         .catch(err => console.log(err))
    }

    useEffect(() => {
        getRecipeAuthor(user)
    }, [])

    
    return(
        <div className="display-recipe">
            { type === "personal" ? 
                !editToggle ? 
                // if( type === "personal" && !editTog)
                <>
                    <div className='display-recipe-thumb'>
                        <img src={imgURL} alt='recipe-thumbnail' />
                    </div>

                    <div className="display-recipe-title-wrapper">
                        <h2 className="display-recipe-title">{title}</h2>
                    </div>
                    <hr className="title-hr"/>

                    <h3><strong> @Your Recipe!</strong> </h3>

                    <ul className="display-recipe-details">
                        <div className="display-recipe-details-row1">
                            <li>
                                <span className="display-icon">
                                    <Icon icon={alarmIcon} />
                                </span>

                                <div className="display-cook-time-wrapper">
                                    <span className="display-value">
                                        {totalCookTime} 
                                    </span>
                                    <span className="display-recipe-minutes-title">
                                        Minutes
                                    </span>
                                </div>
                            </li>

                            <li>
                                <span className="display-icon">
                                    <Icon icon={peopleIcon} />
                                </span>
                                <div className="display-cook-time-wrapper">
                                    <span className="display-value">
                                        {servingSize}                                
                                    </span> 
                                    <span className="display-recipe-difficulty-title" >Serving Size</span>
                                </div>
                            </li>

                            <li>  
                                <span className="display-icon">
                                    <Icon icon={warningAlt} />
                                </span>
                                <div className="display-difficulty-wrapper">
                                    <span className="display-value">
                                        {difficulty}/10
                                    </span>
                                    <span className="display-recipe-difficulty-title">
                                        Difficulty
                                    </span>
                                </div>
                            </li>
                        </div>

                        <hr className="display-hr"/>

                        <li className="display-large-input-wrapper">
                            <span className="display-icon">
                                <Icon icon={baselineDescription} />
                            </span>
                            <span className="display-value">
                                <h3>Description</h3>
                                <p>{description}</p>
                            </span>
                        </li>

                        <hr className="display-hr"/>

                        <li className="display-large-input-wrapper">
                            <span className="display-icon">
                                <Icon icon={listSolid} />
                            </span>
                            <span className="display-value">
                                <h3>Ingredients</h3>
                                <p>{ingredients}</p>
                            </span>
                        </li>

                        <hr className="display-hr"/>

                        <li className="display-large-input-wrapper">
                            <span className="display-icon">
                                <Icon icon={utensilsAlt} />
                            </span>
                            <span className="display-value">
                                <h3>Equipment Needed</h3>
                                <p>{equipment}</p>
                            </span>
                        </li>
                        <hr className="display-hr" />


                        <li className="display-large-input-wrapper">
                            <span className="display-icon">
                                <Icon icon={stepsIcon} />
                            </span>
                            <span className="display-value">
                                <h3>Steps</h3>
                                <ul className="step-list-container">
                                    {steps.map((steps, index) => (
                                        <li className="steps-list">{ index + 1 }: { steps }</li>
                                    ))}
                                </ul>
                            </span>
                        </li>
                    </ul>

                    <div className="button">
                        <DeleteButton id={ _id } />
                        <button 
                            className="editButton"
                            onClick={() => setEditToggle(prevToggle => !prevToggle)}
                        >
                            Edit
                        </button>
                    </div>


                </>
            :   
                // if( type === "personal" && editTog === true)                           
                <>
                    <RecipeForm 
                        editToggle={editToggle}
                        setEditToggle={setEditToggle}
                        _id={_id}

                        title={title}
                        description={description}
                        difficulty={difficulty}
                        ingredients={ingredients}
                        totalCookTime={totalCookTime}
                        equipment={equipment}
                        imgUrl={imgURL}
                        servingSize={servingSize}
                        steps={steps}
                    />                    
                </>
            : 
                // if( type !== "personal")
                <>
                    <div className='display-recipe-thumb'>
                        <img src={imgURL} alt='recipe-thumbnail' />
                    </div>

                    <div className="display-recipe-title-wrapper">
                        <h2 className="display-recipe-title">{title}</h2>
                    </div>

                    <hr className="title-hr"/>

                    <h3>By: <strong> @{authorName} </strong> </h3>

                    <ul className="display-recipe-details">
                        <div className="display-recipe-details-row1">
                            <li>
                                <span className="display-icon">
                                    <Icon icon={alarmIcon} />
                                </span>

                                <div className="display-cook-time-wrapper">
                                    <span className="display-value">
                                        {totalCookTime} 
                                    </span>
                                    <span className="display-recipe-minutes-title">
                                        Minutes
                                    </span>
                                </div>
                            </li>

                            <li>
                                <span className="display-icon">
                                    <Icon icon={peopleIcon} />
                                </span>
                                <div className="display-cook-time-wrapper">
                                    <span className="display-value">
                                        {servingSize}                                
                                    </span> 
                                    <span className="display-recipe-difficulty-title" >Serving Size</span>
                                </div>
                            </li>

                            <li>  
                                <span className="display-icon">
                                    <Icon icon={warningAlt} />
                                </span>
                                <div className="display-difficulty-wrapper">
                                    <span className="display-value">
                                        {difficulty}/10
                                    </span>
                                    <span className="display-recipe-difficulty-title">
                                        Difficulty
                                    </span>
                                    
                                </div>
                            </li>
                        </div>

                        <hr className="display-hr"/>

                        <li className="display-large-input-wrapper">
                            <span className="display-icon">
                                <Icon icon={baselineDescription} />
                            </span>
                            <span className="display-value">
                                <h3>Description</h3>
                                <p>{description}</p>
                            </span>
                        </li>
            
                        <hr className="display-hr"/>

                        <li className="display-large-input-wrapper">
                            <span className="display-icon">
                                <Icon icon={listSolid} />
                            </span>
                            <span className="display-value">
                                <h3>Ingredients</h3>
                                <p>{ingredients}</p>
                            </span>
                        </li>

                        <hr className="display-hr"/>


                        <li className="display-large-input-wrapper">
                            <span className="display-icon">
                                <Icon icon={utensilsAlt} />
                            </span>
                            <span className="display-value">
                                <h3>Equipment Needed</h3>
                                <p>{equipment}</p>
                            </span>
                        </li>
                        <hr className="display-hr" />


                        <li className="display-large-input-wrapper">
                            <span className="display-icon">
                                <Icon icon={stepsIcon} />
                            </span>
                            <span className="display-value">
                                <h3>Steps</h3>
                                <ul className="step-list-container">
                                    {steps.map((steps, index) => (
                                        <li className="steps-list">{ index + 1 }: { steps }</li>
                                    ))}
                                </ul>
                            </span>
                        </li>
                    </ul>
                </>
            } 
        </div>
    )
}

