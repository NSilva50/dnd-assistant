function generateCiv(name, population, landmarks) {
  // civilization characteristics arrays
  const civTypes = ["village", "town", "city", "fortress", "castle", "citadel", "tribe", "kingdom"]; 
  const militaryStatus = ["peaceful", "militarized", "at war"];
  const politics = ["monarchy", "democracy", "oligarchy", "dictatorship", "anarchy"];
  const religion = ["none", "polytheistic", "monotheistic", "atheistic"];
  const geography = ["mountains", "plains", "desert", "forest", "jungle", "swamp", "island", "coastal"];
  const climate = ["temperate", "tropical", "arctic", "desert", "mediterranean", "rainforest", "alpine", "tundra"];
  const resources = ["fertile soil", "minerals", "timber", "fresh water", "fishing", "hunting", "agriculture", "trade"];
  // civType location arrays
  const villageLocations = ["town square", "well", "blacksmith", "tavern", "church"];
  const townLocations = ["town hall", "market", "inn", "library", "blacksmith", "tavern", "temple"];
  const cityLocations = ["city hall", "palace", "market", "harbor", "university", "temple", "theater", "garden"];
  const fortressLocations = ["barracks", "armory", "dungeon", "watchtower", "gatehouse", "courtyard"];
  const castleLocations = ["throne room", "great hall", "bailey", "dungeon", "tower", "moat"];
  const citadelLocations = ["command center", "training ground", "prison", "barracks", "armory", "wall"];
  const tribeLocations = ["meeting place", "shaman's hut", "trading post", "hunting grounds", "fishing spot"];
  const kingdomLocations = ["palace", "throne room", "great hall", "barracks", "market", "temple", "library", "garden"];
  const locations = [villageLocations, townLocations, cityLocations, fortressLocations, 
    castleLocations, citadelLocations, tribeLocations, kingdomLocations
  ];

  // generate variables to return civ data
  const civType = civTypes[Math.floor(Math.random() * civTypes.length)];
  const military = militaryStatus[Math.floor(Math.random() * militaryStatus.length)];
  const government = politics[Math.floor(Math.random() * politics.length)];
  const faith = religion[Math.floor(Math.random() * religion.length)];
  const terrain = geography[Math.floor(Math.random() * geography.length)];
  const weather = climate[Math.floor(Math.random() * climate.length)];
  const income = resources[Math.floor(Math.random() * resources.length)];
  const location = locations[Math.floor(Math.random() * locations.length)];

  return { civType, military, government, faith, terrain, weather, income, location};
}
  
class Civilizations {
  constructor(name, population, landmarks) {
    this.name = name;
    this.population = population;
    this.landmarks = landmarks;

    const civInfo = generateCiv(name, population, landmarks);
    this.civType = civInfo.civType;
    this.military = civInfo.military;
    this.government = civInfo.government;
    this.faith = civInfo.faith;
    this.terrain = civInfo.terrain;
    this.weather = civInfo.weather;
    this.income = civInfo.income;
    this.locations = civInfo.location;
  }
  
  describe() {
    // basic description of generated civilization
    console.log(`${this.name} has a population of ${this.population}.`);
    if (this.landmarks == null){
      console.log(`${this.name} doesn't have any notable landmarks.`);
    } else {
      console.log(`${this.name} is known for having ${this.landmarks}.`);
    }
  }

  society() {
    // add descriptions later
    // basic description of the civilization's civType
    // const civTypes = ["village", "town", "city", "fortress", "castle", "citadel", "tribe", "kingdom"];
    if (this.civType === "village"){
      console.log(`${this.name} is a ${this.civType}`);
    } else if (this.civType === "town"){
      console.log(`${this.name} is a ${this.civType}`);
    } else if (this.civType === "city"){
      console.log(`${this.name} is a ${this.civType}`);
    } else if (this.civType === "fortress"){
      console.log(`${this.name} is a ${this.civType}`);
    } else if (this.civType === "castle"){
      console.log(`${this.name} is a ${this.civType}`);
    } else if (this.civType === "citadel"){
      console.log(`${this.name} is a ${this.civType}`);
    } else if (this.civType === "tribe"){
      console.log(`${this.name} is a ${this.civType}`);
    } else if (this.civType === "kingdom"){
      console.log(`${this.name} is a ${this.civType}`);
    }
  }

  authority() {
    // describing military status to user. lacking in detail
    if (this.military === "peaceful") {
      console.log(`${this.name} is currently at peace, and military is not mobilized.`)
    } else if (this.military === "militarized") {
      console.log(`${this.name} is currently mobile, the authorities are on alert with tension in the air.`)
    } else if (this.military === "at war") {
      console.log(`${this.name} is at war, and this.`)
    }
  }

  politics() {
    if (this.government === "monarchy") {
      console.log(`${this.name} is ruled by a monarch. The monarch has absolute power and makes all decisions for the civilization.`);
    } else if (this.government === "democracy") {
      console.log(`${this.name} is ruled by a democratic government. The people elect their leaders and have a say in the decision-making process.`);
    } else if (this.government === "oligarchy") {
      console.log(`${this.name} is ruled by an oligarchy. A small group of powerful individuals control the civilization and make decisions on behalf of the people.`);
    } else if (this.government === "dictatorship") {
      console.log(`${this.name} is ruled by a dictator. The dictator has absolute power and controls all aspects of the civilization.`);
    } else if (this.government === "anarchy") {
      console.log(`${this.name} is in a state of anarchy. There is no central government or ruling authority, and individuals have complete freedom to do as they please.`);
    }
  }

  church() {
    console.log(`The people of ${this.name} are mostly ${this.faith}.`);
  }
  // Use in their own functions.
  // console.log(`${this.type} has a military status of ${this.military}. It is ruled by a ${this.government} government, and has a ${this.faith} faith.`);
}
  
generateCiv("New Orlando", "1000", ["Salt Pits"]);
console.log(civ.locations);