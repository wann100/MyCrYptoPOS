/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import firebase from "firebase";
import config from "../../tools/firebaseConfig";

const app = firebase.initializeApp(config);
const auth = app.auth();
const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();


/**
 * 
 */
 const signInWithGoogle = async () => {
   try {
     const res = await auth.signInWithPopup(googleProvider);
     const user = res.user;
     const query = await db
       .collection("users")
       .where("uid", "==", user.uid)
       .get();
     if (query.docs.length === 0) {
       await db.collection("users").add({
         uid: user.uid,
         name: user.displayName,
         authProvider: "google",
         email: user.email,
       });
     }
   } catch (err) {
     console.error(err);
     alert(err.message);
   }
 };

 type LoginInfo ={
    email:string,
    password:string
 }
 const signInWithEmailAndPassword = async (loginInfo:LoginInfo) => {
    try {
      await auth.signInWithEmailAndPassword(loginInfo.email, loginInfo.password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };


 const sendPasswordResetEmail = async (email:string) => {
    try {
      await auth.sendPasswordResetEmail(email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  const logout = () => {
    auth.signOut();
  };

  export {
    auth,
    db,
    signInWithGoogle,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    logout,
  };