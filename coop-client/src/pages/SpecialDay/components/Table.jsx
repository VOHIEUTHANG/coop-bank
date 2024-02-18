import React, { useCallback } from 'react';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { showConfirmModal } from 'actions/global';
import { deleteGift } from 'services/gift.service';
import DataTable from 'components/shared/DataTable/index';
import { DATE_TYPE, OBJECT_TYPE, Permission } from '../utils/constants';
import { showToast } from 'utils/helpers';

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
        header: 'Tên đối tượng',
        classNameHeader: 'bw_text_center',
        classNameBody: 'bw_text_center',
        formatter: (_, index) => (
          <span
            style={{ textDecoration: 'underline', cursor: 'pointer', color: 'var(--greenColor)' }}
            onClick={() => {
              switch (_.object_type) {
                case OBJECT_TYPE.PRINCIPAL:
                  return window.open(`/representative/detail/${_.id}`, '_blank', 'noreferrer');
                case OBJECT_TYPE.AFFILIATE_UNIT:
                  return window.open(`/affiliate-unit/detail/${_.id}`, '_blank', 'noreferrer');
                case OBJECT_TYPE.INDIVIDUAL:
                  return window.open(`/individual/detail/${_.id}`, '_blank', 'noreferrer');
                default:
                  showToast.info('Đối tượng không xác định');
              }
            }}>
            {_.name}
          </span>
        ),
      },
      {
        header: 'Loại đối tượng',
        classNameHeader: 'bw_text_center',
        classNameBody: 'bw_text_center',
        formatter: (_, index) => (
          <span className='bw_text_wrap'>
            {_.object_type === OBJECT_TYPE.PRINCIPAL
              ? 'Hiệu trưởng'
              : _.object_type === OBJECT_TYPE.INDIVIDUAL
              ? 'Cá nhân'
              : 'Đơn vị liên kết'}
          </span>
        ),
      },
      {
        header: 'Loại ngày đặc biệt',
        classNameHeader: 'bw_text_center',
        classNameBody: 'bw_text_center',
        formatter: (_, index) => (
          <span className='bw_text_wrap'>
            {_.date_type === DATE_TYPE.BIRTH_DATE
              ? 'Ngày sinh nhật'
              : _.date_type === DATE_TYPE.FOUNDING_DATE
              ? 'Ngày thành lập'
              : _.date_type === DATE_TYPE.EFFECTIVE_DATE_FROM
              ? 'Ngày bắt đầu nhiệm kỳ'
              : _.date_type === DATE_TYPE.EFFECTIVE_DATE_TO
              ? 'Ngày kết thúc nhiệm kỳ'
              : 'Không xác định'}
          </span>
        ),
      },
      {
        header: 'Ngày đặc biệt',
        accessor: 'date',
        classNameHeader: 'bw_text_center',
        classNameBody: 'bw_text_center',
      },
      {
        header: 'Ngày còn lại',
        accessor: 'day_count',
        classNameHeader: 'bw_text_center',
        classNameBody: 'bw_text_center',
        formatter: (item) => `${item.day_count} ngày`,
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
    ];
  }, [exportExcel]);

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
