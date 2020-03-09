const globalAttributesByCatagory = {
	characteristics: ['weapon_skill', 'ballistic_skill', 'strength', 'toughness', 'agility', 'intelligence', 'perception', 'willpower', 'fellowship', 'infamy'],
	xp: ['total_xp_earned', 'total_xp_spent'],
	skills: {'acrobatics':'agility','athletics':'strength','awareness':'perception', 'charm':'fellowship', 'command':'fellowship', 'commerce':'intelligence', 'common lore': 'intelligence', 'deceive':'fellowship','dodge':'agility', 'forbidden lore':'intelligence','inquiry':'fellowship','intimidate':'willpower','linguistics':'intelligence', 'logic':'intelligence', 'medicae':'intelligence','navigation (surface)':'intelligence','navigation (stellar)':'intelligence', 'navigation (warp)':'intelligence', 'operate (aeronautica)': 'agility', 'operate (voidship)': 'agility', 'parry':'weapon_skill','psyniscience':'perception', 'scholastic lore': 'intelligence','scrutiny':'perception','security':'intelligence', 'sleight of hand':'agility', 'stealth': 'agility', 'tech-use': 'intelligence', 'tracking':'intelligence', 'trade':'intelligence'},
	skillRanks: ['0', '10', '20', '30']
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
	parseIntegers: numbers => {
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

