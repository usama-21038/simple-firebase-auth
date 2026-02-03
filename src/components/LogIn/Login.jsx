import React, { use } from 'react'; 
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';
import { useState } from 'react';
const Login = () => {
    const [user,setUser]=useState(null);
    const provider=new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        console.log('Google sign-in clicked');

        signInWithPopup(auth, provider)
        .then(result=>{
            console.log('User signed in:', result);
            // user jhokon properly login hobe thokon result er modde je value ta ase saita setUser diye user state e set kore dibo
            setUser(result.user);
        })
        .catch(error=>{
            console.log('Error during sign-in:', error);
        })
    }
 
    return (
        <div>
            <h1>Pleace login</h1>
            <button onClick={handleGoogleSignIn} className='p-3 bg-amber-200 m-5 text-black rounded-2xl hover:bg-amber-600 hover:text-white'>Sign in with google</button>

            {
                // if user then show user info
                user && 
            <div>
                <h3>{user?.displayName}</h3>
                <p>{user?.email}</p>
                <img src="{user.photoURL}" alt="" />

            </div>
            }

        </div>
    );
};

export default Login;