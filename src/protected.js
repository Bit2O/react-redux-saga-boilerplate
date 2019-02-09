import React, { Component } from 'react'
import keycloakJSON from './keycloakk.js'
import { connect } from 'react-redux'
// import * as Keycloak from './keycloak'

class Protected extends Component {

    state = {
        authenticated: false,
        keycloak: null
    }

    componentDidMount() {
        const keycloak = window.Keycloak(keycloakJSON)
        
        keycloak.init({onLoad: 'login-required'}).success(authenticated => {
            this.setState({ keycloak: keycloak, authenticated: authenticated })
        })
    }

    render() {
        console.log('protected.js: ', this.state, this.props)
        if (this.state.keycloak) {
            if (this.state.authenticated) return (
              <div>
                <p>This is a Keycloak-secured component of your application. You shouldn't be able
                to see this unless you've authenticated with Keycloak.</p>
              </div>
            ); else return (<div>Unable to authenticate!</div>)
        }
        return (
        <div>Initializing Keycloak...</div>
        );
    }

}

function mapStateToProps(state) {
    return {
        userAuth: state.userAuth
    }
}

export default connect (mapStateToProps)(Protected)