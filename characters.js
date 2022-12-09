// Classes
class Character { // Class for characters
  constructor(name, type, race, charClass, level, attributes,
    skills, proficiency, initiative, background, languages, inventory) {
    this.name = name;
    this.type = type;
    this.race = race;
    this["class"] = charClass;
    this.level = level;
    this.attributes = attributes;
    this.skills = skills;
    this.proficiency = proficiency;
    this.initiative = initiative;
    this.background = background;
    this.languages = languages;
    this.inventory = inventory;
    Character.characters.push(this);
  }
}
// to store characters
Character.characters = [];

class CharacterClass { // Class for character class
  constructor(name, hitDice, attributes, 
    skills, languages, classFeatures) {
    this.name = name;
    this.hitDice = hitDice;
    this.attributes = attributes;
    this.skills = skills;
    this.languages = languages;
    this.classFeatures = classFeatures;
    CharacterClass.characterClass.push(this);
  }
}
// may have to change later
CharacterClass.characterClass = [];

class Background { // class for background
  constructor(name, alignment, personality, equipment) {
    this.name = name;
    this.alignment = alignment;
    this.personality = personality;
    this.equipment = equipment;
    Background.backgrounds.push(this);
  }
}
// to store backgrounds
Background.backgrounds = [];

generateCharacter()