const assert = require('assert')
const Functions = require('../js/Scripts');


describe('Characteristics handlers', () => {
	it(`divide the score by 10 rounded down`, () => {
		const expected = 3
		const actual = Functions.divideByTen('31')
		assert.strictEqual(actual, expected)
	});

	it('returns the sum of the calculated modifier and bonus', () => {
		const expected = 5;
		const actual = Functions.calculateAttributes({score: '31', bonus: '2'})
		assert.strictEqual(actual, expected)
	})
})

describe('Advancement handlers', () => {
	it('total values in object', () => {
		const expected = 500;
		const actual = Functions.calculateXP({cost:200, unspent: 300})
		assert.strictEqual(actual, expected)
	})

	it('total advancement cost', () => {
		const expected = -600
		const actual = Functions.calculateXPCost({cost1: 100, cost2: -200, cost3: -300})
		assert.strictEqual(actual, expected)
	})

	it('total advancement cost must be negative', () => {
		const expected = -1
		const actual = Functions.calculateXPCost({cost1: 100, cost2: -200, cost3: -300})

		//Math.sign returns -1 if the number is negative or +1 if number is positive
		assert.strictEqual(Math.sign(actual), expected)
	})
})

describe('Helper functions', () => {
	it('returns a number', () => {
		const expected = 'number'
		const actual = Functions.parseIntegers({newValue: '6'})
		assert.ok(typeof actual.newValue, expected)
	})

	it('adds an array of numbers together', () => {
		const expected = 35
		const actual = Functions.sumIntegers([5, 10, 20])
		assert.strictEqual(actual, expected)
	})

	it('converts a number', () => {
		const expected = 'number'
		const actual = Functions.convertInteger('6')
		assert.strictEqual(typeof actual, expected)
	})

	it('splits triggerName to get the repeating row id', () => {
		const expected = 'repeating_advancement_-m1czg68yzicwhfdpyys'
		const actual = Functions.getReprowid('repeating_advancement_-m1czg68yzicwhfdpyys_earned_xp')
		assert.strictEqual(actual, expected)
	})

	it('positive numbers need to be negative', () => {
		const expected = -15
		const actual = Functions.convertIntegerNegative({cost: 15})
		assert.strictEqual(actual.cost, expected)
	})
})
