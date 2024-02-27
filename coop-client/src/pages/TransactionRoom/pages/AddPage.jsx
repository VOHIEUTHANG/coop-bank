import React, { useCallback, useEffect, useMemo } from 'react';
import FormSection from 'components/shared/FormSection/index';
import { FormProvider, useForm } from 'react-hook-form';
import { useLocation, useParams } from 'react-router-dom';

import { create, update, getById } from 'services/transaction-room.service';
import GeneralInfo from '../components/FormSection/Info';
import { showToast } from 'utils/helpers';
import RepresentativeList from '../components/FormSection/RepresentativeList';

const BranchAdd = () => {
  const methods = useForm();

  const { pathname } = useLocation();
  const { id: transaction_room_id } = useParams();
  const disabled = useMemo(() => pathname.includes('/detail'), [pathname]);

  const onSubmit = async (payload) => {
    try {
      let label;
      if (transaction_room_id) {
        await update(payload);
        label = 'Chỉnh sửa';
      } else {
        await create(payload);
        label = 'Thêm mới';
        methods.reset({
          is_active: 1,
          is_system: 0,
        });
      }
      showToast.success(`${label} thành công !`);
    } catch (error) {
      showToast.error(error.message?.constructor === Array ? error.message[0] : error.message || 'Có lỗi xảy ra!');
    }
  };

  const loadDetail = useCallback(() => {
    if (transaction_room_id) {
      getById(transaction_room_id).then((value) => {
        methods.reset(value);
      });
    } else {
      methods.reset({
        is_active: 1,
        is_system: 0,
      });
    }
  }, [transaction_room_id, methods]);

  const detailForm = [
    {
      title: 'Thông tin phòng giao dịch',
      id: 'transaction_room_id',
      component: GeneralInfo,
      fieldActive: ['transaction_room_name', 'address'],
    },
    {
      id: 'representative_list',
      title: 'Danh sách người đại diện',
      fieldActive: ['bankRepresentatives'],
      component: RepresentativeList,
    },
  ];

  useEffect(loadDetail, [loadDetail]);

  return (
    <FormProvider {...methods}>
      <FormSection detailForm={detailForm} onSubmit={onSubmit} disabled={disabled} />
    </FormProvider>
  );
};

export default BranchAdd;
