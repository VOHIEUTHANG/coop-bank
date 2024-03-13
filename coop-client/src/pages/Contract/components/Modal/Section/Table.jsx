import React, { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import DataTable from 'components/shared/DataTable/index';
import { PositionOptions } from 'pages/Representative/utils/constants';

const RepresentativeTable = ({
  data,
  totalPages,
  itemsPerPage,
  page,
  totalItems,
  onChangePage,
  loading,
  setSelectedList,
}) => {
  const methods = useFormContext();
  const columns = useMemo(
    () => [
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
      {
        header: 'Ngày cấp',
        classNameHeader: 'cb_text_center',
        accessor: 'id_issued_date',
      },
    ],
    [],
  );

  return (
    <DataTable
      fieldCheck={'representative_id'}
      defaultDataSelect={methods.watch('representatives') || []}
      noSelect={false}
      hiddenDeleteClick
      columns={columns}
      data={data}
      actions={[]}
      totalPages={totalPages}
      itemsPerPage={itemsPerPage}
      page={page}
      totalItems={totalItems}
      onChangePage={onChangePage}
      loading={loading}
      onChangeSelect={(selectedData) => {
        setSelectedList(selectedData);
      }}
    />
  );
};

export default RepresentativeTable;
