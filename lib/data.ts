import { Topic, Platform, GenreStages } from "./types";

// Dados da wiki: https://gamedevtycoon.fandom.com/wiki/Raw_Data_for_Review_Algorithm/1.4.3
export const topics: Topic[] = [
  {
    name: "Abstract",
    ratings: {
      Action: "++",
      Adventure: "+",
      RPG: "--",
      Simulation: "I",
      Strategy: "I",
      Casual: "--",
    },
    audience: {
      Y: "I",
      E: "+",
      M: "++",
    },
  },
  {
    name: "Airplane",
    ratings: {
      Action: "++",
      Adventure: "--",
      RPG: "I",
      Simulation: "++",
      Strategy: "++",
      Casual: "++",
    },
    audience: {
      Y: "++",
      E: "++",
      M: "+",
    },
  },
  {
    name: "Aliens",
    ratings: {
      Action: "++",
      Adventure: "I",
      RPG: "++",
      Simulation: "I",
      Strategy: "+",
      Casual: "--",
    },
    audience: {
      Y: "+",
      E: "++",
      M: "++",
    },
  },
  {
    name: "Alternate History",
    ratings: {
      Action: "++",
      Adventure: "I",
      RPG: "++",
      Simulation: "I",
      Strategy: "+",
      Casual: "--",
    },
    audience: {
      Y: "--",
      E: "++",
      M: "++",
    },
  },
  {
    name: "Business",
    ratings: {
      Action: "--",
      Adventure: "--",
      RPG: "I",
      Simulation: "++",
      Strategy: "++",
      Casual: "I",
    },
    audience: {
      Y: "+",
      E: "++",
      M: "+",
    },
  },
  {
    name: "City",
    ratings: {
      Action: "--",
      Adventure: "--",
      RPG: "I",
      Simulation: "++",
      Strategy: "++",
      Casual: "--",
    },
    audience: {
      Y: "+",
      E: "++",
      M: "I",
    },
  },
  {
    name: "Cyberpunk",
    ratings: {
      Action: "++",
      Adventure: "+",
      RPG: "++",
      Simulation: "--",
      Strategy: "I",
      Casual: "--",
    },
    audience: {
      Y: "-",
      E: "+",
      M: "++",
    },
  },
  {
    name: "Detective",
    ratings: {
      Action: "--",
      Adventure: "++",
      RPG: "++",
      Simulation: "I",
      Strategy: "--",
      Casual: "+",
    },
    audience: {
      Y: "+",
      E: "++",
      M: "I",
    },
  },
  {
    name: "Dungeon",
    ratings: {
      Action: "++",
      Adventure: "++",
      RPG: "++",
      Simulation: "--",
      Strategy: "+",
      Casual: "--",
    },
    audience: {
      Y: "I",
      E: "++",
      M: "++",
    },
  },
  {
    name: "Fantasy",
    ratings: {
      Action: "++",
      Adventure: "++",
      RPG: "++",
      Simulation: "--",
      Strategy: "+",
      Casual: "I",
    },
    audience: {
      Y: "++",
      E: "++",
      M: "++",
    },
  },
  {
    name: "Game Dev",
    ratings: {
      Action: "--",
      Adventure: "--",
      RPG: "I",
      Simulation: "++",
      Strategy: "++",
      Casual: "+",
    },
    audience: {
      Y: "+",
      E: "++",
      M: "+",
    },
  },
  {
    name: "Horror",
    ratings: {
      Action: "++",
      Adventure: "++",
      RPG: "I",
      Simulation: "--",
      Strategy: "--",
      Casual: "--",
    },
    audience: {
      Y: "--",
      E: "+",
      M: "++",
    },
  },
  {
    name: "Medieval",
    ratings: {
      Action: "++",
      Adventure: "++",
      RPG: "++",
      Simulation: "I",
      Strategy: "++",
      Casual: "--",
    },
    audience: {
      Y: "++",
      E: "++",
      M: "+",
    },
  },
  {
    name: "Military",
    ratings: {
      Action: "++",
      Adventure: "--",
      RPG: "I",
      Simulation: "++",
      Strategy: "++",
      Casual: "--",
    },
    audience: {
      Y: "--",
      E: "+",
      M: "++",
    },
  },
  {
    name: "Movies",
    ratings: {
      Action: "I",
      Adventure: "I",
      RPG: "--",
      Simulation: "++",
      Strategy: "--",
      Casual: "++",
    },
    audience: {
      Y: "+",
      E: "++",
      M: "+",
    },
  },
  {
    name: "Post Apocalyptic",
    ratings: {
      Action: "++",
      Adventure: "I",
      RPG: "++",
      Simulation: "--",
      Strategy: "+",
      Casual: "--",
    },
    audience: {
      Y: "--",
      E: "+",
      M: "++",
    },
  },
  {
    name: "Racing",
    ratings: {
      Action: "++",
      Adventure: "--",
      RPG: "--",
      Simulation: "++",
      Strategy: "--",
      Casual: "++",
    },
    audience: {
      Y: "++",
      E: "++",
      M: "+",
    },
  },
  {
    name: "Sci-Fi",
    ratings: {
      Action: "++",
      Adventure: "++",
      RPG: "++",
      Simulation: "++",
      Strategy: "++",
      Casual: "I",
    },
    audience: {
      Y: "I",
      E: "++",
      M: "++",
    },
  },
  {
    name: "Space",
    ratings: {
      Action: "++",
      Adventure: "I",
      RPG: "--",
      Simulation: "++",
      Strategy: "++",
      Casual: "--",
    },
    audience: {
      Y: "I",
      E: "++",
      M: "++",
    },
  },
  {
    name: "Sports",
    ratings: {
      Action: "++",
      Adventure: "--",
      RPG: "--",
      Simulation: "++",
      Strategy: "--",
      Casual: "++",
    },
    audience: {
      Y: "++",
      E: "++",
      M: "I",
    },
  },
  {
    name: "Superheroes",
    ratings: {
      Action: "++",
      Adventure: "++",
      RPG: "+",
      Simulation: "--",
      Strategy: "--",
      Casual: "--",
    },
    audience: {
      Y: "++",
      E: "++",
      M: "++",
    },
  },
  {
    name: "Vampire",
    ratings: {
      Action: "++",
      Adventure: "I",
      RPG: "++",
      Simulation: "--",
      Strategy: "--",
      Casual: "--",
    },
    audience: {
      Y: "--",
      E: "++",
      M: "++",
    },
  },
  {
    name: "Zombies",
    ratings: {
      Action: "++",
      Adventure: "I",
      RPG: "+",
      Simulation: "--",
      Strategy: "--",
      Casual: "--",
    },
    audience: {
      Y: "--",
      E: "I",
      M: "++",
    },
  },
  {
    name: "Assassin",
    ratings: {
      Action: "++",
      Adventure: "-",
      RPG: "++",
      Simulation: "I",
      Strategy: "--",
      Casual: "--",
    },
    audience: {
      Y: "--",
      E: "I",
      M: "++",
    },
  },
  {
    name: "Colonization",
    ratings: {
      Action: "-",
      Adventure: "--",
      RPG: "--",
      Simulation: "++",
      Strategy: "++",
      Casual: "-",
    },
    audience: {
      Y: "-",
      E: "++",
      M: "I",
    },
  },
  {
    name: "Comedy",
    ratings: {
      Action: "-",
      Adventure: "++",
      RPG: "I",
      Simulation: "--",
      Strategy: "--",
      Casual: "+",
    },
    audience: {
      Y: "I",
      E: "+",
      M: "++",
    },
  },
  {
    name: "Construction",
    ratings: {
      Action: "-",
      Adventure: "--",
      RPG: "I",
      Simulation: "++",
      Strategy: "+",
      Casual: "--",
    },
    audience: {
      Y: "I",
      E: "++",
      M: "+",
    },
  },
  {
    name: "Cooking",
    ratings: {
      Action: "+",
      Adventure: "--",
      RPG: "I",
      Simulation: "++",
      Strategy: "-",
      Casual: "++",
    },
    audience: {
      Y: "I",
      E: "++",
      M: "--",
    },
  },
  {
    name: "Crime",
    ratings: {
      Action: "++",
      Adventure: "--",
      RPG: "I",
      Simulation: "+",
      Strategy: "-",
      Casual: "--",
    },
    audience: {
      Y: "--",
      E: "I",
      M: "++",
    },
  },
  {
    name: "Dance",
    ratings: {
      Action: "-",
      Adventure: "--",
      RPG: "--",
      Simulation: "++",
      Strategy: "--",
      Casual: "++",
    },
    audience: {
      Y: "++",
      E: "+",
      M: "I",
    },
  },
  {
    name: "Disaster",
    ratings: {
      Action: "+",
      Adventure: "I",
      RPG: "--",
      Simulation: "++",
      Strategy: "++",
      Casual: "--",
    },
    audience: {
      Y: "I",
      E: "+",
      M: "++",
    },
  },
  {
    name: "Dystopian",
    ratings: {
      Action: "I",
      Adventure: "+",
      RPG: "++",
      Simulation: "+",
      Strategy: "--",
      Casual: "-",
    },
    audience: {
      Y: "I",
      E: "++",
      M: "++",
    },
  },
  {
    name: "Evolution",
    ratings: {
      Action: "-",
      Adventure: "--",
      RPG: "--",
      Simulation: "++",
      Strategy: "++",
      Casual: "--",
    },
    audience: {
      Y: "I",
      E: "++",
      M: "-",
    },
  },
  {
    name: "Expedition",
    ratings: {
      Action: "--",
      Adventure: "+",
      RPG: "--",
      Simulation: "+",
      Strategy: "++",
      Casual: "--",
    },
    audience: {
      Y: "I",
      E: "++",
      M: "+",
    },
  },
  {
    name: "Extreme Sports",
    ratings: {
      Action: "++",
      Adventure: "--",
      RPG: "--",
      Simulation: "++",
      Strategy: "-",
      Casual: "+",
    },
    audience: {
      Y: "++",
      E: "-",
      M: "++",
    },
  },
  {
    name: "Farming",
    ratings: {
      Action: "--",
      Adventure: "I",
      RPG: "--",
      Simulation: "++",
      Strategy: "+",
      Casual: "++",
    },
    audience: {
      Y: "I",
      E: "++",
      M: "I",
    },
  },
  {
    name: "Fashion",
    ratings: {
      Action: "--",
      Adventure: "I",
      RPG: "++",
      Simulation: "++",
      Strategy: "--",
      Casual: "++",
    },
    audience: {
      Y: "I",
      E: "++",
      M: "I",
    },
  },
  {
    name: "Government",
    ratings: {
      Action: "--",
      Adventure: "--",
      RPG: "--",
      Simulation: "++",
      Strategy: "++",
      Casual: "-",
    },
    audience: {
      Y: "-",
      E: "++",
      M: "I",
    },
  },
  {
    name: "Hacking",
    ratings: {
      Action: "--",
      Adventure: "--",
      RPG: "--",
      Simulation: "++",
      Strategy: "++",
      Casual: "--",
    },
    audience: {
      Y: "-",
      E: "++",
      M: "I",
    },
  },
  {
    name: "History",
    ratings: {
      Action: "I",
      Adventure: "I",
      RPG: "I",
      Simulation: "++",
      Strategy: "++",
      Casual: "+",
    },
    audience: {
      Y: "I",
      E: "++",
      M: "+",
    },
  },
  {
    name: "Hospital",
    ratings: {
      Action: "--",
      Adventure: "--",
      RPG: "I",
      Simulation: "++",
      Strategy: "I",
      Casual: "--",
    },
    audience: {
      Y: "I",
      E: "++",
      M: "I",
    },
  },
  {
    name: "Hunting",
    ratings: {
      Action: "++",
      Adventure: "+",
      RPG: "--",
      Simulation: "++",
      Strategy: "--",
      Casual: "+",
    },
    audience: {
      Y: "I",
      E: "++",
      M: "I",
    },
  },
  {
    name: "Law",
    ratings: {
      Action: "--",
      Adventure: "+",
      RPG: "+",
      Simulation: "+",
      Strategy: "--",
      Casual: "I",
    },
    audience: {
      Y: "++",
      E: "+",
      M: "-",
    },
  },
  {
    name: "Life",
    ratings: {
      Action: "--",
      Adventure: "++",
      RPG: "+",
      Simulation: "++",
      Strategy: "I",
      Casual: "I",
    },
    audience: {
      Y: "++",
      E: "++",
      M: "I",
    },
  },
  {
    name: "Mad Science",
    ratings: {
      Action: "+",
      Adventure: "++",
      RPG: "-",
      Simulation: "+",
      Strategy: "--",
      Casual: "--",
    },
    audience: {
      Y: "I",
      E: "+",
      M: "++",
    },
  },
  {
    name: "Martial Arts",
    ratings: {
      Action: "++",
      Adventure: "--",
      RPG: "++",
      Simulation: "++",
      Strategy: "-",
      Casual: "++",
    },
    audience: {
      Y: "-",
      E: "+",
      M: "++",
    },
  },
  {
    name: "Music",
    ratings: {
      Action: "++",
      Adventure: "+",
      RPG: "--",
      Simulation: "++",
      Strategy: "--",
      Casual: "++",
    },
    audience: {
      Y: "++",
      E: "+",
      M: "I",
    },
  },
  {
    name: "Mystery",
    ratings: {
      Action: "-",
      Adventure: "++",
      RPG: "++",
      Simulation: "I",
      Strategy: "--",
      Casual: "I",
    },
    audience: {
      Y: "I",
      E: "+",
      M: "++",
    },
  },
  {
    name: "Mythology",
    ratings: {
      Action: "++",
      Adventure: "I",
      RPG: "+",
      Simulation: "+",
      Strategy: "I",
      Casual: "--",
    },
    audience: {
      Y: "-",
      E: "++",
      M: "++",
    },
  },
  {
    name: "Ninja",
    ratings: {
      Action: "++",
      Adventure: "I",
      RPG: "I",
      Simulation: "--",
      Strategy: "I",
      Casual: "+",
    },
    audience: {
      Y: "++",
      E: "I",
      M: "I",
    },
  },
  {
    name: "Pirate",
    ratings: {
      Action: "++",
      Adventure: "++",
      RPG: "++",
      Simulation: "+",
      Strategy: "--",
      Casual: "I",
    },
    audience: {
      Y: "I",
      E: "++",
      M: "I",
    },
  },
  {
    name: "Prison",
    ratings: {
      Action: "++",
      Adventure: "++",
      RPG: "I",
      Simulation: "++",
      Strategy: "I",
      Casual: "--",
    },
    audience: {
      Y: "-",
      E: "+",
      M: "++",
    },
  },
  {
    name: "Rhythm",
    ratings: {
      Action: "++",
      Adventure: "-",
      RPG: "--",
      Simulation: "++",
      Strategy: "--",
      Casual: "++",
    },
    audience: {
      Y: "++",
      E: "+",
      M: "I",
    },
  },
  {
    name: "Romance",
    ratings: {
      Action: "--",
      Adventure: "++",
      RPG: "I",
      Simulation: "+",
      Strategy: "--",
      Casual: "+",
    },
    audience: {
      Y: "I",
      E: "++",
      M: "++",
    },
  },
  {
    name: "School",
    ratings: {
      Action: "--",
      Adventure: "++",
      RPG: "++",
      Simulation: "++",
      Strategy: "++",
      Casual: "I",
    },
    audience: {
      Y: "++",
      E: "+",
      M: "-",
    },
  },
  {
    name: "Spy",
    ratings: {
      Action: "++",
      Adventure: "++",
      RPG: "++",
      Simulation: "--",
      Strategy: "I",
      Casual: "I",
    },
    audience: {
      Y: "--",
      E: "+",
      M: "++",
    },
  },
  {
    name: "Surgery",
    ratings: {
      Action: "I",
      Adventure: "-",
      RPG: "--",
      Simulation: "++",
      Strategy: "-",
      Casual: "I",
    },
    audience: {
      Y: "I",
      E: "++",
      M: "+",
    },
  },
  {
    name: "Technology",
    ratings: {
      Action: "--",
      Adventure: "I",
      RPG: "++",
      Simulation: "++",
      Strategy: "+",
      Casual: "+",
    },
    audience: {
      Y: "I",
      E: "++",
      M: "+",
    },
  },
  {
    name: "Thief",
    ratings: {
      Action: "+",
      Adventure: "I",
      RPG: "++",
      Simulation: "+",
      Strategy: "--",
      Casual: "+",
    },
    audience: {
      Y: "-",
      E: "++",
      M: "++",
    },
  },
  {
    name: "Time Travel",
    ratings: {
      Action: "+",
      Adventure: "++",
      RPG: "++",
      Simulation: "-",
      Strategy: "--",
      Casual: "-",
    },
    audience: {
      Y: "+",
      E: "++",
      M: "I",
    },
  },
  {
    name: "Transport",
    ratings: {
      Action: "--",
      Adventure: "--",
      RPG: "--",
      Simulation: "++",
      Strategy: "++",
      Casual: "--",
    },
    audience: {
      Y: "+",
      E: "++",
      M: "-",
    },
  },
  {
    name: "UFO",
    ratings: {
      Action: "++",
      Adventure: "I",
      RPG: "--",
      Simulation: "++",
      Strategy: "++",
      Casual: "--",
    },
    audience: {
      Y: "I",
      E: "++",
      M: "+",
    },
  },
  {
    name: "Virtual Pet",
    ratings: {
      Action: "--",
      Adventure: "I",
      RPG: "+",
      Simulation: "++",
      Strategy: "+",
      Casual: "++",
    },
    audience: {
      Y: "++",
      E: "I",
      M: "-",
    },
  },
  {
    name: "Vocabulary",
    ratings: {
      Action: "--",
      Adventure: "--",
      RPG: "--",
      Simulation: "++",
      Strategy: "--",
      Casual: "++",
    },
    audience: {
      Y: "+",
      E: "++",
      M: "--",
    },
  },
  {
    name: "Werewolf",
    ratings: {
      Action: "++",
      Adventure: "I",
      RPG: "++",
      Simulation: "--",
      Strategy: "--",
      Casual: "-",
    },
    audience: {
      Y: "-",
      E: "+",
      M: "++",
    },
  },
  {
    name: "Wild West",
    ratings: {
      Action: "+",
      Adventure: "-",
      RPG: "++",
      Simulation: "--",
      Strategy: "--",
      Casual: "-",
    },
    audience: {
      Y: "-",
      E: "+",
      M: "++",
    },
  },
];

export const platforms: Platform[] = [
  {
    name: "PC",
    audience: {
      Y: "I",
      E: "+",
      M: "++",
    },
  },
  {
    name: "G64",
    audience: {
      Y: "I",
      E: "+",
      M: "++",
    },
  },
  {
    name: "PlaySystem",
    audience: {
      Y: "I",
      E: "++",
      M: "+",
    },
  },
  {
    name: "TES",
    audience: {
      Y: "++",
      E: "+",
      M: "--",
    },
  },
  {
    name: "Master V",
    audience: {
      Y: "+",
      E: "++",
      M: "-",
    },
  },
  {
    name: "Gameling",
    audience: {
      Y: "++",
      E: "+",
      M: "--",
    },
  },
  {
    name: "Vena Gear",
    audience: {
      Y: "+",
      E: "++",
      M: "I",
    },
  },
  {
    name: "Super TES",
    audience: {
      Y: "++",
      E: "+",
      M: "-",
    },
  },
  {
    name: "DreamVast",
    audience: {
      Y: "-",
      E: "++",
      M: "++",
    },
  },
  {
    name: "PlaySystem 2",
    audience: {
      Y: "+",
      E: "++",
      M: "I",
    },
  },
  {
    name: "mBox",
    audience: {
      Y: "I",
      E: "++",
      M: "+",
    },
  },
  {
    name: "Game Sphere",
    audience: {
      Y: "+",
      E: "+",
      M: "I",
    },
  },
  {
    name: "PlaySystem 3",
    audience: {
      Y: "I",
      E: "++",
      M: "+",
    },
  },
  {
    name: "mBox 360",
    audience: {
      Y: "I",
      E: "+",
      M: "++",
    },
  },
  {
    name: "GS",
    audience: {
      Y: "++",
      E: "+",
      M: "I",
    },
  },
  {
    name: "PPS",
    audience: {
      Y: "I",
      E: "+",
      M: "++",
    },
  },
  {
    name: "Nuu",
    audience: {
      Y: "++",
      E: "++",
      M: "-",
    },
  },
  {
    name: "grPhone",
    audience: {
      Y: "+",
      E: "++",
      M: "--",
    },
  },
  {
    name: "grPad",
    audience: {
      Y: "+",
      E: "++",
      M: "--",
    },
  },
  {
    name: "mPad",
    audience: {
      Y: "-",
      E: "+",
      M: "I",
    },
  },
  {
    name: "Wuu",
    audience: {
      Y: "+",
      E: "++",
      M: "-",
    },
  },
  {
    name: "OYA",
    audience: {
      Y: "I",
      E: "++",
      M: "+",
    },
  },
  {
    name: "mBox One",
    audience: {
      Y: "-",
      E: "++",
      M: "I",
    },
  },
  {
    name: "PlaySystem 4",
    audience: {
      Y: "I",
      E: "++",
      M: "-",
    },
  },
  {
    name: "Swap",
    audience: {
      Y: "+",
      E: "++",
      M: "-",
    },
  },
  {
    name: "mBox Next",
    audience: {
      Y: "+",
      E: "++",
      M: "-",
    },
  },
  {
    name: "PlaySystem 5",
    audience: {
      Y: "I",
      E: "++",
      M: "I",
    },
  },
];

export const genres = [
  "Action",
  "Adventure",
  "RPG",
  "Simulation",
  "Strategy",
  "Casual",
];

// Valores baseados na tabela da wiki
export const genreStages: Record<string, GenreStages> = {
  Action: {
    stage1: {
      engine: 100,
      gameplay: 80,
      story: 0,
    },
    stage2: {
      dialogues: 0,
      level: 80,
      ai: 100,
    },
    stage3: {
      world: 0,
      graphics: 100,
      sound: 80,
    },
  },
  Adventure: {
    stage1: {
      engine: 0,
      gameplay: 20,
      story: 80,
    },
    stage2: {
      dialogues: 100,
      level: 40,
      ai: 0,
    },
    stage3: {
      world: 100,
      graphics: 80,
      sound: 20,
    },
  },
  RPG: {
    stage1: {
      engine: 0,
      gameplay: 80,
      story: 100,
    },
    stage2: {
      dialogues: 100,
      level: 80,
      ai: 0,
    },
    stage3: {
      world: 100,
      graphics: 80,
      sound: 0,
    },
  },
  Simulation: {
    stage1: {
      engine: 80,
      gameplay: 100,
      story: 0,
    },
    stage2: {
      dialogues: 0,
      level: 80,
      ai: 100,
    },
    stage3: {
      world: 0,
      graphics: 100,
      sound: 80,
    },
  },
  Strategy: {
    stage1: {
      engine: 80,
      gameplay: 100,
      story: 0,
    },
    stage2: {
      dialogues: 0,
      level: 100,
      ai: 80,
    },
    stage3: {
      world: 100,
      graphics: 0,
      sound: 80,
    },
  },
  Casual: {
    stage1: {
      engine: 0,
      gameplay: 100,
      story: 40,
    },
    stage2: {
      dialogues: 40,
      level: 100,
      ai: 0,
    },
    stage3: {
      world: 0,
      graphics: 100,
      sound: 80,
    },
  },
};
