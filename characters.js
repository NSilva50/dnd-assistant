class Race {
  constructor(name, speed, vision, savingThrows, skills) {
    this.name = name;
    this.speed = speed;
    this.vision = vision;
    this.savingThrows = savingThrows;
    this.skills = skills;
  }
}
// an array to store base and future races
const races = [];
const dwarves = new Race("Dwarve", 25, "darkvision",
{poison: {advantage: true, resistance: true}},
["Perception", "Survival"]);

function generateCharacter(name) {
  // in future I want to option to have name generated
  if (this.name == null){ // It will always will be a morty
    this.name = 'Morty';
  } else { // or you have a name
    this.name= name;
  }
  this.Race = dwarves;
  
  // complete simple race details to prep for future
}