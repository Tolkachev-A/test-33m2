import { AppActionsType } from '../../constants';

const initState = {
  isInitializedApp: false,
  isLoading: false,
  error: null,
};

export const appReducer = (state = initState, action) => {
  switch (action.type) {
    case AppActionsType.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case AppActionsType.IS_INITIALIZED_APP:
      return {
        ...state,
        isInitializedApp: action.payload,
      };
    case AppActionsType.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
