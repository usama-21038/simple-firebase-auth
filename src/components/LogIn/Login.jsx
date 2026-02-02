import React from 'react';

const Login = () => {

    const handleGoogleSignIn = () => {
        console.log('Google sign-in clicked');
    }

    return (
        <div>
            <h1>Pleace login</h1>
            <button onClick={handleGoogleSignIn} className='p-3 bg-amber-200 m-5 text-black rounded-2xl hover:bg-amber-600 hover:text-white'>Sign in with google</button>
        </div>
    );
};

export default Login;