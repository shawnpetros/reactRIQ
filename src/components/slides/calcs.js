import React, { Component } from 'react';

export default class Calcs extends Component {
	render() {
		const { handlers: { change, click }, state: { saved }, step } = this.props;

		return <div className='slide' key={ step } >
			<div className='slide-content'>
				<h1>Your RIQ is:</h1>
				<input
					type='text'
					name='saved'
					onChange={ change }
					value={ isNaN(saved) ? '' : saved }
					placeholder='$ 55,000'
				/>
				<button onClick={ click }>Continue</button>
			</div>
		</div>;
	}
};
