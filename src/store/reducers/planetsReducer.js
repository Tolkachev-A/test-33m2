import { PlanetsActionsType } from '../../constants';

const initState = {
  planets: [],
  count: null,
  next: null,
  previous: null,
  dataPlanet: null,
};

export const planetsReducer = (state = initState, action) => {
  switch (action.type) {
    case PlanetsActionsType.SET_PLANETS:
      return {
        ...state,
        planets: action.payload.results,
        count: action.payload.count,
        next: action.payload.next,
        previous: action.payload.previous,
      };
    case PlanetsActionsType.SET_DATA_PLANET:
      return {
        ...state,
        dataPlanet: action.payload,
      };
    default:
      return state;
  }
};
