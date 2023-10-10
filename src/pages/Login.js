import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { generateCodeChallenge, generateVerifier } from '../pkce/pkce'

export default function Login() {


    function login() {
        console.log(sessionStorage);
        // if (!sessionStorage.getItem('codeVerifier')) {
        const codeVerifier = generateVerifier();
        sessionStorage.setItem('codeVerifier', codeVerifier);
        const codeChallenge = generateCodeChallenge();
        sessionStorage.setItem('codeChallenge', codeChallenge);

        // }
        console.log(sessionStorage);

    }

    useEffect(() => {
        console.log('login')
    })


    return (
        <div>
            <Link to={'/redirect'} onClick={login()}>Login</Link>
        </div>
    )
}
