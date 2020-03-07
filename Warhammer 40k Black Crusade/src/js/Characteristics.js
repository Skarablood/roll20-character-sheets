
const Helpers = require('./Helpers');

const Characteristics = {
	calculateAttributes: values => {
		const integers = Helpers.parseIntegers(values)
		//const modifier = this.divideByTen(integer)
		return integers
	},
	convertInteger: string => parseInt(string) || 0,
	divideByTen: score => Math.floor(score/10),
}

module.exports = Characteristics;
