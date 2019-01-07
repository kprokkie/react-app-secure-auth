import auth0 from 'auth0-js';

export default class Auth {
    constructor(history) {
        this.history = history;
        this.userProfile = null;
        this.auth0 = new auth0.WebAuth({
            domain: 'kprokkie-dev.auth0.com',
            clientID: 'LCIDwemZOslQrTPB6p4dxzM0A4AJDx0Y',
            redirectUri: 'http://localhost:3000/callback',
            responseType: 'token id_token',
            scope: 'openid profile email',
            audience: 'http://localhost:3001/'
        });
    }

    login = () => {
        // redirect the browser to Auth0 login page
        this.auth0.authorize();
    }

    handleAuthentication = history => {
        // aunthentication via parsing the url
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
                history.push('/');
                // this.history.push('/');
            } else if (err) {
                history.push('/');
                // this.history.push('/');
                alert(`Error: ${err.error}. Check log for further details.`);
                console.log(err);
            }
        });
    }

    setSession = authResult => {
        // console.log(authResult);
        // set time that access token will expire
        const expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());

        // set token to local storage
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.accessToken);
        localStorage.setItem('expires_at', expiresAt);
    }

    isAuthenticated = () => {
        // get time that access token will expire
        const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }

    logout = () => {
        // remove token to local storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        this.userProfile = null;
        // this.history.push('/');
        this.auth0.logout({
            clientID: 'LCIDwemZOslQrTPB6p4dxzM0A4AJDx0Y',
            returnTo: 'http://localhost:3000/'
        });
    }

    getAccessToken = () => {
        const accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            throw new Error('No access token found.');
        }
        return accessToken;
    }

    getUserProfile = cb => {
        if (this.userProfile) return cb(this.userProfile);
        this.auth0.client.userInfo(this.getAccessToken(), (err, profile) => {
            if (profile) this.userProfile = profile;
            cb(profile, err);
        });
    }

}