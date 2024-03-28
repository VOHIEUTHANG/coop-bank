import React, { useCallback } from 'react';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { showConfirmModal } from 'actions/global';
import { deleteGift } from 'services/gift.service';
import DataTable from 'components/shared/DataTable/index';
import { useAuth } from 'context/AuthProvider';
import { formatPrice } from 'utils';

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
        header: 'Đơn vị nhận',
        classNameHeader: 'cb_text_center',
        accessor: 'affiliate_unit_name',
      },
      {
        header: 'Mã đơn vị nhận',
        classNameHeader: 'cb_text_center',
        accessor: 'affiliate_unit_code',
      },
      {
        header: 'Tổng số tiền quà',
        classNameHeader: 'cb_text_center',
        classNameBody: 'cb_text_right',
        formatter: (item) =>
          formatPrice(
            item?.gifts?.reduce((acc, gift) => acc + gift.gift_price * gift.gift_quantity, 0),
            true,
            '.',
          ),
      },
      {
        header: 'Người tặng',
        classNameHeader: 'cb_text_center',
        accessor: 'giver_user_name',
      },
      {
        header: 'Người đề xuất',
        classNameHeader: 'cb_text_center',
        accessor: 'proposed_user_name',
      },
      {
        header: 'Ngày tặng',
        accessor: 'gift_date',
        classNameHeader: 'cb_text_center',
        classNameBody: 'cb_text_center',
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
        icon: 'ti-export',
        type: 'success',
        content: 'Xuất excel',
        outline: true,
        onClick: exportExcel,
      },
      {
        globalAction: true,
        icon: 'ti-plus',
        type: 'success',
        content: 'Thêm mới',
        onClick: () => window._$g.rdr(`gift/add`),
        hidden: user?.is_admin,
      },
      {
        icon: 'ti-write',
        color: 'blue',
        title: 'Sửa',
        onClick: (p) => {
          window._$g.rdr(`gift/edit/${p?.gift_id}`);
        },
      },
      {
        icon: 'ti-eye',
        color: 'green',
        title: 'Chi tiết',
        onClick: (p) => {
          window._$g.rdr(`gift/detail/${p?.gift_id}`);
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
