import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
	render() {
		return <div className='header'>
			<div className='edit-variables'></div>
			<div className='share-start-over'></div>
			<div className='title'>{ 'R:IQ Tool' }</div>
		</div>;
	}
};
