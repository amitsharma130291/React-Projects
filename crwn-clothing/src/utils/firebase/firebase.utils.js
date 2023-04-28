// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth"; 
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARvsR5eR6LrVjMnNeMriuHlwAT1S8mQRA",
  authDomain: "crwn-clothing-db-fe914.firebaseapp.com",
  projectId: "crwn-clothing-db-fe914",
  storageBucket: "crwn-clothing-db-fe914.appspot.com",
  messagingSenderId: "572543428931",
  appId: "1:572543428931:web:0038958663eeae5b1227f6"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    "prompt" : "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
    if(!userAuth) return

    const userDocRef = doc(db, "users", userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName, email, createdAt, ...additionalInfo
            });
        }
        catch(error){
            console.log("error creating user",  error.message)
        }
    }
}

export const createAuthUserWithEmailAndPassword = async ( email, password ) => {
    if(!email || !password) return
    return await createUserWithEmailAndPassword(auth, email, password)
}


export const signInAuthUserWithEmailAndPassword = async ( email, password ) => {
    if(!email || !password) return
    return await signInWithEmailAndPassword(auth, email, password)
}

