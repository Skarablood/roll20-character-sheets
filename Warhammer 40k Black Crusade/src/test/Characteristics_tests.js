const assert = require('assert')
const Characteristics = require('../js/Characteristics');

describe('Characteristics handlers', () => {
	it(`divide the score by 10 rounded down`, () => {
		const expected = 3

		const actual = Characteristics.divideByTen('31')

		assert.strictEqual(actual, expected)
	});

	it('returns the sum of the calculated modifier and bonus', () => {
		const expected = 5;

		const actual = Characteristics.calculateAttributes({score: '31', bonus: '2'})

		assert.strictEqual(actual, expected)
	})
})



