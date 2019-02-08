// a library to wrap and simplify api calls
import apisauce from 'apisauce'


class Api {
    constructor() {

        this.createNonAuthEndpoint = (baseURL) => apisauce.create({
            // base URL is read from the "constructor"
            baseURL: baseURL + '/',

            // here are some default headers
            headers: {
                'Cache-Control': 'no-cache'
            },
            // 100 second timeout...
            timeout: 10000
        })


        this.createAuthEndpoint = (baseURL) => apisauce.create({
            // base URL is read from the "constructor"
            baseURL: baseURL + '/api/',
            // here are some default headers
            headers: {
                'Cache-Control': 'no-cache'
            },
            // 100 second timeout...
            timeout: 10000
        })


        this.initialize = (baseURL) => {
            this.apiClientNonAuth = this.createNonAuthEndpoint(baseURL)
            this.apiClientAuth = this.createAuthEndpoint(baseURL)
        }

        this.userLogin = (credentials, transform) => {
            //console.log("PhiApi.js, userLogin: ", credentials);
            let response = this.apiClientNonAuth.post('login', credentials)
            //console.log("PhiApi.js", response);
            return response;
        }
    }

}











// let's return back our create method as the default.
export default new Api()