import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Repositories from './pages/Repositories'
import Favorites from './pages/Favorites'

function Routes() {
	return (
		<BrowserRouter>
			<Route path="/" exact component={Landing} />
			<Route path="/repositories/:username" exact component={Repositories} />
			<Route path="/favorites/:username" exact component={Favorites} />
		</BrowserRouter>
	)
}

export default Routes;