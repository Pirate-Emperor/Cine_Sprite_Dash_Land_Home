import { createContext,useContext,useEffect,useState } from "react";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth'
import {auth,db} from "../Firebase.js"
import {setDoc,doc} from "firebase/firestore"

const AuthContext = createContext();

export function AuthContextProvider ({children}){
    const [user,setUser]= useState({})

    function signUp(email,password,name,cname){
         createUserWithEmailAndPassword(auth,email,password)
         setDoc(doc(db,'users',email),{
             full_name: name,
             savedShows: [],
             cname: cname
         }) 
    }

    function logIn (email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }

    function logOut(){
        signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe();
        }
    })
    return (
        <AuthContext.Provider value={{signUp,logIn,logOut,user}}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth (){
    return useContext(AuthContext)
}