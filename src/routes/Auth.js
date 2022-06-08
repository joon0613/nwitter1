import { async } from "@firebase/util";
import React,{useState} from "react"; //eslint-disable-line  no-unused-vars
import { authService, firebaseInstance } from "../fbase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import {GoogleAuthProvider, GithubAuthProvider} from "firebase/auth";
    

/*const Auth = () => <span> Auth </span>; //function componets*/

const Auth =() =>{
    const [email,setEmail] = useState(""); //eslint-disable-line  no-unused-vars
    const [password,setPassword] = useState("");//eslint-disable-line  no-unused-vars
    const [newAccount, setNewAccount] =useState(true); // eslint-disable-next-line 
    const [error, setError] =useState("");
    function onChange(event){
        const {
         target : {name ,value},
        } = event;
        //console.log(value);
         if (name === "email") {
            setEmail(value);
        } else if (name === "password"){
            setPassword(value);
        }   
    };
    const onSubmit = async(event)=>{
        event.preventDefault(); //eslint-disable-line  no-unused-vars 
        try {
         let data;
         const auth =getAuth()
            if(newAccount){
               const data = await createUserWithEmailAndPassword(auth,email ,password);
            } else {
               const data = await signInWithEmailAndPassword(auth,email,password);
            } console.log(data)

        }   catch (error) {
            setError(error.message);
        }
    };
const toggleAccount = () => setNewAccount (prev => !prev);
const onSocialClick = async (event) => {
    const {
     target:{name},
    }=event;
    let provider;
    try{
    if(name === "google") {
        provider = new GoogleAuthProvider();
         const result =await signInWithPopup(authService,provider);
         const credential = GoogleAuthProvider.credentialFromResult(result);
    } else if (name === "github"){
        provider = new GithubAuthProvider();
         const result = await signInWithPopup(authService, provider);
         const credential = GithubAuthProvider.credentialFromResult(result);
    }
    }catch(error){
    console.log(error);
    }
};

 return (
 <div> 
    <form onSubmit= {onSubmit}>
        <input 
            name ="email" 
            type ="email" 
            placeholde="Email" 
            required 
            value= {email}
            onChange={onChange} 
        />
      
        <input 
            name="password"
            type ="password" 
            placeholder="Pasaword" 
            required 
            value= {password}
            onChange={onChange}
        />
        < input type ="submit" value ={newAccount ? "Create Account" : "LOG In"} />
        {error}
        <span onClick = {toggleAccount}>
            {newAccount ? 
            "Sign in":"Create Account"}
        </span>
    </form>
        <div>
            <button onClick={onSocialClick} name ="google">
                Continue with Google </button>
            <button onClick={onSocialClick} name ="github">
                Continue with Github </button>
        </div>
 </div>
 );
};
export default Auth;
