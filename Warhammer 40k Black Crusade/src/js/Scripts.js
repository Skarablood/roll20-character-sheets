const globalAttributesByCatagory = {
	characteristics: ['weapon_skill', 'ballistic_skill', 'strength', 'toughness', 'agility', 'intelligence', 'perception', 'willpower', 'fellowship', 'infamy'],
	xp: ['total_xp_earned', 'total_xp_spent'],
}

const functions = {
	calculateAttributes: values => {
		const integers = functions.parseIntegers(values)
		const modifier = functions.divideByTen(integers.score) || 0
		const bonus = integers.bonus || 0

		return functions.sumIntegers([modifier, bonus])
	},
	calculateXP: values => {
		const integers = functions.parseIntegers(values)
		return functions.sumIntegers(Object.values(integers))
	},
	calculateXPCost: values => {
		const integers = functions.parseIntegers(values)
		const negativeNumbers = functions.convertIntegerNegative(values)
		return functions.sumIntegers(Object.values(integers))
	},
	convertIntegerNegative: numbers => {
		for (let [key, value] of Object.entries(numbers)) {
			numbers[key] = value > 0 ? -Math.abs(value) : value;
		}
		return numbers
	},
	divideByTen: score => Math.floor(score/10),
	getReprowid: trigger => {
		const split = trigger.split('_');
		return `${split[0]}_${split[1]}_${split[2]}`
	},
	parseIntegers(numbers) {
		for (let [key, value] of Object.entries(numbers)) {
		    numbers[key] = parseInt(value) || 0;
		}
		return numbers	
	},
	sumIntegers: numbers => numbers.reduce((a,b) => a + b, 0),
	convertInteger: string => parseInt(string) || 0,
}

//for Mocha Unit Texting
//module.exports = functions;

