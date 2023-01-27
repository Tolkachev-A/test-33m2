import { fetchOnePlanet, fetchPlanets } from 'api';
import { setDataPlanet, setLoading, setPlanets } from 'store/actions';
import { extractError } from 'utils';

export const getPlanets = page => async dispatch => {
  try {
    dispatch(setLoading(true));
    const { data } = await fetchPlanets(page);

    dispatch(setPlanets(data));
  } catch (e) {
    extractError(e, dispatch);
  } finally {
    dispatch(setLoading(false));
  }
};

export const getOnePlanet = id => async dispatch => {
  try {
    dispatch(setLoading(true));
    const { data } = await fetchOnePlanet(id);

    dispatch(setDataPlanet(data));
  } catch (e) {
    extractError(e, dispatch);
  } finally {
    dispatch(setLoading(false));
  }
};
