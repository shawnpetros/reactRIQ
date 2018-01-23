import React from 'react';
import './index.css';
import Stepper from '../stepper';

export default ({ step }) => <div className="footer">
	<Stepper step={ step } />
</div>;
