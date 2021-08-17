import React, {useState, useEffect} from 'react'
import fire from '../fire'

function Register() {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setpasswordError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [hasAccount, sethasAccount] = useState('');



const handelLogin = () => {
    fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(err => {
        switch(err.code) {
            case "auth/invalid-email":
                case "auth/user-disabeled":
                    case "auth/user-not-found":
                        setEmaiError(err.message);
                        break;
                        case "auth/wrong-password":
                            setPasswordError(err.message);
                            breack;
        }
    })
}



    return (
        <div>
            hiii
        </div>
    )
}

export default Register
