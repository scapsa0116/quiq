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
            <lable>Password</lable>
            <input
            tyep="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <p className="errorMsg">{passwordError}</p>
           </div>
           <div classname="btnContainer">
               {hasAccount ? (
                   <>
                   <button onClick={handleLogin}>Sign in</button>
                   <p>Dont't have an account ? <pan onClick={() => setHasAccount(!hasAccount)}>Sign up</pan></p>
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
