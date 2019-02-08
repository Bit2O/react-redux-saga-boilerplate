import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'babel-polyfill';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
import routes from './routes';
import configureStore  from './Store/Store';
// import Phi from './Phi/Phi';
// import Constant from './Phi/Constants.js'
import * as serviceWorker from './serviceWorker';
import App from './App'

const store = configureStore();
const browserHistory = createBrowserHistory()
// Phi.initialize({apiUrl: Constant.apiHost, apiPort: '', apiProtocol: 'https://'});

ReactDOM.render(
    <Provider store={store}>
        <Router routes={routes} history={browserHistory}>
            <Route path="/" component={App}/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
  
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();