/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { initializeApp } from "firebase/app";
import config from "../../tools/firebaseConfig";
import { getDatabase,ref,set,get, } from "firebase/database";
import { getAuth, sendSignInLinkToEmail,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,sendPasswordResetEmail } from "firebase/auth";
const app = initializeApp(config);
const auth = getAuth();
const db = getDatabase();

const googleProvider = new GoogleAuthProvider();


/**
 * 
 */
 const signInWithGoogle = async () => {
   try {
     const res = await signInWithPopup(auth,googleProvider);
     const user = res.user;


     get(ref(db,'users/'+user.uid)).then((snapshot)=>{
         if(snapshot.exists()){

            console.log("whoo logged in and this user exists")
         } else{
             set(ref(db,'users/'+user.uid),{
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,

             })
         }



     })

 } catch(e){
     console.log(e)
 }
}

 type LoginInfo ={
    email:string,
    password:string
 }
 const FireBasesignInWithEmailAndPassword = async (loginInfo:LoginInfo) => {
    try {
      await signInWithEmailAndPassword(auth,loginInfo.email, loginInfo.password).then(
        (userCredentials)=>{

            const user = userCredentials.user
            // check if user already exists in database
            get(ref(db,'users/'+user.uid)).then((snapshot)=>{
                if(snapshot.exists()){
        
                   console.log("whoo logged in and this user exists")
                } else{
                    set(ref(db,'users/'+user.uid),{
                       uid: user.uid,
                       name: user.displayName,
                       authProvider: "google",
                       email: user.email,
        
                    })
                }
        
        
        
            })
        }
      );



    
    } catch (err) {
      console.error(err);
    }
  };

  const signInAutomatically = async(auth:any,email:any,actionCodeSettings:any)=>{
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
      // The link was successfully sent. Inform the user.
      // Save the email locally so you don't need to ask the user for it again
      // if they open the link on the same device.
      window.localStorage.setItem('emailForSignIn', email);
      // ...
    })
    .catch((error) => {
      const errorCode  = error.code;
      const errorMessage = error.message;
      // ...
    });
  }

 const sendPasswordResetEmail = async (email:string) => {
    try {
      await sendPasswordResetEmail(email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
   
    }
  };
  const logout = () => {
    auth.signOut();
  };

  export {
    auth,
    db,
    signInWithGoogle,
    FireBasesignInWithEmailAndPassword,
    sendPasswordResetEmail,
    logout,
  };