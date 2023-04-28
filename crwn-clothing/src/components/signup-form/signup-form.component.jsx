import { useState } from "react";
import  { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import FormInput from "../form-input/form-input.component"
import "./signup-form.styles.scss"
import Button from "../button/button.component";

const defaultFormFields = {
    displayName: "",
    email : "",
    password: "",
    confirmPassword: ""
}

const SignUpForm = () => {
    const [formFields, setFormFields ] = useState(defaultFormFields);
    const { email, password, confirmPassword, displayName } = formFields

    const setSignUpFormEmpty = () => {
        setFormFields(defaultFormFields)
    }
    
    const handleFormSubmit = async(event) => {
        event.preventDefault();
       
        if(password !== confirmPassword) {
            alert("password and confirm password do not match")
            return
        }
        try{
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName }) ;
            setSignUpFormEmpty()   
        }catch(error){
            if(error.code === "auth/email-already-in-use"){
                alert("Email already in use. Chose another email")
            }
            console.log("error from signup", error.message)
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
                <FormInput label="Display Name" type="text" required name="displayName" onChange={handleInputChange} value={displayName} />
                <FormInput label="Email" type="e-mail" required name="email" onChange={handleInputChange} value={email} />
                <FormInput label="Password" type="password" required name="password" onChange={handleInputChange} value={password} />
                <FormInput label="Confirm Password" type="password" required name="confirmPassword" onChange={handleInputChange} value={confirmPassword} />
                <Button type="submit">Sign up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;