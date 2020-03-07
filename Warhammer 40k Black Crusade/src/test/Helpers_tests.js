const assert = require('assert')
const Helpers = require('../js/Helpers');

describe('Helper functions', () => {
	it('returns a number', () => {
		const expected = 'number'

		const actual = Helpers.parseIntegers({newValue: '6'})

		assert.ok(typeof actual.newValue, expected)
	})

	it('adds an array of numbers together', () => {
		const expected = 35

		const actual = Helpers.sumIntegers([5, 10, 20])

		assert.strictEqual(actual, expected)
	})
})



