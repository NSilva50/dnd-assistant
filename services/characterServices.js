// node requirements
const readline = require('readline');// helps with interface

// exported from characterModels
const { Character, Race, CharacterClass } =
  require('../models/characterModels');

// temporary storage
const characters = [];
const races = ['Dragonborn', 'Dwarf', 'Elf',
'Gnome', 'Half-Elf', 'Halfling',
'Half-Orc', 'Human', 'Tiefling'];
const characterClasses = ['Fighter', 'Rogue',
'Wizard', 'Paladin'];

// characterServices functions *updated for node
function generateCharacter() {
  // Welcome/Explanation message
  console.log('Welcome to the character generator! Please follow the prompts or, anything unfilled will be generated!');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });// to create interface

  let character = new Character(null);
  rl.question('What is the name of your character? ', (name) => {
    if (name.trim() === '') {
      character.name = 'Morty';
    } else {
      character.name = name;
    }// default name is Morty
    console.log(character);
  });
  rl.question('What is the race of your character? ', (race) => {
    if (race.trim() === ''){
      character.race = Math.floor(Math.random() * races.length);
    } else {
      character.race = race;
    }// race is decided for you if don't fill it in
    console.log(character);
  });
  rl.question('What is their class? How many levels? ', (charClass, level) => {
    /*
      need to think of way to grab both class and level
      , then if not chosen will automatically choose
      charClass and level
    */
  })
}