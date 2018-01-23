import React from 'react';
import './index.css';

export default ({ children }) => <div className='tool-main'>
	<div className='background-holder'></div>
	<div className='background-overlay'></div>
	{ children }
</div>;
