import React, { useEffect, useState } from 'react'
import resourceurl from '../config/demo';

export default function Home() {

    const [demo, setDemo] = useState('default');

    useEffect(() => {
        console.log('Home');
        const token = sessionStorage.getItem('id_token');
        const headers = new Headers();
        headers.set('Content-type', 'text/plain');
        headers.set('Authorization', `Bearer ${token}`);

        const url = resourceurl();

        fetch(url, {
            'method': 'GET',
            'mode': 'cors',
            headers
        }).then(async (res) => {
            const demoStr = await res.text();
            console.log("demo ====", demoStr);
            setDemo(demoStr);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <>
            <h1>
                Home
            </h1>
            <p> {demo}</p>
        </>

    )
}
