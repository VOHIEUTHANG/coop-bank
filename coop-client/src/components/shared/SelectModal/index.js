import React, { useState } from 'react';
import Accordion from '../Accordion';
import SelectModalTable from './SelectModalTable';
import SelectTable from './SelectTable';

const SelectModal = ({
  title,
  hiddenFilter,
  noLoadData,
  hiddenSelect,
  fieldCheck,
  fieldList,
  noPaging,
  columns,
  actionsFilter,
  actionsTable,
  getList,
  hiddenDeleteClick,
}) => {
  const [modal, setModal] = useState(false);

  const actionsTableParse = [...actionsTable, {}];

  return (
    <Accordion title={title}>
      <div className='bw_row'>
        <SelectTable
          hiddenFilter={hiddenFilter}
          hiddenDeleteClick={hiddenDeleteClick}
          noLoadData={noLoadData}
          hiddenSelect={hiddenSelect}
          fieldCheck={fieldCheck}
          fieldList={fieldList}
          noPaging={noPaging}
          columns={columns}
          actionsFilter={actionsFilter}
          actionsTable={actionsTable}
          getList={getList}
        />
      </div>
      {modal && <SelectModalTable />}
    </Accordion>
  );
};

export default SelectModal;
