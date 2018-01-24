import React from 'react';
import ReactDOM from 'react-dom';
import Component from './index';

it('tool main renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Component />, div);
});
