import { custom } from 'devextreme/ui/dialog';

import { setError } from 'store/actions';

export const showError = (error, dispatch) => {
  let myDialog = custom({
    title: 'Error',
    messageHtml: error,
    buttons: [
      {
        text: 'closed',
        onClick: e => {
          dispatch(setError(null));
        },
      },
      // ...
    ],
  });

  myDialog.show();
};
