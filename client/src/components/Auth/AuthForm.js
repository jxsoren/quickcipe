import React from 'react'
import './AuthForm.css'

export default function AuthForm(props){
  const {
    handleChange, 
    handleSubmit, 
    btnText,
    errMsg, 
    inputs: {
      username, 
      password
    } 
  } = props

  
  return (
    <>
      <div className="form-row">
        <form 
        onSubmit={handleSubmit}>

          <input 
            type="text" 
            value={username} 
            name="username" 
            onChange={handleChange} 
            placeholder="Username"
            className="input-text"
            id="your-email" 
          />

          <input 
            type="password" 
            value={password} 
            name="password" 
            onChange={handleChange} 
            placeholder="Password"
            className="input-text"
            id="password"
            />
            
        <div className="form-row-last">
          <button
            className="register"
            >{ btnText }</button>
            <p style={{color: "red"}}>{ errMsg }</p>
        </div>
        </form>
        
      </div>
      
      </>

  )
}