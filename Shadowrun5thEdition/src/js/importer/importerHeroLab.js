const herolabDirections = `
	<ol>
		<li>In Hero Lab go to File => Output Hero Statblock</li>
		<li>Select Plain Text and copy.</li>
		<li>Paste into the input here.</li>
  </ol>`;
  
const importerHeroLabProcess = mancerValues => {
  const rawStatBlockArray = mancerValues.importedData.split("\n")
  const splitStatBlock = removeUnnecessaryElements(rawStatBlockArray)
  const characterHeroLab = processStatBlockObject(splitStatBlock.entries())

  console.log("Hero Lab Data")
  console.log(characterHeroLab)
}

const processStatBlockObject = statBlockObject => {
  const characterHeroLab = new HeroLabCharacter(statBlockObject[0])
  delete statBlockObject[0]

  const findString = string => characterStatArray.find(element => element.includes(string))

  //Player Character
  //hlCharacter.METATYPE = findString('METATYPE: ')
  //hlCharacter.attributes = findString('EDG ')
  //hlCharacter['Condition Monitor (P/S)'] = findString('Condition Monitor')
  //hlCharacter.Armor = findString('Armor: ')
  //hlCharacter.Limits = findString('Limits: ')
  //hlCharacter['Physical Initiative'] = findString('Physical Initiative:')
  //hlCharacter['Active Skills'] = findString('Active Skills: ')
  //hlCharacter['Knowledge Skills'] = findString('Knowledge Skills: ')
  //hlCharacter['Languages: '] = findString('Languages: ')
  //hlCharacter['Metatype Abilities: '] = findString('Metatype Abilities: ')
  //hlCharacter['Qualities: '] = findString('Qualities: ')

 // hlCharacter['Augmentations:'] = findNestedEntries(characterStatArray, 'Augmentations')

  return characterHeroLab
}

const findIndexOfString = (array, string) => {
  const elementEqualsString = element => element === string
  return array.findIndex(elementEqualsString)
}

//Nested entries have muplie spaces before them
//Find the next entry that does not such as "Vehicles:"
const findIndexWithoutSpaces = array => {
  const elementEqualsString = element => !element.includes('   ')
  return array.findIndex(elementEqualsString)
}

const sliceArray = (array, index) => array.slice(index)

const verifyElementHasSpaces = element => element.includes('   ') ? true : false

//Take string such as "Augmentations"
const findNestedEntries = (characterStatArray, string) => {
  //Remove everything before the string we're looking for
  let index = findIndexOfString(characterStatArray, string)
  let slicedArray = sliceArray(characterStatArray, index + 1)

  //Remove everything after the next entry that is not nested
  index = findIndexWithoutSpaces(characterStatArray)
  slicedArray = sliceArray(slicedArray, index)

  return slicedArray
}


const removeUnnecessaryElements = rawStatBlockArray => {
  let statBlock = []
  rawStatBlockArray.forEach(line => {
    if (line !== "" && !line.includes('Hero Lab') && !line.includes('Shadowrun © 2005')) {
      statBlock.push(line)
    }
  })
  return statBlock
}

//IMPORTERS
const importHeroLab = character => {findIndexOfStringInArray
  console.log(`%c HERO LAB IMPORTER:`, "color: purple; font-weight:bold")
}

/*
Quin
METATYPE: TROLL
B 9, A 5/6, R 4, S 9/10, W 5, L 3, I 3, C 3, ESS 4.47, EDG 3
Condition Monitor (P/S): 13 / 11
Armor: 7
Limits: Physical 11, Mental 5, Social 6
Physical Initiative: 7+1D6
Active Skills: Athletics Group 2, Con 3, Etiquette (Professional +2) 3, Exotic Melee Weapon: Garrote 6, Intimidation (Physical +2) 3, Negotiation 1, Pistols (Holdouts +2) 4, Sneaking (Urban +2) 4, Throwing Weapons (Blades +2) 2, Unarmed Combat 4
Knowledge Skills: Rackateering 2, Syndicates 5
Languages: English N, Or'Zet 5
Metatype Abilities: Armor (+1), Enhanced Senses: Thermographic Vision
Qualities: Code of Honor: Omerta, The Code of Silence (8dicepool vs. 4), Impassive, Jack of All Trades, Master of None, Social Appearance Anxiety (SAA) (1)
Augmentations:
   Datajack (Alphaware)
   Gastric Neurostimulator
   Muscle Replacement (Used) (1)
   Perfect Eyes
Vehicles:
   Harley-Davidson Scorpion [Handling 4/3, Speed 4, Accel 2, Body 8, Armor 9, Pilot 1, Sensor 2, Seats 1]
      Gear:
         Metahuman Adjustment: Troll
Gear:
   Armor Clothing
   Chisel/Crowbar
   Cram
   Kayden Fisher w/ Fake License: Motor Vehicle Operator (4), Fake SIN (4), (1 month) Middle Lifestyle
   Novacoke
   Renraku Sensei
   Skein of aqua yarn
   Summit Suit w/ -2 modifier for concealability, Custom Fit, Increase Social Limit by 1
Weapons:
   Streetline Special [Hold-out, Acc 4, DV 6P, AP –, SA, 6 (c)] w/ (10x) Regular Ammo
   Extendable Baton [Club, Reach 2, Acc 5, DV 12P, AP –]
   Garrote [Exotic Melee Weapon, Reach 1, Acc 5, DV 14S, AP -6]
   Knife [Blade, Reach 1, Acc 5, DV 11P, AP -1]
   Throwing Knife x5 [Throwing Weapon, Acc 11, DV 11P, AP -1]
Contacts:
Leo Markow (Connection 4, Loyalty 3)
Louie "Nine Lives" Sans (Connection 4, Loyalty 4)
Officer Ripley (Connection 1, Loyalty 1)


Unnamed Hero
Critter (Dog)
B 4, A 3, R 4, S 4, W 3, L 2, I 4, C 3, ESS 6, EDG 3
Condition Monitor (P/S): 10 / 10
Movement: x2/x8/+4
Armor: 0
Limits: Physical 6, Mental 4, Social 5
Physical Initiative: 8+1D6
Active Skills: Intimidation 4, Perception (Smell +2) 5, Running 5, Tracking 6, Unarmed Combat 5
Critter Powers: Domesticated, Enhanced Senses: Hearing, Enhanced Senses: Smell
Weapons:
   Claws/Bite [Unarmed, Acc 6, DV 5P, AP –]


Unnamed Hero
Level 2
RACE: COURIER SPRITE
W 4, L 3, I 5, C 2, Dev 2, Atk 2, Slz 5, DP 3, R 2, Fir 4
Condition Monitor: 9
Limits: Mental 5, Social 3
Matrix Initiative: 5+5D6
Active Skills: Computer 2, Hacking 2
Sprite Powers: Cookie (4dicepool[5] vs. Intuition + Firewall), Hash (up to 20 combat turns)

*/