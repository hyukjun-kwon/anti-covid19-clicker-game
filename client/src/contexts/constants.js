const INITIAL_STATE = {
  token: null,
  player: null,
  isComplete: false,
  won: false,
  difficulty: "easy",
  status: {
    infected: 5000,
    death: 0,
    fund: 500,
  },
  // spreadRate is how fast infection grows per "tick"
  // deathRate is what fraction of infected people die per "tick"
  rates: {
    spreadRate: 1.02,
    deathRate: 0.001,
  },
  // effect is number of cures per click
  // profit is how much "fund" it generates for each cure
  clicker: {
    level: 1,
    effect: 1,
    profit: 20,
    cost: 500,
    special1: false,
    special2: false,
    special3: false,
  },
  // effect is number of cures per tick
  // profit is how much "fund" it generates for each cure
  pharmacy: {
    level: 0,
    effect: 0,
    profit: 10,
    cost: 200,
    special1: false,
    special2: false,
  },
  laboratory: {
    level: 0,
    effect: 0,
    profit: 5,
    cost: 5000,
    special1: false,
    special2: false,
  },
  hospital: {
    level: 0,
    cost: 50000,
  },
  drivethru: {
    level: 0,
    cost: 50000,
  },
};

const EASY_DIFFICULTY = {
  infected: 5000,
  death: 0,
  fund: 500,
};

const MEDIUM_DIFFICULTY = {
  infected: 25000,
  death: 0,
  fund: 500,
};

const HARD_DIFFICULTY = {
  infected: 50000,
  death: 0,
  fund: 0,
};

// Array of clicker effects
// CLICKER_EFFECTS_ARRAY[ clicker level - 1 ] = clicker effect
//  ex) for level 5 clicker, CLICKER_EFFECTS_ARRAY[ 5 - 1 ] = 10 is the
//      number of cures per click.
const CLICKER_EFFECTS_ARRAY = [
  NaN,
  2,
  3,
  4,
  10, // 1~5 levels
  12,
  14,
  16,
  18,
  50, // 6~10 levels
  55,
  60,
  65,
  70,
  200, // 11~15 levels
  220,
  240,
  260,
  280,
  750, // 16~20 levels
  800,
  850,
  900,
  950,
  2000, // 21~25 levels
  2500,
  3000,
  3500,
  4000,
  10000,
  NaN, // 26~30 levels
];

const CLICKER_COSTS_ARRAY = [
  NaN,
  500,
  1000,
  1500,
  3000,
  4000,
  5000,
  6000,
  8000,
  25000,
  26000,
  27000,
  28000,
  29000,
  50000,
  10000,
  150000,
  200000,
  250000,
  400000,
  600000,
  800000,
  1000000,
  1200000,
  1800000,
  4000000,
  7000000,
  10000000,
  15000000,
  30000000,
  NaN,
];

const PHARMACY_EFFECTS_ARRAY = [
  3,
  5,
  10,
  15,
  50,
  70,
  90,
  150,
  275,
  500,
  1000,
  1500,
  2250,
  4000,
  7000,
  10000,
  15000,
  30000,
  50000,
  100000,
  NaN,
];

const PHARMACY_COSTS_ARRAY = [
  200,
  500,
  800,
  1000,
  5000,
  10000,
  15000,
  20000,
  30000,
  50000,
  100000,
  150000,
  200000,
  500000,
  1000000,
  1500000,
  5000000,
  10000000,
  30000000,
  50000000,
  NaN,
];

const LABORATORY_EFFECTS_ARRAY = [
  50,
  200,
  500,
  2000,
  7000,
  30000,
  100000,
  300000,
  800000,
  2000000,
  NaN,
];

const LABORATORY_COSTS_ARRAY = [
  5000,
  20000,
  50000,
  200000,
  500000,
  2000000,
  5000000,
  20000000,
  50000000,
  200000000,
  NaN,
];

const HOSPITAL_COSTS_ARRAY = [50000, 500000, 5000000]; // Levels 1~3
const DRIVETHRU_COSTS_ARRAY = [50000, 200000, 500000, 1500000, 5000000]; // Levels 1~5

module.exports = {
  INITIAL_STATE,
  EASY_DIFFICULTY,
  MEDIUM_DIFFICULTY,
  HARD_DIFFICULTY,
  CLICKER_EFFECTS_ARRAY,
  CLICKER_COSTS_ARRAY,
  PHARMACY_EFFECTS_ARRAY,
  PHARMACY_COSTS_ARRAY,
  LABORATORY_EFFECTS_ARRAY,
  LABORATORY_COSTS_ARRAY,
  HOSPITAL_COSTS_ARRAY,
  DRIVETHRU_COSTS_ARRAY,
};
