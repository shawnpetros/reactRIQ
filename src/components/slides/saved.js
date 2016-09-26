import React, { Component } from 'react';
import NumberFormat from 'react-number-format';

export default class Saved extends Component {
	render() {
		const { handlers: { change, click }, state: { saved }, step } = this.props;

		return <div className='slide' key={ step } >
			<div className='slide-content'>
				<h1>How much have you saved for retirement so far:</h1>
				<NumberFormat
					value={ saved }
					thousandSeparator={ true }
					prefix={ '$ ' }
					onChange={ change }
				/>
				<button onClick={ click }>Continue</button>
			</div>
		</div>;
	}
};
