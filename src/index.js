import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'babel-polyfill';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import routes from './routes';
import configureStore  from './Store/Store';
// import Phi from './Phi/Phi';
// import Constant from './Phi/Constants.js'
import * as serviceWorker from './serviceWorker';
import App from './App'
import Protected from './protected'
import ProtectedRoute from './ProtectedRoute'
import Public from './public'

const store = configureStore();
// const browserHistory = createBrowserHistory()
// Phi.initialize({apiUrl: Constant.apiHost, apiPort: '', apiProtocol: 'https://'});

console.log("store: ", store)
/* const ProtectedRoute = ({ component: Component, ...rest}) => {
    return (
        <Route {...rest} render={(props) => (
            true
            ?   <Component {...props} />
            :   <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }}/>
        )} />
)} */

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={App}/>
                <Route exact path="/login" component={App}/>
                <ProtectedRoute path="/home" component={Protected} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);
  
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();