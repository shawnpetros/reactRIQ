import { formatUSD } from './utils';

it('formatUSD is a function', () => {
	expect(typeof formatUSD).toEqual('function')
});

it('formatUSD should take some number and return a comma separated version', () => {
  expect(formatUSD(1000)).toEqual('1,000');
});
