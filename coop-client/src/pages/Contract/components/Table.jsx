import React, { useCallback } from 'react';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { showConfirmModal } from 'actions/global';
import { deleteContract } from 'services/contract.service';
import DataTable from 'components/shared/DataTable/index';
import { formatPrice } from 'utils';
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
        header: 'Số hợp đồng',
        classNameHeader: 'cb_text_center',
        classNameBody: 'cb_text_center',
        accessor: 'contract_number',
      },
      {
        header: 'Ngày hợp đồng',
        classNameHeader: 'cb_text_center',
        classNameBody: 'cb_text_center',
        accessor: 'contract_date',
      },
      {
        header: 'Tên khách hàng',
        classNameHeader: 'cb_text_center',
        accessor: 'individual_fullname',
      },
      {
        header: 'Số CCCD',
        classNameHeader: 'cb_text_center',
        accessor: 'individual_id_number',
      },
      {
        header: 'Mục đích',
        classNameHeader: 'cb_text_center',
        accessor: 'loan_purpose',
      },
      {
        header: 'Số tiền',
        classNameHeader: 'cb_text_center',
        classNameBody: 'cb_text_center',
        formatter: (contract) => formatPrice(contract.loan_money, true, '.'),
      },
      {
        header: 'Thời hạn',
        classNameHeader: 'cb_text_center',
        classNameBody: 'cb_text_center',
        formatter: (contract) => `${contract.month_count} tháng - ${contract.period_count} kỳ`,
      },
      {
        header: 'Ngày bắt đầu',
        classNameHeader: 'cb_text_center',
        classNameBody: 'cb_text_center',
        accessor: 'start_date',
      },
      {
        header: 'Ngày kết thúc',
        classNameHeader: 'cb_text_center',
        classNameBody: 'cb_text_center',
        accessor: 'end_date',
      },
      {
        header: 'Tên đơn vị',
        classNameHeader: 'cb_text_center',
        accessor: 'affiliate_unit_name',
      },
      {
        header: 'Mã đơn vị',
        classNameHeader: 'cb_text_center',
        accessor: 'affiliate_unit_code',
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
      await deleteContract(Id);
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
        onClick: () => window._$g.rdr(`contract/add`),
        hidden: user?.is_admin,
      },
      {
        icon: 'ti-write',
        color: 'blue',
        title: 'Sửa',
        onClick: (p) => {
          window._$g.rdr(`contract/edit/${p?.contract_id}`);
        },
      },
      {
        icon: 'ti-eye',
        color: 'green',
        title: 'Chi tiết',
        onClick: (p) => {
          window._$g.rdr(`contract/detail/${p?.contract_id}`);
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
              handleDelete([_.contract_id]),
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
