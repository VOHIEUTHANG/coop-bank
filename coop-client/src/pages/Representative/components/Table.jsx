import React, { useCallback } from 'react';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { showConfirmModal } from 'actions/global';
import { deleteRepresentative } from 'services/representative.service';
import DataTable from 'components/shared/DataTable/index';
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
  const { user } = useAuth();
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
        accessor: 'representative_position',
      },
      {
        header: 'Mã đơn vị',
        classNameHeader: 'cb_text_center',
        formatter: (record) => record?.affiliateUnits?.[0]?.affiliate_unit_code,
      },
      {
        header: 'Tên đơn vị',
        classNameHeader: 'cb_text_center',
        formatter: (record) => record?.affiliateUnits?.[0]?.affiliate_unit_name,
      },
      {
        header: 'Số quyết định',
        classNameHeader: 'cb_text_center',
        accessor: 'decision_number',
      },
      {
        header: 'Ngày hiệu lực',
        classNameHeader: 'cb_text_center',
        accessor: 'effective_date_from',
      },
      {
        header: 'Ngày hết hiệu lực',
        classNameHeader: 'cb_text_center',
        accessor: 'effective_date_to',
      },
      {
        header: 'Cấp đơn vị',
        classNameHeader: 'cb_text_center',
        formatter: (record) => record?.affiliateUnits?.[0]?.affiliate_unit_level,
      },
      {
        header: 'Người tạo',
        accessor: 'created_fullname',
        classNameHeader: 'cb_text_center',
        classNameBody: 'cb_text_center',
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
      await deleteRepresentative(branchId);
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
        onClick: () => window._$g.rdr(`representative/add`),
        hidden: user?.is_admin,
      },
      {
        icon: 'ti-write',
        color: 'blue',
        title: 'Sửa',
        onClick: (p) => {
          window._$g.rdr(`representative/edit/${p?.representative_id}`);
        },
      },
      {
        icon: 'ti-eye',
        color: 'green',
        title: 'Chi tiết',
        onClick: (p) => {
          window._$g.rdr(`representative/detail/${p?.representative_id}`);
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
              handleDelete([_.representative_id]),
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
