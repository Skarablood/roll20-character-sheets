
const Helpers = require('./Helpers');

const Characteristics = {
	calculateAttributes: values => {
		const integers = Helpers.parseIntegers(values)
		const modifier = Characteristics.divideByTen(integers.score) || 0
		const bonus = integers.bonus || 0

		return Helpers.sumIntegers([modifier, bonus])
	},
	divideByTen: score => Math.floor(score/10)
}

module.exports = Characteristics;
