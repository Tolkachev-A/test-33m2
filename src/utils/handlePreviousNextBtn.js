import { extractNumber } from 'utils/extractNumber';

export const handlePreviousNextBtn = (
  hint,
  getData,
  previousLink,
  nextLink,
  dispatch,
) => {
  let page;

  if (hint === 'previous') {
    page = extractNumber(previousLink);
  } else if (hint === 'next') {
    page = extractNumber(nextLink);
  }
  dispatch(getData(page));
};
