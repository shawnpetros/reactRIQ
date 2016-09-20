import React, { Component } from 'react';
import './tool-main.css';

export default class Main extends Component {
	render() {
		return <div className='tool-main'>{ this.props.children }</div>;
	}
};
