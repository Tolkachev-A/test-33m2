import { CreaturesActionsType } from '../../constants';

const initState = {
  creatures: [],
  count: null,
  next: null,
  previous: null,
  dataCreature: null,
};

export const creaturesReducer = (state = initState, action) => {
  switch (action.type) {
    case CreaturesActionsType.SET_CREATURES:
      return {
        ...state,
        creatures: action.payload.results,
        count: action.payload.count,
        next: action.payload.next,
        previous: action.payload.previous,
      };
    case CreaturesActionsType.SET_DATA_CREATURE:
      return {
        ...state,
        dataCreature: action.payload,
      };
    default:
      return state;
  }
};
