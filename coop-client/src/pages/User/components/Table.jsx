import React, { useCallback } from 'react';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { showConfirmModal } from 'actions/global';
import { lockUser } from 'services/user.service';
import DataTable from 'components/shared/DataTable/index';

const UserTable = ({ loading, data, totalPages, itemsPerPage, page, totalItems, onChangePage, onRefresh }) => {
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
        header: 'Mã tài khoản',
        classNameHeader: 'cb_text_center',
        accessor: 'username',
      },
      {
        header: 'Họ và tên',
        classNameHeader: 'cb_text_center',
        accessor: 'full_name',
      },
      {
        header: 'Email',
        classNameHeader: 'cb_text_center',
        accessor: 'email',
      },
      {
        header: 'Số điện thoại',
        classNameHeader: 'cb_text_center',
        classNameBody: 'cb_text_center',
        accessor: 'phone_number',
      },
      {
        header: 'Chi nhánh',
        classNameHeader: 'cb_text_center',
        classNameBody: 'cb_text_center',
        accessor: 'branch_name',
      },
      {
        header: 'Trạng thái',
        classNameHeader: 'cb_text_center',
        classNameBody: 'cb_text_center',
        formatter: (p) =>
          p?.is_active ? (
            <span class='cb_label_outline cb_label_outline_success text-center'>Kích hoạt</span>
          ) : (
            <span class='cb_label_outline cb_label_outline_danger text-center'>Khóa</span>
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
    async (userId) => {
      await lockUser(userId);
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
        permission: 'USER_ADD',
        onClick: () => window._$g.rdr(`/user/add`),
      },
      {
        icon: 'ti-write',
        color: 'blue',
        title: 'Sửa',
        permission: 'USER_EDIT',
        onClick: (p) => {
          window._$g.rdr(`/user/edit/${p?.user_id}`);
        },
      },
      {
        icon: 'ti-eye',
        color: 'green',
        title: 'Chi tiết',
        permission: 'USER_VIEW',
        onClick: (p) => {
          window._$g.rdr(`/user/detail/${p?.user_id}`);
        },
      },
      {
        icon: 'ti-lock',
        color: 'red',
        title: 'Khóa',
        permission: 'USER_DEL',
        hidden: (user) => !user.is_active,
        onClick: (_, d) =>
          dispatch(
            showConfirmModal(
              ['Bạn có thực sự muốn khóa?', 'Người dùng sau khi khóa tài khoản sẽ không thể đăng nhập được.'],
              () => handleDelete([_.user_id]),
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

export default UserTable;
