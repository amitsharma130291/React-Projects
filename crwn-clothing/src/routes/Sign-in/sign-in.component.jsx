import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils" 

 const SignIn = () =>{
    const logGoogleUser = async() => {
        const {user} = await signInWithGooglePopup()
        createUserDocumentFromAuth(user)
        
    }
    return <>
        <h1>Sign In</h1>
        <button onClick={logGoogleUser}>Sign in with google </button>
    </>
    
    
}

export default SignIn;