import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ReduxPromise from 'redux-promise';

import AppIndex from './components/app-index';
import About from './components/about';
import Navigation from './components/navigation';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
	<BrowserRouter>
		<div>
			<Switch>
				<Route path="/about" component={About} />
				<Route path="/" component={AppIndex} />
			</Switch>
		</div>
	</BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
