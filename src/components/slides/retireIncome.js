import React, { Component } from 'react';
import { formatUSD } from '../../utils/utils';
import Slider from 'rc-slider';

export default class Retire extends Component {
	render() {
		const { handlers: { change, click }, state: { income, retireIncomePercent }, step } = this.props;
		const monthly = formatUSD(parseFloat(income / 12 * retireIncomePercent / 100).toFixed(2));

		return <div className='slide ret-income' key={ step } >
			<div className='slide-content'>
				<h1>How much of your current salary do you want to replace:</h1>
				<h3>
					<span className='fa fa-usd' style={ { position: 'relative', top: -4 } }></span>
					<span className='monthly'> { monthly } /</span>
					<span className='secondary'> Month</span>
				</h3>
				<p>This is your current income per month. Use it as a starting point for how much money you will need in retirement</p>
				<span className='percentage'>{ retireIncomePercent.toFixed(0) + '%' }</span>
				<div className='slider-container'>
					<h3>modest</h3>
					<Slider
						max={ 2 }
						step={ 0.01 }
						tipFormatter={ null }
						defaultValue={ isNaN(retireIncomePercent) ? '' : retireIncomePercent / 100 }
						onChange={ change }
					/>
					<h3>extravagant</h3>
				</div>
				<button onClick={ click }>Continue</button>
			</div>
		</div>;
	}
};
