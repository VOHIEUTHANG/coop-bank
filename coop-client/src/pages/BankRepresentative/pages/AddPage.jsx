import React, { useCallback, useEffect, useMemo } from 'react';
import FormSection from 'components/shared/FormSection/index';
import { FormProvider, useForm } from 'react-hook-form';
import { useLocation, useParams } from 'react-router-dom';

import { create, update, getById } from 'services/bank-representative.service';
import Infomation from '../components/FormSection/Info';
import { showToast } from 'utils/helpers';

const AddPage = () => {
  const methods = useForm();

  const { pathname } = useLocation();
  const { id: bank_representative_id } = useParams();
  const disabled = useMemo(() => pathname.includes('/detail'), [pathname]);

  const onSubmit = async (payload) => {
    try {
      let label;
      if (bank_representative_id) {
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
      showToast.error(error.message?.length ? error.message[0] : error.message || 'Có lỗi xảy ra!');
    }
  };

  const loadDetail = useCallback(() => {
    if (bank_representative_id) {
      getById(bank_representative_id).then((value) => {
        methods.reset(value);
      });
    } else {
      methods.reset({
        is_active: 1,
        is_system: 0,
      });
    }
  }, [bank_representative_id, methods]);

  const detailForm = [
    {
      title: 'Thông tin đại diện',
      id: 'bank-representative-info',
      component: Infomation,
      fieldActive: ['bank_representative_name', 'phone_number', 'bank_representative_position', 'id_number'],
    },
  ];

  useEffect(loadDetail, [loadDetail]);

  return (
    <FormProvider {...methods}>
      <FormSection detailForm={detailForm} onSubmit={onSubmit} disabled={disabled} />
    </FormProvider>
  );
};

export default AddPage;
