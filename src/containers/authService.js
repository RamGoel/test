import http from '../http-common'


export const login = (email, password) => {
    console.log("login", email)
    const res = http.post('/userlogin', {email, password})
    return res;
}
