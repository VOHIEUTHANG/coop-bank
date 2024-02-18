import React, { useCallback, useEffect, useMemo } from 'react';
import FormSection from 'components/shared/FormSection/index';
import { FormProvider, useForm } from 'react-hook-form';
import { useLocation, useParams } from 'react-router-dom';

import { create, update, getById } from 'services/user.service';
import UserInfo from '../components/FormSection/Info';
import { showToast } from 'utils/helpers';
import Status from '../components/FormSection/Status';

const AddPage = () => {
  const methods = useForm();

  const { pathname } = useLocation();
  const { id: user_id } = useParams();
  const disabled = useMemo(() => pathname.includes('/detail'), [pathname]);

  const onSubmit = async (payload) => {
    try {
      let label;
      if (user_id) {
        await update(payload);
        label = 'Chỉnh sửa';
      } else {
        await create(payload);
        label = 'Thêm mới';
        methods.reset({
          is_active: true,
        });
      }
      showToast.success(`${label} thành công !`);
    } catch (error) {
      showToast.error(error.message?.length ? error.message[0] : error.message || 'Có lỗi xảy ra!');
    }
  };

  const loadDetail = useCallback(() => {
    if (user_id) {
      getById(user_id).then((value) => {
        methods.reset(value);
      });
    } else {
      methods.reset({
        is_active: true,
      });
    }
  }, [user_id, methods]);

  const detailForm = [
    {
      title: 'Thông tin nhân viên',
      id: 'user_id',
      component: UserInfo,
      fieldActive: ['username', 'full_name'],
      is_add: !user_id,
    },
    {
      title: 'Trạng thái',
      id: 'status',
      component: Status,
      fieldActive: null,
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
