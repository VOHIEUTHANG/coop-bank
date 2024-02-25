import React, { useState, useMemo } from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';
import DataTable from 'components/shared/DataTable/index';
import Accordion from 'components/shared/Accordion/index';
import ModalAddCustomer from '../Modal/RepresentativeModel';
import { PositionOptions } from 'pages/Representative/utils/constants';

const RepresentativeList = ({ disabled, title }) => {
  const methods = useFormContext();
  const [openModel, setOpenModel] = useState(false);
  const { control } = methods;

  const { remove, fields } = useFieldArray({
    control,
    name: 'representatives',
  });

  const columns = [
    {
      header: 'STT',
      formatter: (_, index) => index + 1,
      classNameBody: 'cb_text_center',
      classNameHeader: 'cb_text_center',
    },
    {
      header: 'Tên người đại diện',
      classNameHeader: 'cb_text_center',
      accessor: 'representative_name',
    },
    {
      header: 'Số điện thoại',
      classNameHeader: 'cb_text_center',
      accessor: 'phone_number',
    },
    {
      header: 'Chức vụ',
      classNameHeader: 'cb_text_center',
      formatter: (item, index) => (
        <span>
          {PositionOptions.find((position) => position.value === item.representative_position)?.label ||
            'Không xác định'}
        </span>
      ),
    },
    {
      header: 'Căn cước công dân',
      classNameHeader: 'cb_text_center',
      accessor: 'id_number',
    },
  ];

  const actions = useMemo(
    () => [
      {
        globalAction: true,
        icon: 'ti-plus',
        type: 'success',
        content: 'Thêm người đại diện',
        onClick: () => {
          setOpenModel(true);
        },
      },
      {
        icon: 'ti-eye',
        disabled: disabled,
        onClick: (item) => {
          window.open(`/representative/detail/${item.representative_id}`, '_blank', 'rel=noopener noreferrer');
        },
      },
      {
        icon: 'fi ti-trash',
        color: 'red',
        disabled: disabled,
        onClick: (_, index) => {
          if (!disabled) {
            remove(index);
          }
        },
      },
    ],
    [],
  );

  return (
    <Accordion title={title} isRequired={true}>
      <div className='cb_col_12'>
        <DataTable noSelect noPaging actions={actions} columns={columns} data={fields || []} />
      </div>
      {openModel && !disabled ? <ModalAddCustomer open={openModel} onClose={() => setOpenModel(false)} /> : null}
    </Accordion>
  );
};

export default RepresentativeList;