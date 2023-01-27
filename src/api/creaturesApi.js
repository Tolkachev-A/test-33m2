import { instance } from 'api/config';

export const fetchCreatures = (page = 1) => {
  return instance.get(`people/?page=${page}`);
};

export const fetchOneCreature = id => {
  return instance.get(`people/${id}`);
};
