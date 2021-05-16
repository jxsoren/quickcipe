import React, { useState, useContext } from 'react'
import AuthForm from './AuthForm.js'
import { UserContext } from '../../context/UserProvider.js'
import logo2 from './logo2.png'
import './AuthForm.css'

const initInputs = { username: "", password: "" }

export default function Auth(){
  const [inputs, setInputs] = useState(initInputs)
  const [toggle, setToggle] = useState(false)

  const { signup, login, errMsg, resetAuthErr } = useContext(UserContext)

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSignup(e){
    e.preventDefault()
    signup(inputs)
    console.log(inputs)
  }

  function handleLogin(e){
    e.preventDefault()
    login(inputs)
    console.log(login(inputs))
    console.log(inputs)
  }

  function toggleForm(){
    setToggle(prev => !prev)
    resetAuthErr()
  }

  return (
    <div className="form-v9">
      <div className="page-content">
        <div className="form-v9-content">
          <img 
            alt=''
            src={logo2}
            className="logo"
            id="front-logo"
          />

          <div className="form-detail">
            { !toggle ?
              <div className="form-row-total">
                <AuthForm 
                  handleChange={handleChange}
                  handleSubmit={handleSignup}
                  inputs={inputs}
                  btnText="Sign up"
                  errMsg={errMsg}
                />
                <p 
                  className="toggleText"
                onClick={toggleForm}>Already a member?</p>
              </div>
            :
              <div className="form-row-total">
                <AuthForm 
                  handleChange={handleChange}
                  handleSubmit={handleLogin}
                  inputs={inputs}
                  btnText="Login"
                  errMsg={errMsg}
                />
                <p 
                  className="toggleText"
                onClick={toggleForm}>Not a member?</p>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}