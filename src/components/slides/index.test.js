import React from 'react';
import ReactDOM from 'react-dom';
import Calcs from './calcs';
import Income from './income';
import RetireIncome from './retireIncome';
import Saved from './saved';
import Years from './years';

const Components = {
  Calcs,
  Income,
  RetireIncome,
  Saved,
  Years,
};

const state = {
  handlers: {
    change() {},
    click() {},
  },
  state: {
    income: 10000,
    riq: 1000,
    monthlyAdd: 1000,
    retireIncomePercent: 0.9,
  },
  step: 1,
};

for (const component in Components) {
  it(`${component} renders without crashing`, () => {
    const Thing = Components[component];
    const div = document.createElement('div');
    ReactDOM.render(<Thing { ...state } />, div);
  });
}
