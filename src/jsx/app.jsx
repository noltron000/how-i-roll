import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './home.jsx';
import HealthCheck from './healthcheck.jsx';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Switch>
						<Route path="/" component={Home} exact/>
						<Route path="/healthcheck" component={HealthCheck}/>
						<Route component={Error}/>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
