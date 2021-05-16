import React, { useContext, useState } from 'react'
import './App.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import Drawer from './components/Drawer/Drawer.js'
import Backdrop from './components/Drawer/Backdrop.js'
import { Navbar } from './components/Nav/Navbar.js'
import { Footer } from './components/Footer/Footer.js'
import { Home } from './components/Home/Home.js'
import { Profile } from './components/Profile/Profile.js'
import ProtectedRoute from './components/Auth/ProtectedRoute.js'
import { UserContext } from './context/UserProvider.js'
import AuthPage from './components/Auth/AuthPage.js'

const App = () => {
    const [ drawerOpen, setDrawerOpen ] = useState(false)
    const { token, logout, user } = useContext(UserContext)

    const drawerToggler = () => {
        setDrawerOpen(prevDrawerState => !prevDrawerState)
    }

    const backdropHandler = () => {
        setDrawerOpen(false)
        console.log('backdrop handler has just been called')
    }

    let backdrop;
    if(drawerOpen){
        backdrop = <Backdrop 
            handleBackdropClick={backdropHandler} 
        />
    }

    return(
        <>
            <div className="app">
            { token && <Navbar toggle={drawerToggler} token={token} logout={logout} /> }

                <Drawer 
                    show={drawerOpen}
                    handleBackdropClick={backdropHandler}
                />
                {backdrop}
            </div>

            <main>
                <Switch>
                    <Route 
                        exact path='/'
                        render={() => token ? <Redirect to={"/profile"}/> : <AuthPage />}
                    />

                    <ProtectedRoute 
                        exact path='/profile'
                        component={Profile}
                        type="profile"
                        id={user._id}
                        redirectTo="/"
                        token={token}   
                    />

                    <ProtectedRoute 
                        exact path='/home'
                        component={Home}
                        type="home"
                        user={user}
                        redirectTo="/"
                        token={token}   
                    />
                </Switch>
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default App