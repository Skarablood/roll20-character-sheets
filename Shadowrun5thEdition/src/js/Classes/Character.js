class Character {
  constructor(name) {
    this.character_name = name || ''
    this.metatype = ''
  }
}

class NPC extends Character {
  constructor(name) {
    super(name)

  }
}

class PC extends Character {
  constructor(name) {
    super(name)
    this.metatype = ''
  }  
}


