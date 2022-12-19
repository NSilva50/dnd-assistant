// characterModel Classes
class Character {
    constructor(name, race, charClass,
        stats, skills, abilities, inventory){
        this.name = name;
        this.race = race;
        this.charClass = charClass;
        this.stats = stats;
        this.skills = skills;
        this.abilities = abilities;
        this.inventory = inventory;
    }
}
class Race {
    constructor(name, stats, skills, abilities){
        this.name = name;
        this.stats = stats;
        this.skills = skills;
        this.abilities = abilities;
    }
}
class CharacterClass {
    constructor(name, stats, skills, abilities, features){
        this.name = name;
        this.stats = stats;
        this.skills = skills;
        this.abilities = abilities;
        this.abilities = features;
    }
}

// Export Classes
module.exports = { Character, Race, CharacterClass };