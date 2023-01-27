import { fetchCreatures, fetchOneCreature } from 'api';
import { setCreatures, setDataCreature, setLoading } from 'store/actions';
import { extractError } from 'utils';

export const getCreatures = page => async dispatch => {
  try {
    dispatch(setLoading(true));
    const { data } = await fetchCreatures(page);

    dispatch(setCreatures(data));
  } catch (e) {
    extractError(e, dispatch);
  } finally {
    dispatch(setLoading(false));
  }
};

export const getOneCreature = id => async dispatch => {
  try {
    dispatch(setLoading(true));
    const { data } = await fetchOneCreature(id);

    dispatch(setDataCreature(data));
  } catch (e) {
    extractError(e, dispatch);
  } finally {
    dispatch(setLoading(false));
  }
};
