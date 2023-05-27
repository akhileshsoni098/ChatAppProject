import React from 'react'
import Add from "../img/addAvatar.png"
const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
                <span className='logo'>My Chat App </span>
                <span className='title'>Register</span>
                <form>
                <input type='text' placeholder='display name'/>
                <input type='email' placeholder='email'/>
                <input type='password' placeholder='password'/>
                <input style={{display:"none"}} type='file' id='file'/>
                <label htmlFor="file"><img src={Add} alt="" />
                <span>add an avatar</span>
                </label>
                <button>Sign in</button>
            </form>
            <p>You don't have an account? Register </p>
        </div>
    </div>
  )
}

export default Register