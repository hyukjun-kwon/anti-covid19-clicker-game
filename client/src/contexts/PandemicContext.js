import React, { createContext, useReducer, useContext } from "react";
import {
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
  DRIVETHRU_COSTS_ARRAY
} from "./constants";

let tickCount = 0;

const PandemicContext = createContext(INITIAL_STATE);
const { Provider } = PandemicContext;

const reducer = (state, action) => {
  switch (action.type) {
  case "SET_EASY_DIFFICULTY":
    return INITIAL_STATE
  case "SET_MEDIUM_DIFFICULTY":
    return {
      ...state,
      difficulty: "medium",
      status: MEDIUM_DIFFICULTY
    };
  case "SET_HARD_DIFFICULTY":
    return {
      ...state,
      difficulty: "hard",
      status: HARD_DIFFICULTY
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
          ...state
        }
      }
      // Every 15 ticks
      // Effects from SPREAD + DEATH + PHARMACY
      else if (!(tickCount % 15)) {
        return {
          ...state,
          status: {
            infected: parseInt(state.status.infected * state.rates.spreadRate) - state.pharmacy.effect,
            death: state.status.death + parseInt(state.status.infected * state.rates.deathRate),
            fund: state.status.fund + (state.pharmacy.effect * state.pharmacy.profit)
          }
        }
      }
      // Every 10 ticks
      // Effects from SPREAD + LABORATORY + PHARMACY
      else if (!(tickCount % 10)) {

        return {
          ...state,
          status: {
            infected: parseInt(state.status.infected * state.rates.spreadRate) - state.pharmacy.effect - state.laboratory.effect,
            death: state.status.death,
            fund: state.status.fund + (state.pharmacy.effect * state.pharmacy.profit) + (state.laboratory.effect * state.laboratory.profit)
          }
        }

      }
      // Every 5 ticks
      // Effects from SPREAD + PHARMACY
      else if (!(tickCount % 5)) {
        return {
          ...state,
          status: {
            infected: parseInt(state.status.infected * state.rates.spreadRate) - state.pharmacy.effect,
            death: state.status.death,
            fund: state.status.fund + (state.pharmacy.effect * state.pharmacy.profit)
          }
        }
      }
      // Every tick
      // Effect from SPREAD
      else {
        return {
          ...state,
          status: {
            infected: parseInt(state.status.infected * state.rates.spreadRate),
            death: state.status.death,
            fund: state.status.fund
          }
        }
      };

    // Each "click" reduces status.infected by clicker.effect
    //  & adds to status.fund by (clicker.effect * clicker.profit)
    case "CLICK":
      return {
        ...state,
        status: {
          infected: state.status.infected - state.clicker.effect,
          death: state.status.death,
          fund: state.status.fund + (state.clicker.effect * state.clicker.profit)
        }
      };
    // When clicker levels, it should increment clicker level,
    //  & update the clicker.effect accordingly
    case "CLICKER_LEVEL_UP":
      // Since array starts at index 0, we can get the next clicker effect,
      // by simply passing current clicker level

      //
      // if( leve is max ) - ADD LATER
      //

      let newClickerEffect = CLICKER_EFFECTS_ARRAY[state.clicker.level];
      let newClickerCost = CLICKER_COSTS_ARRAY[state.clicker.cost];

      return {
        ...state,
        clicker: {
          level: state.clicker.level + 1,
          effect: newClickerEffect,
          profit: state.clicker.profit,
          cost: newClickerCost
        }
      };

    case "PHARMACY_LEVEL_UP":
      let newPharmacyEffect = PHARMACY_EFFECTS_ARRAY[state.pharmacy.level];
      let newPharmacyCost = PHARMACY_COSTS_ARRAY[state.pharmacy.level];

      return {
        ...state,
        pharmacy: {
          level: state.pharmacy.level + 1,
          effect: newPharmacyEffect,
          profit: state.pharmacy.profit,
          cost: newPharmacyCost
        }
      };

    case "LABORATORY_LEVEL_UP":
      let newLaboratoryEffect = LABORATORY_EFFECTS_ARRAY[state.laboratory.level];
      let newLaboratoryCost = LABORATORY_COSTS_ARRAY[state.laboratory.level];

      return {
        ...state,
        laboratory: {
          level: state.laboratory.level + 1,
          effect: newLaboratoryEffect,
          profit: state.laboratory.profit,
          cost: newLaboratoryCost
        }
      }

    case "HOSPITAL_LEVEL_UP":
      let newHospitalCost = HOSPITAL_COSTS_ARRAY[state.hospital.level];

      return {
        ...state,
        rates: {
          spreadRate: state.rates.spreadRate,
          deathRate: state.rates.deathRate - 0.002
        },
        hospital: {
          level: state.hospital.level + 1,
          cost: newHospitalCost
        }
      }

    case "DRIVE_THRU_LEVEL_UP":
      let newDrivethruCost = DRIVETHRU_COSTS_ARRAY[state.drivethru.level];

      return {
        ...state,
        rates: {
          spreadRate: state.rates.spreadRate - 0.004,
          deathRate: state.rates.deathRate
        },
        drivethru: {
          level: state.drivethru.level + 1,
          cost: newDrivethruCost
        }
      }

    // Winning Condition Met
    case "WIN":
      return {
        ...state,
        isComplete: true,
        won: true
      }
    // Losing Condition Met
    case "LOST":
      return {
        ...state,
        isComplete: true,
      }

    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
};

const PandemicProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return <Provider value={[state, dispatch]}>
    {props.children}
  </Provider>;
};

const usePandemicContext = () => {
  return useContext(PandemicContext);
};

export { PandemicProvider, usePandemicContext };
