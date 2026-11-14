import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './home.jsx';
import HealthCheck from './healthcheck.jsx';

function NotFound() {
	return <h1>Page not found</h1>;
}

class App extends Component {
	render() {
		return (
			<BrowserRouter basename={import.meta.env.BASE_URL}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/healthcheck" element={<HealthCheck />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		);
	}
}

export default App;
