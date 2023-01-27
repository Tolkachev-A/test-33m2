import { CreaturesActionsType } from '../../constants';

export const setCreatures = payload => ({
  type: CreaturesActionsType.SET_CREATURES,
  payload,
});

export const setDataCreature = payload => ({
  type: CreaturesActionsType.SET_DATA_CREATURE,
  payload,
});
