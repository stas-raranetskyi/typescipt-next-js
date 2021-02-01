import { makeURIParams } from 'helpers/index';

describe('test fns from helpers/index', () => {
	test('makeURIParams', () => {
		expect(makeURIParams({test: 1})).toBe('test=1');
		expect(makeURIParams({test: 1, id: 1})).toBe('test=1&id=1');
		expect(makeURIParams({test: 1, from: 1, to: 2})).toBe('test=1&from=1&to=2');
	});
});
