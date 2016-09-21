import React, { Component } from 'react';
import './stepper.css';

export default class Stepper extends Component {
	render() {
		const { step } = this.props;

		return <div className="stepper">
			<ul>
				<li className={ `step ${ step === 1 ? 'current' : '' }` }></li>
				<li className={ `step ${ step === 2 ? 'current' : '' }` }></li>
				<li className={ `step ${ step === 3 ? 'current' : '' }` }></li>
				<li className={ `step ${ step === 4 ? 'current' : '' }` }></li>
				<li className={ `step ${ step === 5 ? 'current' : '' }` }></li>
			</ul>
		</div>;
	}
};
