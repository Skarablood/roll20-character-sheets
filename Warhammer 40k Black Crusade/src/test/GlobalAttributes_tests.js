const assert = require('assert')
const Globals = require('../js/GlobalAttributes');

describe('Global Attributes By Catagory', () => {
	it('contains characteristics', () => {
		const expected = true

		const actual = Globals.characteristics

		assert.ok(actual, expected)
	})

	it('contains characteristics array', () => {
		const expected = ['weapon_skill', 'ballistic_skill', 'strength', 'toughness', 'agility', 'intelligence', 'perception', 'willpower', 'fellowship', 'infamy']

		const actual = Globals.characteristics

		assert.deepEqual(actual, expected)
	})
})


