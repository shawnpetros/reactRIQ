import React from 'react';
import './index.css';

export default ({ step }) => <div className="stepper">
	<ul>
		<li className={ `step ${ step === 1 ? 'current' : '' }` }></li>
		<li className={ `step ${ step === 2 ? 'current' : '' }` }></li>
		<li className={ `step ${ step === 3 ? 'current' : '' }` }></li>
		<li className={ `step ${ step === 4 ? 'current' : '' }` }></li>
		<li className={ `step ${ step === 5 ? 'current' : '' }` }></li>
	</ul>
</div>;
