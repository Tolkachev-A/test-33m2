import axios from 'axios';

import { setError } from 'store/actions';

export const extractError = (e, dispatch) => {
  if (axios.isAxiosError(e)) {
    const error = e.response?.data ? e.response.data.detail : e.message;

    dispatch(setError(error));
  } else {
    dispatch(setError(`Native error ${e.message}`));
  }
};
