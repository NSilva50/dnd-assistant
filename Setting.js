function generateCiv(type, population, landmarks) {
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
    
    const civType = civTypes[Math.floor(Math.random() * civTypes.length)];
    const military = militaryStatus[Math.floor(Math.random() * militaryStatus.length)];
    const government = politics[Math.floor(Math.random() * politics.length)];
    const faith = religion[Math.floor(Math.random() * religion.length)];
    const terrain = geography[Math.floor(Math.random() * geography.length)];
    const weather = climate[Math.floor(Math.random() * climate.length)];
    const income = resources[Math.floor(Math.random() * resources.length)];

    return {civType, military, government, faith, terrain, weather, income};
}
  
export class Civilizations {
    constructor(type, population, landmarks) {
      this.type = type;
      this.population = population;
      this.landmarks = landmarks;

      const civInfo = generateCiv(type, population, landmarks);
      this.military = civInfo.military;
      this.government = civInfo.government;
      this.faith = civInfo.faith;
      this.terrain = civInfo.terrain;
      this.weather = civInfo.weather;
      this.income = civInfo.income;
      this.locations = civInfo.locations;
    }
    
    describe() {
      console.log(`${this.type} has a population of ${this.population}. It has the following landmarks: ${this.landmarks.join(", ")}`);
      console.log(`${this.type} has a military status of ${this.military}. It is ruled by a ${this.government} government, and has a ${this.faith} faith.`);
    }
    
    politics() {
      if (this.government === "monarchy") {
        console.log(`${this.type} is ruled by a monarch. The monarch has absolute power and makes all decisions for the civilization.`);
      } else if (this.government === "democracy") {
        console.log(`${this.type} is ruled by a democratic government. The people elect their leaders and have a say in the decision-making process.`);
      } else if (this.government === "oligarchy") {
        console.log(`${this.type} is ruled by an oligarchy. A small group of powerful individuals control the civilization and make decisions on behalf of the people.`);
      } else if (this.government === "dictatorship") {
        console.log(`${this.type} is ruled by a dictator. The dictator has absolute power and controls all aspects of the civilization.`);
      } else if (this.government === "anarchy") {
        console.log(`${this.type} is in a state of anarchy. There is no central government or ruling authority, and individuals have complete freedom to do as they please.`);
      }
    }
}
  
generateCiv("New Orlando", "1000", ["Salt Pits"]);
console.log(civ.locations);