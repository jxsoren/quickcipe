import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import UserProvider from './context/UserProvider'
import RecipeProvider from './context/RecipeProvider'

const root = document.getElementById('root')

ReactDOM.render(
    <UserProvider>
        <RecipeProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </RecipeProvider>
    </UserProvider>,
    root
)

