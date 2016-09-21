import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import ToolMain from './components/toolMain';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { formatUSD } from './utils/utils';

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
			step = 5;
		}

		this.setState({ step });
	}

	handleChange(e) {
		console.dir(e.target.name);
		const key = e.target.name;
		let val = parseInt(e.target.value, 10);

		if (isNaN(val)) {
			val = 0;
		}

		this.setState({ [key]: val });
		console.log(this.state);
	}

	componentWillReceiveProps(nextProps) {
		// nextProps.state.income
	}

	render() {
		const { step } = this.state;
		let mainContent;

		switch (step) {
			case 1:
				mainContent = <div className='slide'>
					<div className='slide-content'>
						<h1>Please enter your total income:</h1>
						<p>This tool will take into account inflation automatically.</p>
						<input
							type='text'
							name='income'
							onChange={ this.handleChange.bind(this) }
							value={ isNaN(this.state.income) ? '' : this.state.income }
							placeholder='$ 55,000'
						/>
						<button onClick={ this.handleClick.bind(this) }>Continue</button>
					</div>
				</div>;
				break;
			case 2:
				const monthly = formatUSD(parseFloat(this.state.income / 12 * this.state.retireIncomePercent / 100).toFixed(2));
				console.log(monthly, this.state.retireIncomePercent);
				mainContent = <div className='slide'>
					<div className='slide-content'>
						<h1>How much of your current salary do you want to replace:</h1>
						<h3>
							<span className='fa fa-usd' style={ { position: 'relative', top: -4 } }></span>
							<span className='monthly'> { monthly } /</span>
							<span className='secondary'> Month</span>
						</h3>
						<p>This is your current income per month. Use it as a starting point for how much money you will need in retirement</p>
						<input
							type='text'
							name='retireIncomePercent'
							onChange={ this.handleChange.bind(this) }
							value={ isNaN(this.state.retireIncomePercent) ? '' : this.state.retireIncomePercent }
							placeholder='100%'
						/>
						<button onClick={ this.handleClick.bind(this) }>Continue</button>
					</div>
				</div>;
				break;
			case 3:
				mainContent = <div className='slide'>
					<button onClick={ this.handleClick.bind(this) }>Continue</button>
				</div>;
				break;
			case 4:
				mainContent = <div className='slide'>
					<button onClick={ this.handleClick.bind(this) }>Continue</button>
				</div>;
				break;
			case 5:
				mainContent = <div className='slide'>
					<button onClick={ this.handleClick.bind(this) }>Continue</button>
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
							transitionName='bounce'
							transitionEnterTimeout={ 300 }
							transitionLeaveTimeout={ 300 }
						>
							{ mainContent }
						</ReactCSSTransitionGroup>
					</ToolMain>
				<Footer step={ this.state.step } />
			</div>
		);
	}
}

export default App;
