import React, { Component } from 'react';
// import logo from './logo.svg';
import './index.css';
import Footer from '../footer';
import Header from '../header';
import ToolMain from '../toolMain';
import Income from '../slides/income';
import Retire from '../slides/retireIncome';
import Years from '../slides/years';
import Saved from '../slides/saved';
import Calcs from '../slides/calcs';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// this is a comment
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			step: 1,
			income: 55000,
			years: 25,
			saved: 0,
			retireIncomePercent: 100,
			headerOpen: false,
		}
	}

	handleClick(e) {
		let step = this.state.step + 1;
		let riqObj = {};

		let elem = document.querySelector('.rc-slider-tooltip');
		if (elem) {
			elem.parentNode.parentNode.parentNode.removeChild(elem.parentNode.parentNode);
		}

		if (step === 6) {
			step = 1;
		}

		if (step === 5) {
			riqObj = this.getCalcs(this.state);
		}

		let { riq, monthlyAdd } = riqObj;

		console.log(this.state);

		this.setState({ step, riq, monthlyAdd });
	}

	getCalcs(state) {
		let { income, years, saved, retireIncomePercent } = state;

		saved = saved || 0;

		let earInflation = this.earCalc(0.0275);
		let earReturns = this.earCalc(0.12);

		let riq = ( income * retireIncomePercent / 100 ) * Math.pow(1 + earInflation, years) / 0.06;

		riq -= ( saved * Math.pow(1 + earReturns, years) );

		let monthlyAdd = ( riq / ( ( Math.pow(1 + earReturns, years) - 1 ) / earReturns ) ) / 12;

		console.log(earReturns, monthlyAdd);

		return {
			riq,
			monthlyAdd
		};
	}

	earCalc(rate, nper = 12) {
		return Math.pow(1 + rate / nper, nper) - 1;
	}

	handleChange(e, value) {
		const { step } = this.state;
		let key, val;
		if (typeof e !== 'object' && this.state.step === 2) {
			key = 'retireIncomePercent';
			val = e * 100;
		} else if (typeof e !== 'object' && this.state.step === 3) {
			key = 'years';
			val = e;
		} else if (value || value === '') {
			key = step === 1 ? 'income' : 'saved';
			val = parseInt(value, 10) || 0;
		} else {
			key = e.target.name;
			val = parseInt(e.target.value, 10);
		}

		if (isNaN(val)) {
			val = 0;
		}

		console.log(this.state);

		this.setState({ [key]: val });
	}

	render() {
		const { step, headerOpen } = this.state;
		let mainContent;
		const handlers = {
			change: this.handleChange.bind(this),
			click: this.handleClick.bind(this),
			// headerClick: this.handleHeaderOpen.bind(this),
			// changeVariables: this.changeVariables.bind(this),
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
				mainContent = <span>{ 'This is cool' }</span>;
		}

		let header;

		// if (headerOpen) {
		// 	header = <HeaderOpen handlers={ handlers } open={ headerOpen } key={ 1 } />;
		// } else {
			header = <Header handlers={ handlers } open={ headerOpen } key={ 0 } />;
		// }

		return (
			<div className="App">
				<ReactCSSTransitionGroup
					transitionName='open'
					transitionEnterTimeout={ 300 }
					transitionLeaveTimeout={ 300 }
				>
					{ header }
				</ReactCSSTransitionGroup>
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
