const crypto = require('crypto-js');


const base64Url = (str) => {
    return str.toString(crypto.enc.Base64).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');

}

const generateVerifier = () => {
    console.log(base64Url(crypto.enc.Base64.stringify(crypto.lib.WordArray.random(32))));
    return base64Url(crypto.enc.Base64.stringify(crypto.lib.WordArray.random(32)));
}

const generateCodeChallenge = () => {
    const codeVerifier = sessionStorage.getItem('codeVerifier');
    return base64Url(crypto.SHA256(codeVerifier));
}

export {
    base64Url,
    generateVerifier,
    generateCodeChallenge
}