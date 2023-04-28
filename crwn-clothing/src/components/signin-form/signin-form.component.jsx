import { useState } from "react";
import  { signInAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils"
import FormInput from "../form-input/form-input.component"
import "./signin-form.styles.scss"
import Button from "../button/button.component";

const defaultFormFields = {   
    email : "",
    password: "",   
}

const SignInForm = () => {
    const [formFields, setFormFields ] = useState(defaultFormFields);
    const { email, password } = formFields

    const setSignUpFormEmpty = () => {
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async() => {
        const {user} = await signInWithGooglePopup()
        createUserDocumentFromAuth(user)
        
    }
    
    const handleFormSubmit = async(event) => {
        event.preventDefault();      
       
        try{
            const { user } = await signInAuthUserWithEmailAndPassword(email, password)
            console.log(user)
            setSignUpFormEmpty()   
        }catch(error){
           switch(error.code){
            case 'auth/wrong-password' : 
                alert('Invalid Credentials');
                break;
            case 'auth/user-not-found':
                alert("No user associated with this email");
                break;
            default: 
                console.log(error)
           }
        }           
    }

    
    const handleInputChange = (event) => {
        const {name, value} = event.target
        setFormFields({...formFields, [name] : value})
    } 

    return(
        <div className="signup-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={ handleFormSubmit }>
                <FormInput label="Email" type="e-mail" required name="email" onChange={handleInputChange} value={email} />
                <FormInput label="Password" type="password" required name="password" onChange={handleInputChange} value={password} />
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button  type="button" buttonType="google" onClick = {signInWithGoogle}>Google Sign In</Button>
                </div>
               
            </form>
        </div>
    )
}

export default SignInForm;