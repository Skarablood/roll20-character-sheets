
const Helpers = require('./Helpers');

const Characteristics = {
	calculateAttributes: values => {
		const integers = Helpers.parseIntegers(values)
		const modifier = this.divideByTen(integers.score)
		const bonus = integers.bonus;

		return Helpers.sumIntegers([modifier, bonus])
	},
	convertInteger: string => parseInt(string) || 0,
	divideByTen: score => Math.floor(score/10),
}

module.exports = Characteristics;
