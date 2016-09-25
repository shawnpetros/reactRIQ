import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import ToolMain from './components/toolMain';
import Income from './components/slides/income';
import Retire from './components/slides/retireIncome';
import Years from './components/slides/years';
import Saved from './components/slides/saved';
import Calcs from './components/slides/calcs';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			step: 1,
			income: 55000,
			years: 25,
			saved: 0,
			retireIncomePercent: 100
		}
	}

	handleClick(e) {
		let step = this.state.step + 1;

		let elem = document.querySelector('.rc-slider-tooltip');
		if (elem) {
			elem.parentNode.parentNode.parentNode.removeChild(elem.parentNode.parentNode);
		}

		if (step === 6) {
			step = 1;
		}

		this.setState({ step });
	}

	handleChange(e) {
		let key, val;
		if (typeof e !== 'object' && this.state.step === 2) {
			key = 'retireIncomePercent';
			val = e * 100;
		} else if (typeof e !== 'object' && this.state.step === 3) {
			key = 'years';
			val = e;
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
				mainContent = <Income handlers={ handlers } state={ this.state } key={ step } />;
				break;
			case 2:
				mainContent = <Retire handlers={ handlers } state={ this.state } key={ step } />;
				break;
			case 3:
				mainContent = <Years handlers={ handlers } state={ this.state } key={ step } />;
				break;
			case 4:
				mainContent = <Saved handlers={ handlers } state={ this.state } key={ step } />;
				break;
			case 5:
				mainContent = <Calcs handlers={ handlers } state={ this.state } key={ step } />;
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
