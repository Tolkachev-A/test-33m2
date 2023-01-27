import React, { useEffect, useMemo } from 'react';

import Form, { GroupItem, Item, Label } from 'devextreme-react/form';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router';

import { Loader } from 'components/common/Loader';
import { selectIsLoading } from 'store/selectors';
import { getOneCreature, getOnePlanet } from 'store/thunks';
import { extractStr } from 'utils';

export const Card = ({ data }) => {
  const { pathname } = useLocation();
  const { id } = useParams();

  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);

  const valueURLParams = extractStr(pathname);

  const valueItems = data && Object.keys(data);

  const elementsValueString = useMemo(() => {
    return valueItems?.map((creature, index) => {
      if (Array.isArray(data[creature])) {
        return null;
      }

      return <Item key={index} dataField={creature} editorOptions={{ disabled: true }} />;
    });
  }, [data, valueItems]);

  const elementsValueArray = useMemo(() => {
    let resultItems = [];

    valueItems?.forEach((creature, index) => {
      if (Array.isArray(data[creature])) {
        if (!data[creature].length) {
          return null;
        }

        resultItems.push(
          <GroupItem key={index} caption={creature}>
            {data[creature].map((item, ind) => {
              return (
                <Item alignmen="center" key={ind}>
                  {item}
                </Item>
              );
            })}
          </GroupItem>,
        );
      }
    });

    return resultItems;
  }, [data, valueItems]);

  useEffect(() => {
    if (valueURLParams === 'creatures') {
      dispatch(getOneCreature(id));
    } else if (valueURLParams === 'planets') {
      dispatch(getOnePlanet(id));
    }
  }, [dispatch, id, valueURLParams]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Form formData={data}>
      <GroupItem colCount={3}>{elementsValueString}</GroupItem>
      <GroupItem colCount={3}>{elementsValueArray}</GroupItem>
    </Form>
  );
};
