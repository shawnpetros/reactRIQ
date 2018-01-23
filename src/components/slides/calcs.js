import React from 'react';
import { formatUSD } from '../../utils/utils';
import './calcs.css';

export default ({
	handlers: {
		click,
	},
	state: {
		riq,
		monthlyAdd,
	},
	step ,
}) => <div className='slide riq' key={ step } >
	<div className='slide-content'>
		<p>Your RIQ is:</p>
		<h3>{ '$ ' + formatUSD(riq.toFixed(2)) }</h3>
		<p>Your monthly savings requirement is:</p>
		<h3>{ '$ ' + formatUSD(monthlyAdd.toFixed(2)) }</h3>
		<button onClick={ click }>Start Over</button>
	</div>
</div>;
