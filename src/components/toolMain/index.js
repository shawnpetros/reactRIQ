import React, { Component } from 'react';
import './tool-main.css';

export default class Main extends Component {
	render() {
		return <div className='tool-main'>
			<div className='background-holder'></div>
			<div className='background-overlay'></div>
			{ this.props.children }
		</div>;
	}
};
