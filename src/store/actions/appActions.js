import { AppActionsType } from '../../constants';

export const setInitializedApp = payload => ({
  type: AppActionsType.IS_INITIALIZED_APP,
  payload,
});

export const setLoading = payload => ({
  type: AppActionsType.SET_LOADING,
  payload,
});

export const setError = payload => ({
  type: AppActionsType.SET_ERROR,
  payload,
});
