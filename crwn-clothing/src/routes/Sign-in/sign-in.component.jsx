import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils" 
import SignUpForm from "../../components/signup-form/signup-form.component.jsx"
 const SignIn = () =>{
    const logGoogleUser = async() => {
        const {user} = await signInWithGooglePopup()
        createUserDocumentFromAuth(user)
        
    }
    return <>
        <h1>Sign In</h1>
        <button onClick={logGoogleUser}>Sign in with google </button>
        <SignUpForm/>
    </>
    
    
}

export default SignIn;