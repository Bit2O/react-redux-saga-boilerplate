import React from 'react'
import { Route, Redirect } from 'react-router-dom'

class ProtectedRoute extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            auth: true
        }
    }


    render() {
        const { props } = this
        const { component: Component, ...rest } = props
        const { auth } = this.state
        console.log("enter protected route", this.props)
        return(
            <Route {...rest} render={(props) => (
                auth === true
                ?   <Component {...props} />
                :   <Redirect to={{
                        pathname: '/login',
                        state: { from: props.location }
                    }}/>
            )} />
        )
    }
}

export default ProtectedRoute