import User from './KanonUser'
import Api from './KanonApi'


class Kanon {

    constructor() {

        this.initialize = (options) => {
            //console.log(options)
            this.apiUrl = (options && options.apiUrl) ? options.apiUrl : 'api.something.com'
            //this.apiPort = (options && options.apiPort) ? options.apiPort : 8080
            this.Storage = (options && options.storage) ? options.storage : window.sessionStorage
            this.User = new User(this)
            this.apiProtocol = (options && options.apiProtocol) ? options.apiProtocol : 'http://'
            Api.initialize(this.apiProtocol + this.apiUrl, Api)       
        }

        this.getSession = () => {
            //console.log("getSession: ")
            let sessionToken = this.Storage.getItem('sessionToken')
            if (sessionToken) {
                sessionToken = JSON.parse(sessionToken)
                Api.setToken(sessionToken)
            }
            return sessionToken
        }

        this.setSession = (token) => {
            this.Storage.setItem('sessionToken', JSON.stringify(token))
        }

        this.removeSession = () => {
            this.Storage.removeItem('sessionToken')
        }
    }

}

export default new Kanon()






