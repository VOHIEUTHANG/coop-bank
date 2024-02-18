import React, { useCallback } from 'react';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { showConfirmModal } from 'actions/global';
import { deleteGift } from 'services/gift.service';
import DataTable from 'components/shared/DataTable/index';
import { Permission } from '../utils/constants';

const RepresentativeTable = ({
  loading,
  data,
  totalPages,
  itemsPerPage,
  page,
  totalItems,
  onChangePage,
  onRefresh,
  exportExcel,
}) => {
  const dispatch = useDispatch();
  const columns = useMemo(
    () => [
      {
        header: 'STT',
        classNameHeader: 'bw_text_center',
        classNameBody: 'bw_text_center',
        formatter: (_, index) => <span className='bw_text_wrap'>{index + 1}</span>,
      },
      {
        header: 'Nội dung quà tặng',
        classNameHeader: 'bw_text_center',
        accessor: 'gift_content',
      },
      {
        header: 'Đơn vị nhận',
        classNameHeader: 'bw_text_center',
        accessor: 'affiliate_unit_name',
      },
      {
        header: 'Người tặng',
        classNameHeader: 'bw_text_center',
        accessor: 'giver_user_name',
      },
      {
        header: 'Ngày tặng',
        accessor: 'gift_date',
        classNameHeader: 'bw_text_center',
        classNameBody: 'bw_text_center',
      },
      {
        header: 'Người tạo',
        accessor: 'created_fullname',
        classNameHeader: 'bw_text_center',
        classNameBody: 'bw_text_center',
      },
      {
        header: 'Ngày tạo',
        accessor: 'created_at',
        classNameHeader: 'bw_text_center',
        classNameBody: 'bw_text_center',
      },
    ],
    [],
  );

  const handleDelete = useCallback(
    async (Id) => {
      await deleteGift(Id);
      onRefresh();
    },
    [onRefresh],
  );

  const actions = useMemo(() => {
    return [
      {
        globalAction: true,
        icon: 'fi fi-rr-inbox-out',
        type: 'success',
        content: 'Xuất excel',
        outline: true,
        permission: Permission.EXPORT,
        onClick: exportExcel,
      },
      {
        globalAction: true,
        icon: 'fi fi-rr-add',
        type: 'success',
        content: 'Thêm mới',
        permission: Permission.ADD,
        onClick: () => window._$g.rdr(`gift/add`),
      },
      {
        icon: 'fi fi-rr-edit',
        color: 'blue',
        title: 'Sửa',
        permission: Permission.EDIT,
        onClick: (p) => {
          window._$g.rdr(`gift/edit/${p?.gift_id}`);
        },
      },
      {
        icon: 'fi fi-rr-eye',
        color: 'green',
        title: 'Chi tiết',
        permission: Permission.VIEW,
        onClick: (p) => {
          window._$g.rdr(`gift/detail/${p?.gift_id}`);
        },
      },
      {
        icon: 'fi fi-rr-trash',
        color: 'red',
        title: 'Xóa',
        permission: Permission.DELETE,
        onClick: (_, d) =>
          dispatch(
            showConfirmModal(['Bạn có thực sự muốn xóa?', 'Bạn sẽ mất dữ liệu này và các dữ liệu liên quan.'], () =>
              handleDelete([_.gift_id]),
            ),
          ),
      },
    ];
  }, [dispatch, handleDelete, exportExcel]);

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
