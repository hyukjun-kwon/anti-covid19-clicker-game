import React, { createContext, useReducer, useContext } from "react";
import {
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
} from "./constants";

let tickCount = 0;

const PandemicContext = createContext(INITIAL_STATE);
const { Provider } = PandemicContext;

const reducer = (state, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return {
        ...state,
        token: action.token,
        player: action.player,
      };
    case "SET_EASY_DIFFICULTY":
      return {
        ...state,
        difficulty: "easy",
        status: EASY_DIFFICULTY,
      };
    case "SET_MEDIUM_DIFFICULTY":
      return {
        ...state,
        difficulty: "medium",
        status: MEDIUM_DIFFICULTY,
      };
    case "SET_HARD_DIFFICULTY":
      return {
        ...state,
        difficulty: "hard",
        status: HARD_DIFFICULTY,
      };

    case "CLICK":
      return {
        ...state,
        status: {
          infected: state.status.infected - state.clicker.effect,
          death: state.status.death,
          fund: state.status.fund + state.clicker.effect * state.clicker.profit,
        },
      };

    // Summary:
    // Every 15 ticks: DEATH
    // Every 10 ticks: LABORATORY
    // Every 5 ticks: PHARMACY
    // Every 1 tick: SPREAD
    case "TICK":
      tickCount++;
      if (state.isComplete) {
        return {
          ...state,
        };
      }
      // Every 15 ticks
      // Effects from SPREAD + DEATH + PHARMACY
      else if (!(tickCount % 15)) {
        return {
          ...state,
          status: {
            infected:
              parseInt(state.status.infected * state.rates.spreadRate) -
              state.pharmacy.effect,
            death:
              state.status.death +
              parseInt(state.status.infected * state.rates.deathRate),
            fund:
              state.status.fund + state.pharmacy.effect * state.pharmacy.profit,
          },
        };
      }
      // Every 10 ticks
      // Effects from SPREAD + LABORATORY + PHARMACY
      else if (!(tickCount % 10)) {
        return {
          ...state,
          status: {
            infected:
              parseInt(state.status.infected * state.rates.spreadRate) -
              state.pharmacy.effect -
              state.laboratory.effect,
            death: state.status.death,
            fund:
              state.status.fund +
              state.pharmacy.effect * state.pharmacy.profit +
              state.laboratory.effect * state.laboratory.profit,
          },
        };
      }
      // Every 5 ticks
      // Effects from SPREAD + PHARMACY
      else if (!(tickCount % 5)) {
        return {
          ...state,
          status: {
            infected:
              parseInt(state.status.infected * state.rates.spreadRate) -
              state.pharmacy.effect,
            death: state.status.death,
            fund:
              state.status.fund + state.pharmacy.effect * state.pharmacy.profit,
          },
        };
      }
      // Every tick
      // Effect from SPREAD
      else {
        return {
          ...state,
          status: {
            infected: parseInt(state.status.infected * state.rates.spreadRate),
            death: state.status.death,
            fund: state.status.fund,
          },
        };
      }

    // When clicker levels, it should increment clicker level,
    //  & update the clicker.effect accordingly
    case "CLICKER_LEVEL_UP":
      // Since array starts at index 0, we can get the next clicker effect,
      // by simply passing current clicker level

      //
      // if( leve is max ) - ADD LATER
      //

      let newClickerEffect = CLICKER_EFFECTS_ARRAY[state.clicker.level];
      let newClickerCost = CLICKER_COSTS_ARRAY[state.clicker.level + 1];
      let newFundC = state.status.fund - state.clicker.cost;

      return {
        ...state,
        status: {
          infected: state.status.infected,
          death: state.status.death,
          fund: newFundC,
        },
        clicker: {
          level: state.clicker.level + 1,
          effect: newClickerEffect,
          profit: state.clicker.profit,
          cost: newClickerCost,
          special: state.clicker.special,
          multiplier: state.clicker.multiplier,
        },
      };

    case "PHARMACY_LEVEL_UP":
      let newPharmacyEffect = PHARMACY_EFFECTS_ARRAY[state.pharmacy.level];
      let newPharmacyCost = PHARMACY_COSTS_ARRAY[state.pharmacy.level + 1];
      let newFundP = state.status.fund - state.pharmacy.cost;

      return {
        ...state,
        status: {
          infected: state.status.infected,
          death: state.status.death,
          fund: newFundP,
        },
        pharmacy: {
          level: state.pharmacy.level + 1,
          effect: newPharmacyEffect,
          profit: state.pharmacy.profit,
          cost: newPharmacyCost,
          special: state.pharmacy.special,
          multiplier: state.pharmacy.multiplier,
        },
      };

    case "LABORATORY_LEVEL_UP":
      let newLaboratoryEffect =
        LABORATORY_EFFECTS_ARRAY[state.laboratory.level];
      let newLaboratoryCost =
        LABORATORY_COSTS_ARRAY[state.laboratory.level + 1];
      let newFundL = state.status.fund - state.laboratory.cost;

      return {
        ...state,
        status: {
          infected: state.status.infected,
          death: state.status.death,
          fund: newFundL,
        },
        laboratory: {
          level: state.laboratory.level + 1,
          effect: newLaboratoryEffect,
          profit: state.laboratory.profit,
          cost: newLaboratoryCost,
          special: state.laboratory.special,
          multiplier: state.laboratory.multiplier,
        },
      };

    case "HOSPITAL_LEVEL_UP":
      let newHospitalCost = HOSPITAL_COSTS_ARRAY[state.hospital.level + 1];
      let newFundH = state.status.fund - state.hospital.cost;

      return {
        ...state,
        status: {
          infected: state.status.infected,
          death: state.status.death,
          fund: newFundH,
        },
        rates: {
          spreadRate: state.rates.spreadRate,
          deathRate: state.rates.deathRate - 0.0003,
        },
        hospital: {
          level: state.hospital.level + 1,
          cost: newHospitalCost,
        },
      };

    case "DRIVE_THRU_LEVEL_UP":
      let newDrivethruCost = DRIVETHRU_COSTS_ARRAY[state.drivethru.level + 1];
      let newFundD = state.status.fund - state.drivethru.cost;

      return {
        ...state,
        status: {
          infected: state.status.infected,
          death: state.status.death,
          fund: newFundD,
        },
        rates: {
          spreadRate: state.rates.spreadRate - 0.003,
          deathRate: state.rates.deathRate,
        },
        drivethru: {
          level: state.drivethru.level + 1,
          cost: newDrivethruCost,
        },
      };

    case "CLICKER_SPECIAL1_UPGRADE":
      return {
        ...state,
        status: {
          infected: state.status.infected,
          death: state.status.death,
          fund: state.status.fund - 50000,
        },
        clicker: {
          level: state.clicker.level,
          effect: state.clicker.effect * 3,
          profit: state.clicker.profit,
          cost: state.clicker.cost,
          special1: true,
          special2: state.clicker.special2,
          special3: state.clicker.special3,
        },
      };

    case "CLICKER_SPECIAL2_UPGRADE":
      return {
        ...state,
        status: {
          infected: state.status.infected,
          death: state.status.death,
          fund: state.status.fund - 500000,
        },
        clicker: {
          level: state.clicker.level,
          effect: state.clicker.effect * 3,
          profit: state.clicker.profit,
          cost: state.clicker.cost,
          special1: true,
          special2: true,
          special3: state.clicker.special3,
        },
      };

    case "CLICKER_SPECIAL3_UPGRADE":
      return {
        ...state,
        status: {
          infected: state.status.infected,
          death: state.status.death,
          fund: state.status.fund - 5000000,
        },
        clicker: {
          level: state.clicker.level,
          effect: state.clicker.effect * 3,
          profit: state.clicker.profit,
          cost: state.clicker.cost,
          special1: true,
          special2: true,
          special3: true,
        },
      };

    case "PHARMACY_SPECIAL1_UPGRADE":
      return {
        ...state,
        status: {
          infected: state.status.infected,
          death: state.status.death,
          fund: state.status.fund - 200000,
        },
        pharmacy: {
          level: state.pharmacy.level,
          effect: state.pharmacy.effect * 3,
          profit: state.pharmacy.profit,
          cost: state.pharmacy.cost,
          special1: true,
          special2: state.pharmacy.special2,
        },
      };
    case "PHARMACY_SPECIAL2_UPGRADE":
      return {
        ...state,
        status: {
          infected: state.status.infected,
          death: state.status.death,
          fund: state.status.fund - 5000000,
        },
        pharmacy: {
          level: state.pharmacy.level,
          effect: state.pharmacy.effect * 3,
          profit: state.pharmacy.profit,
          cost: state.pharmacy.cost,
          special1: true,
          special2: true,
        },
      };

    case "LABORATORY_SPECIAL1_UPGRADE":
      return {
        ...state,
        status: {
          infected: state.status.infected,
          death: state.status.death,
          fund: state.status.fund - 2000000,
        },
        pharmacy: {
          level: state.laboratory.level,
          effect: state.laboratory.effect * 3,
          profit: state.laboratory.profit,
          cost: state.laboratory.cost,
          special1: true,
          special2: state.laboratory.special2,
        },
      };
    case "LABORATORY_SPECIAL2_UPGRADE":
      return {
        ...state,
        status: {
          infected: state.status.infected,
          death: state.status.death,
          fund: state.status.fund - 10000000,
        },
        pharmacy: {
          level: state.laboratory.level,
          effect: state.laboratory.effect * 3,
          profit: state.laboratory.profit,
          cost: state.laboratory.cost,
          special1: true,
          special2: true,
        },
      };

    // Winning Condition Met
    case "WIN":
      return {
        ...state,
        isComplete: true,
        won: true,
      };
    // Losing Condition Met
    case "LOST":
      return {
        ...state,
        isComplete: true,
      };

    case "REINITIALIZE":
      return {
        ...state,
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

    case "QUIT":
      return {
        ...state,
        token: null,
        player: null,
      };

    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
};

const PandemicProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return <Provider value={[state, dispatch]}>{props.children}</Provider>;
};

const usePandemicContext = () => {
  return useContext(PandemicContext);
};

export { PandemicProvider, usePandemicContext };
