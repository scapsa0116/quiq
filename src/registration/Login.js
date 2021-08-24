import React from 'react'

export const Login = (props) => {


const {email,
setEmail,
password, 
setPassword,
handleLogin,
handleSignup,
hasAccount,
setHasAccount,
emailError,
passwordError} = props;







    return (
        <div className="login">
           <div className="loginContainer">
            <lable>Username</lable>
            <input
            type="text"
            autoFocus
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <p className="errorMsg">{emailError}</p>
            
           </div>
        </div>
    )
}
