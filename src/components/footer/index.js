import React, { Component } from 'react';
import './footer.css';
import Stepper from '../stepper';

export default class Footer extends Component {
	render() {
		return <div className="footer">
			<Stepper step={ this.props.step } />
		</div>;
	}
};
