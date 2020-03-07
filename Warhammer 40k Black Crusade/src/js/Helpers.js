
const Helpers = {
	parseIntegers(numbers) {
		for (let [key, value] of Object.entries(numbers)) {
		    numbers[key] = parseInt(value) || 0;
		}
		return numbers	
	},
	sumIntegers: numbers => numbers.reduce((a,b) => a + b, 0),
	convertInteger: string => parseInt(string) || 0,
}

module.exports = Helpers;

