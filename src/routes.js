import React  from 'react';
import {Route} from 'react-router';
import App from './App';

export default (
	<div>
		<Route path="/" component={App}>
			<Route component={App}></Route>
		</Route>
	</div>
);
