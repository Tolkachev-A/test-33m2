import React, { useState } from 'react';

import Menu, { Item } from 'devextreme-react/menu';
import { useLocation, useNavigate } from 'react-router';

import { paths } from '../../constants';

import 'devextreme/dist/css/dx.light.css';
import './header.css';
import { extractStr } from 'utils';

export const Header = () => {
  const navigation = useNavigate();
  const { pathname } = useLocation();

  const [valueSelected, setValueSelected] = useState(extractStr(pathname));

  const onItemClick = e => {
    let valuePaths;

    if (e.event.currentTarget.innerText) {
      valuePaths = e.event.currentTarget.innerText.toLowerCase();
    }

    setValueSelected(valuePaths === 'home' ? '/' : valuePaths);

    navigation(paths[valuePaths]);
  };

  return (
    <nav className={'nav'}>
      <Menu onItemClick={onItemClick} selectionMode={'single'} selectByClick={true}>
        <Item selected={valueSelected === ''} icon="home" text={'Home'} />
        <Item selected={valueSelected === 'creatures'} icon={'card'} text={'Creatures'} />
        <Item selected={valueSelected === 'planets'} icon={'globe'} text={'Planets'} />
      </Menu>
    </nav>
  );
};
