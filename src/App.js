import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import ToolMain from './components/toolMain';
import Income from './components/slides/income';
import Retire from './components/slides/retireIncome';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			step: 1,
			income: 55000,
			retireIncomePercent: 100
		}
	}

	handleClick(e) {
		let step = this.state.step + 1;

		if (step === 6) {
			step = 1;
		}

		this.setState({ step });
	}

	handleChange(e) {
		let key, val;
		if (typeof e !== 'object') {
			key = 'retireIncomePercent';
			val = e * 100;
		} else {
			key = e.target.name;
			val = parseInt(e.target.value, 10);
		}

		if (isNaN(val)) {
			val = 0;
		}

		this.setState({ [key]: val });
		console.log(this.state);
	}

	render() {
		const { step } = this.state;
		let mainContent;
		const handlers = {
			change: this.handleChange.bind(this),
			click: this.handleClick.bind(this)
		}

		switch (step) {
			case 1:
				mainContent = <Income classes={ step === 1 ? 'active' : '' } handlers={ handlers } state={ this.state } key={ step } />;
				break;
			case 2:
				mainContent = <Retire classes={ step === 2 ? 'active' : '' } handlers={ handlers } state={ this.state } key={ step } />;
				break;
			case 3:
				mainContent = <div className={ `slide ${step === 3 ? 'active' : ''}` }  key={ step }>
					<button onClick={ this.handleClick.bind(this) }>Continue</button>
				</div>;
				break;
			case 4:
				mainContent = <div className={ `slide ${step === 4 ? 'active' : ''}` } key={ step }>
					<button onClick={ this.handleClick.bind(this) }>Continue</button>
				</div>;
				break;
			case 5:
				mainContent = <div className={ `slide ${step === 5 ? 'active' : ''}` } key={ step }>
					<button onClick={ this.handleClick.bind(this) }>Start Over</button>
				</div>;
				break;
			default:
				mainContent = <span>This is cool</span>;
		}

		return (
			<div className="App">
				<Header />
					<ToolMain>
						<ReactCSSTransitionGroup
							transitionName='active'
							transitionEnterTimeout={ 300 }
							transitionLeaveTimeout={ 300 }
						>
							{ mainContent }
						</ReactCSSTransitionGroup>
					</ToolMain>
				<Footer step={ step } />
			</div>
		);
	}
}

export default App;
