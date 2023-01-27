import { instance } from 'api/config';

export const fetchPlanets = (page = 1) => {
  return instance.get(`planets/?page=${page}`);
};

export const fetchOnePlanet = id => {
  return instance.get(`planets/${id}`);
};
