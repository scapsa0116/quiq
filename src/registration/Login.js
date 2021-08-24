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
        <div className="base-container">
           <div className="header">LogIn</div>
           <div className="content">
               <div className="image">
                   <img src=""/>
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
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <p className="errorMsg">{passwordError}</p>
            </div>
            </div>
           </div>
           
            <div className="footer">
               {hasAccount ? (
                   <>
                   <button className="btn" onClick={handleLogin}>Sign in</button>
                   <p>Dont't have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                   </>

               ) : (
                <>
                <button onClick={handleSignup}>Sign up</button>
                <p>Have an account ? <span onClick={() => setHasAccount(!hasAccount) }>Sign in</span></p>
                </>


               )}

           </div>
        </div>
    )
}
