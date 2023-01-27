import { PlanetsActionsType } from '../../constants';

export const setPlanets = payload => ({
  type: PlanetsActionsType.SET_PLANETS,
  payload,
});

export const setDataPlanet = payload => ({
  type: PlanetsActionsType.SET_DATA_PLANET,
  payload,
});
