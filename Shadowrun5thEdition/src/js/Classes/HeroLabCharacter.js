class HeroLabCharacter {
  constructor(name) {
    this.name = name || 'Unamed Hero'
    this.metatype = 'METATYPE: '
    this.attributes = 'EDG ' //Vehicles, Spirits, Sprites, Critters may not have this attribute adjust as needed
    this.condition_monitors = 'Condition Monitor '
    this.armor = 'Armor: '
    this.limits = 'Limits: '
    this.physical_initiative = 'Physical Initiative: '
    this.active_skills = 'Active Skills: '
    this.knowledge_skills = 'Knowledge Skills: '
    this.language_skills = 'Languages: '
    this.metatype_abilities = 'Metatype Abilities: '
    this.qualities = 'Qualities: '

    this.contacts = []

    //Handling the weird entries
    this.special = ["Augemenations", "Gear", "Weapons"]
  }
}


