// a library to wrap and simplify api calls
import Api from './PhiApi'



class KanonUser {
    constructor(options, data = {}) {
        this.phiRef = options

        this.login = function* (that, credentials) {

            let response = yield Api.userLogin(credentials)
            if (response.ok && response.data) {

            }
            return response;
        }


    }

}


export default KanonUser