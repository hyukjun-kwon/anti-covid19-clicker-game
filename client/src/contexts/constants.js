const INITIAL_STATE = {
  difficulty: "easy",
  status: {
    infected: 5000,
    death: 0,
    fund: 2500
  },
  // spreadRate is how fast infection grows per "tick"
  // deathRate is what fraction of infected people die per "tick"
  rates: {
    spreadRate: 1.05,
    deathRate: 0
  },
  // effect is number of cures per click
  // profit is how much "fund" it generates for each cure
  clicker: {
    level: 1,
    effect: 1,
    profit: 2,
    cost: 500
  },
  // effect is number of cures per tick
  // profit is how much "fund" it generates for each cure
  pharmacy: {
    level: 0,
    effect: 0,
    profit: 5,
    cost: 50000
  },
  laboratory: {
    level: 0,
    effect: 0,
    profit: 5,
    cost: 150000
  },
  hospital: {
    level: 0,
    cost: 500000
  },
  drivethru: {
    level: 0,
    cost: 500000
  }
}

const MEDIUM_DIFFICULTY = {
  status: {
    infected: 25000,
    death: 0,
    fund: 2500
  }
};

const HARD_DIFFICULTY = {
  status: {
    infected: 50000,
    death: 0,
    fund: 0
  }
};

// Array of clicker effects
// CLICKER_EFFECTS_ARRAY[ clicker level - 1 ] = clicker effect
//  ex) for level 5 clicker, CLICKER_EFFECTS_ARRAY[ 5 - 1 ] = 10 is the
//      number of cures per click.
const CLICKER_EFFECTS_ARRAY = [
  1, 2, 3, 4, 10,                         // 1~5 levels
  12, 14, 16, 18, 40,                     // 6~10 levels
  45, 50, 55, 60, 100,                    // 11~15 levels
  110, 120, 130, 140, 250,                // 16~20 levels
  250, 300, 350, 400, 1000,               // 21~25 levels
  1100, 1200, 1300, 1400, 3000,           // 26~30 levels
  3300, 3600, 3900, 4200, 10000,          // 31-35 levels
  11000, 12000, 13000, 14000, 50000,      // 36~40 levles
  54000, 58000, 62000, 66000, 100000,     // 41~45 levels
  110000, 120000, 130000, 140000, 300000, // 46~50 levles
  330000, 360000, 390000, 420000, 800000  // 51~55(max) levels
];

const CLICKER_COSTS_ARRAY = [];

const PHARMACY_EFFECTS_ARRAY = [];

const PHARMACY_COSTS_ARRAY = [];

const LABORATORY_EFFECTS_ARRAY = [];

const LABORATORY_COSTS_ARRAY = [];

const HOSPITAL_COSTS_ARRAY = [];

const DRIVE_THRU_COSTS_ARRAY = [];

module.exports = {
  INITIAL_STATE,
  MEDIUM_DIFFICULTY,
  HARD_DIFFICULTY,
  CLICKER_EFFECTS_ARRAY,
  CLICKER_COSTS_ARRAY,
  PHARMACY_EFFECTS_ARRAY,
  PHARMACY_COSTS_ARRAY,
  LABORATORY_EFFECTS_ARRAY,
  LABORATORY_COSTS_ARRAY,
  HOSPITAL_COSTS_ARRAY,
  DRIVE_THRU_COSTS_ARRAY
};