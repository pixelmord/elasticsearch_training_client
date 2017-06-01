import { h, Component } from 'preact';
import { Router } from 'preact-router';

import {
  SearchkitManager,
  SearchkitProvider
} from "searchkit";

const searchkit = new SearchkitManager("http://localhost:9200/products/product/");

import Header from './header';
import Home from './home';
import Profile from './profile';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<SearchkitProvider  searchkit={searchkit}>
				<div id="app">
					<Header />
					<Router>
						<Home path="/" />
					</Router>
				</div>
			</SearchkitProvider>
		);
	}
}
