import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


/*import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/auth"; 
*/

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    //databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
    appId: process.env.REACT_APP_APP_ID
  };
  
const firebaseApp = initializeApp(firebaseConfig);

 export const firebaseInstance = getAuth();

 //export const firebaseInstance = firebase;

 export const authService = getAuth(firebaseApp);

