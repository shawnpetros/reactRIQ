import React from 'react';
import ReactDOM from 'react-dom';
import Main from './index';

it('main component renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Main />, div);
});
