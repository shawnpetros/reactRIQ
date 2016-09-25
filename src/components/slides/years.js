import React, { Component } from 'react';
import { formatUSD } from '../../utils/utils';
import Slider from 'rc-slider';

export default class Years extends Component {
	render() {
		const { handlers: { change, click }, state: { years }, step } = this.props;

		return <div className='slide' key={ step } >
			<div className='slide-content'>
				<h1>In how many years would you like to retire:</h1>
				<h3>
					<span className='years'>{ years }</span>
				</h3>
				<p>Show the Years here</p>
				<div className='slider-container'>
					<Slider
						min={ 1 }
						max={ 50 }
						step={ 1 }
						tipFormatter={ null }
						defaultValue={ isNaN(years) ? '' : years }
						onChange={ change }
					/>
				</div>
				<button onClick={ click }>Continue</button>
			</div>
		</div>;
	}
};
