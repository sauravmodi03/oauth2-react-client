const token = () => {
    const codeVerifier = sessionStorage.getItem('codeVerifier');
    console.log(codeVerifier);
    const code = sessionStorage.getItem('code');
    return `http://localhost:9000/oauth2/token?grant_type=authorization_code&client_id=client&code=${code}&redirect_uri=http://localhost:3000/authorize&code_verifier=${codeVerifier}`;
}

export default token;