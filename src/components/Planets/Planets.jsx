import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { displayFieldsPlanets, paths } from '../../constants';

import { Table } from 'components/common/Table';
import {
  selectPlanetNextLink,
  selectPlanetPreviousLink,
  selectPlanets,
} from 'store/selectors';
import { getPlanets } from 'store/thunks/planetsThunks';

export const Planets = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const planets = useSelector(selectPlanets);
  const nextLink = useSelector(selectPlanetNextLink);
  const previousLink = useSelector(selectPlanetPreviousLink);

  const handleCellDblClick = id => {
    navigate(`${paths.planets}/${id}`);
  };

  useEffect(() => {
    dispatch(getPlanets());
  }, [dispatch]);

  return (
    <div>
      <Table
        data={planets}
        dataToDisplay={displayFieldsPlanets}
        handleCellDblClick={handleCellDblClick}
        previousLink={previousLink}
        nextLink={nextLink}
        getData={getPlanets}
      />
    </div>
  );
};
