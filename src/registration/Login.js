import React from 'react'
import './style.css'

export const Login = (props) => {


const {
email,
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
        <div className="base-container">
           <div className="header">LogIn</div>
           <div className="content">
               <div className="image">
                   <img src="data:image/jpeg;base64,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"/>
               </div>
               <div className="form">
                   <div className="form-group">
            <lable htmlFor="username">Username</lable>
            <input
            type="text"
            placeholder="username"
            autoFocus
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <p className="errorMsg">{emailError}</p>
            </div>
            <div className="form-group">
            <lable htmlFor="password">Password</lable>
            <input
            type="password"
            placeholder="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <p className="errorMsg">{passwordError}</p>
            </div>
            </div>
           </div>
           
            <div>
                <div className="footer">
               {hasAccount ? (
                   <>
                   <button className="btn" onClick={handleLogin}>Sign in</button>
                   <p>Have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
                   </>

               ) : (
                <>
                <button onClick={handleSignup} className="btn">Register</button>
                <p>Don't have an account ? <span onClick={() => setHasAccount(!hasAccount) }>Register</span></p>
                </>


               )}
             </div>
           </div>
        </div>
    )
}
