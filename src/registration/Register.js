import React, {useState, useEffect} from 'react'
import fire from '../fire'

function Register() {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [hasAccount, sethasAccount] = useState('');


    const clearImputs = () => {
        setEmail("")
        setPassword("")
    }

    const clearErrors = () => {
        setEmailError("")
        setPaswordErrors("")
    }

const handelLogin = () => {
    clearErrors()
    fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(err => {
        switch(err.code) {
            case "auth/invalid-email":
                case "auth/user-disabeled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                        case "auth/weak-password":
                            setPasswordError(err.message);
                            breack;
        }
    })
}


const handleSignup = () => {
    clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(err => {
        switch(err.code) {
            case "auth/email-already-in-use":
                case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                        case "auth/wrong-password":
                            setPasswordError(err.message);
                            breack;
        }
    })

}

const handleLogout =() => {
    fire.auth().signOut();
}

const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
        if (user) {
            clearImputs();
            setUser(user);
        } else {
            setUser("")
        }
    })
}


useEffect(() => {
    authListener();
}, [])

    return (
        <div>
            hiii
        </div>
    )
}

export default Register
