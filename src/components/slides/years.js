import React, { Component } from 'react';
// import { formatUSD } from '../../utils/utils';
import Slider from 'rc-slider';
import './years.css';

export default class Years extends Component {
	render() {
		const { handlers: { change, click }, state: { years }, step } = this.props;

		return <div className='slide' key={ step } >
			<div className='slide-content'>
				<h1>In how many years would you like to retire:</h1>
				<div className='calendar-container'>
					<div className="calendar">
						<div className="cal-content">
							<span className='years'>{ years }</span>
							<span className="years-text">Years</span>
						</div>
					</div>
				</div>
				<div className='slider-container'>
					<h3>1<span>year</span></h3>
					<Slider
						min={ 1 }
						max={ 50 }
						step={ 1 }
						tipFormatter={ null }
						defaultValue={ isNaN(years) ? '' : years }
						onChange={ change }
					/>
					<h3>50<span>years</span></h3>
				</div>
				<button onClick={ click }>Continue</button>
			</div>
		</div>;
	}
};
