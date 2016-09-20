import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import ToolMain from './components/toolMain';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
					<ToolMain>
						<p className="App-intro">
							To get started, edit <code>src/App.js</code> and save to reload.
						</p>
					</ToolMain>
				<Footer />
			</div>
		);
	}
}

export default App;
