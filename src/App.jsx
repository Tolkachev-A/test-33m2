import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import 'app.css';
import 'devextreme/dist/css/dx.light.css';

import { paths } from './constants';

import { Card } from 'components/common/Card';
import { Loader } from 'components/common/Loader';
import { Creatures } from 'components/Creatures';
import { Header } from 'components/Header';
import { Home } from 'components/Home';
import { Planets } from 'components/Planets';
import { setInitializedApp } from 'store/actions';
import {
  selectDataCreature,
  selectDataPlanet,
  selectError,
  selectIsInitializedApp,
} from 'store/selectors';
import { showError } from 'utils';

export const App = () => {
  const dispatch = useDispatch();

  const dataCreature = useSelector(selectDataCreature);
  const dataPlanet = useSelector(selectDataPlanet);
  const isInitializedApp = useSelector(selectIsInitializedApp);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(setInitializedApp(true));
  }, [dispatch]);

  if (!isInitializedApp) {
    return <Loader />;
  }

  if (error) {
    showError(error, dispatch);
  }

  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <main className={'main'}>
        <Routes>
          <Route path={paths.home} element={<Home />} />
          <Route path={paths.creatures} element={<Creatures />} />
          <Route path={`${paths.creatures}/:id`} element={<Card data={dataCreature} />} />
          <Route path={paths.planets} element={<Planets />} />
          <Route path={`${paths.planets}/:id`} element={<Card data={dataPlanet} />} />
        </Routes>
      </main>
    </div>
  );
};
