import React, { useEffect } from 'react'
import authorize from '../config/authorize';
import { useNavigate, useSearchParams } from 'react-router-dom';
import token from '../config/token';

export default function Redirect() {

    const [searchParams] = useSearchParams();
    var Buffer = require('buffer/').Buffer;
    const navigate = useNavigate();

    useEffect(() => {
        if (searchParams?.get('code')) {
            console.log(searchParams.get('code'));
            sessionStorage.setItem('code', searchParams.get('code'));
            const client = 'client';
            const secret = 'secret';

            const headers = new Headers();
            headers.set('Content', 'application/json');
            headers.set('Authorization', `Basic ${Buffer.from(`${client}:${secret}`).toString('base64')}`);

            const url = token();
            fetch(url, {
                method: 'POST',
                mode: 'cors',
                headers
            }).then(async (res) => {
                const token = await res.json();
                console.log('token ====', token);
                if (token?.id_token) {
                    sessionStorage.setItem('id_token', token.id_token)
                    navigate('/home');
                }
            }).catch((err) => {
                console.log(err);
            })
        } else if (!searchParams?.get('code')) {
            window.location.href = authorize();
        }
    }, []);

    return (
        <p>Redirecting ....</p>
    )
}
