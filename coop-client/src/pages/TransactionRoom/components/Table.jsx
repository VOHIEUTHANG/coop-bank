import React, { useCallback } from 'react';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { showConfirmModal } from 'actions/global';
import { deleteBranch } from 'services/branch.service';
import DataTable from 'components/shared/DataTable/index';
import { Tooltip } from 'antd';

const AccountingPeriodTable = ({
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
  const columns = useMemo(
    () => [
      {
        header: 'STT',
        classNameHeader: 'cb_text_center',
        classNameBody: 'cb_text_center',
        formatter: (_, index) => <span className='cb_text_wrap'>{index + 1}</span>,
      },
      {
        header: 'Tên phòng giao dịch',
        classNameHeader: 'cb_text_center',
        accessor: 'transaction_room_name',
      },
      {
        header: 'Địa chỉ',
        classNameHeader: 'cb_text_center',
        accessor: 'address',
      },
      {
        header: 'Số điện thoại',
        classNameHeader: 'cb_text_center',
        classNameBody: 'cb_text_center',
        formatter: (item, index) => (
          <span>{`${item.phone_number_main ?? ''} ${item.phone_number_sub ? `- ${item.phone_number_sub}` : ''}`}</span>
        ),
      },
      {
        header: 'Người tạo',
        classNameHeader: 'cb_text_center',
        classNameBody: 'cb_text_center',
        formatter: (item, index) => (
          <Tooltip placement='right' title={`Mã nhân viên: ${item.created_username}`}>
            <span>{item.created_fullname}</span>
          </Tooltip>
        ),
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
      await deleteBranch(branchId);
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
        onClick: () => window._$g.rdr(`/transaction-room/add`),
      },
      {
        icon: 'ti-write',
        color: 'blue',
        title: 'Sửa',
        onClick: (p) => {
          window._$g.rdr(`/transaction-room/edit/${p?.transaction_room_id}`);
        },
      },
      {
        icon: 'ti-eye',
        color: 'green',
        title: 'Chi tiết',
        onClick: (p) => {
          window._$g.rdr(`/transaction-room/detail/${p?.transaction_room_id}`);
        },
      },
      {
        icon: 'fi ti-trash',
        color: 'red',
        title: 'Xóa',
        onClick: (_, d) =>
          dispatch(
            showConfirmModal(['Bạn có thực sự muốn xóa?', 'Bạn sẽ mất dữ liệu này và các dữ liệu liên quan.'], () =>
              handleDelete([_.transaction_room_id]),
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

export default AccountingPeriodTable;
