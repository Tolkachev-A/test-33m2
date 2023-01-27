import React from 'react';

import { Tooltip } from 'devextreme-react';
import { Button } from 'devextreme-react/button';
import DataGrid, { Column, SearchPanel, Selection } from 'devextreme-react/data-grid';
import { useDispatch, useSelector } from 'react-redux';

import './table.css';
import { Loader } from 'components/common/Loader';
import { selectIsLoading } from 'store/selectors';
import { extractNumber } from 'utils';
import { handlePreviousNextBtn } from 'utils/handlePreviousNextBtn';

export const Table = ({
  data,
  dataToDisplay,
  handleCellDblClick,
  getData,
  previousLink,
  nextLink,
}) => {
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  const listItems = dataToDisplay.map((data, index) => (
    <Column key={index} dataField={data} alignment="center" />
  ));

  const onCellDblClick = e => {
    const id = extractNumber(e.key);

    handleCellDblClick(id, e.data);
  };

  const onPreviousNextBtnClick = e => {
    const hint = e.event.currentTarget.id;

    handlePreviousNextBtn(hint, getData, previousLink, nextLink, dispatch);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <DataGrid
        id="grid"
        keyExpr="url"
        dataSource={data}
        allowColumnReordering
        rowAlternationEnabled
        showBorders
        onCellDblClick={onCellDblClick}
      >
        <SearchPanel visible highlightCaseSensitive />

        {listItems}
        <Selection mode="single" />
      </DataGrid>

      <div className="  btn-container">
        <Button
          id="previous"
          icon="back"
          onClick={onPreviousNextBtnClick}
          disabled={!previousLink}
        />
        <Button
          id="next"
          icon="chevronright"
          onClick={onPreviousNextBtnClick}
          disabled={!nextLink}
        />
      </div>
      <Tooltip
        target="#previous"
        showEvent="dxhoverstart"
        hideEvent="dxhoverend"
        contentRender={() => <p>Prev data</p>}
      />
      <Tooltip
        target="#next"
        showEvent="dxhoverstart"
        hideEvent="dxhoverend"
        contentRender={() => <p>Nex data</p>}
      />
    </div>
  );
};
