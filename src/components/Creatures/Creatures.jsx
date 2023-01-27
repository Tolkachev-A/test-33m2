import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { displayFieldsCreatures, paths } from '../../constants';

import { Table } from 'components/common/Table';
import {
  selectCreatureNextLink,
  selectCreaturePreviousLink,
  selectCreatures,
} from 'store/selectors';
import { getCreatures } from 'store/thunks';

export const Creatures = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const creatures = useSelector(selectCreatures);
  const nextLink = useSelector(selectCreatureNextLink);
  const previousLink = useSelector(selectCreaturePreviousLink);

  const handleCellDblClick = id => {
    navigate(`${paths.creatures}/${id}`);
  };

  useEffect(() => {
    dispatch(getCreatures());
  }, [dispatch]);

  return (
    <div>
      <Table
        data={creatures}
        dataToDisplay={displayFieldsCreatures}
        handleCellDblClick={handleCellDblClick}
        previousLink={previousLink}
        nextLink={nextLink}
        getData={getCreatures}
      />
    </div>
  );
};
