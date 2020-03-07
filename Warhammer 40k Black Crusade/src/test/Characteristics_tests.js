const assert = require('assert')
const Characteristics = require('../js/Characteristics');

describe('Characteristics handlers', () => {
	it('returns a number', () => {
		const expected = 'number'

		const actual = Characteristics.convertInteger('6')

		assert.strictEqual(typeof actual, expected)
	})

	it(`divide the score by 10 rounded down`, () => {
		const expected = 3

		const actual = Characteristics.divideByTen('31')

		assert.strictEqual(actual, expected)
	});

	it(`convert string object values into integers`, () => {
		const expected = 6

		const actual = Characteristics.calculateAttributes({newValue: '6', previousValue: '4'})

		assert.strictEqual(actual.newValue, expected)
	})
})



