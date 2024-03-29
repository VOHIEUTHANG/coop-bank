import React, { useCallback } from 'react';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { showConfirmModal } from 'actions/global';
import { deleteBankRepresentative } from 'services/bank-representative.service';
import DataTable from 'components/shared/DataTable/index';
import { PositionOptions } from '../utils/constants';
import { useAuth } from 'context/AuthProvider';

const RepresentativeTable = ({
  loading,
  data,
  totalPages,
  itemsPerPage,
  page,
  totalItems,
  onChangePage,
  onRefresh,
}) => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const columns = useMemo(
    () => [
      {
        header: 'STT',
        classNameHeader: 'cb_text_center',
        classNameBody: 'cb_text_center',
        formatter: (_, index) => <span className='cb_text_wrap'>{index + 1}</span>,
      },
      {
        header: 'Tên người đại diện',
        classNameHeader: 'cb_text_center',
        accessor: 'bank_representative_name',
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
            {PositionOptions.find((position) => position.value === item.bank_representative_position)?.label ||
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
      {
        header: 'Ngày tạo',
        accessor: 'created_at',
        classNameHeader: 'cb_text_center',
        classNameBody: 'cb_text_center',
      },
    ],
    [],
  );

  const handleDelete = useCallback(
    async (branchId) => {
      await deleteBankRepresentative(branchId);
      onRefresh();
    },
    [onRefresh],
  );

  const actions = useMemo(() => {
    return [
      {
        globalAction: true,
        icon: 'ti-plus',
        type: 'success',
        content: 'Thêm mới',
        onClick: () => window._$g.rdr(`/bank-representative/add`),
      },
      {
        icon: 'ti-write',
        color: 'blue',
        title: 'Sửa',
        onClick: (p) => {
          window._$g.rdr(`/bank-representative/edit/${p?.bank_representative_id}`);
        },
      },
      {
        icon: 'ti-eye',
        color: 'green',
        title: 'Chi tiết',
        onClick: (p) => {
          window._$g.rdr(`/bank-representative/detail/${p?.bank_representative_id}`);
        },
      },
      {
        icon: 'fi ti-trash',
        color: 'red',
        title: 'Xóa',
        hidden: (x) => {
          return user.is_admin ? false : x.created_username !== user.username;
        },
        onClick: (_, d) =>
          dispatch(
            showConfirmModal(['Bạn có thực sự muốn xóa?', 'Bạn sẽ mất dữ liệu này và các dữ liệu liên quan.'], () =>
              handleDelete([_.bank_representative_id]),
            ),
          ),
      },
    ];
  }, [dispatch, handleDelete]);

  return (
    <DataTable
      loading={loading}
      columns={columns}
      data={data}
      actions={actions}
      totalPages={totalPages}
      itemsPerPage={itemsPerPage}
      page={page}
      totalItems={totalItems}
      onChangePage={onChangePage}
    />
  );
};

export default RepresentativeTable;
