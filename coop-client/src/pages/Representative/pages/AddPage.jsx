import React, { useCallback, useEffect, useMemo } from 'react';
import FormSection from 'components/shared/FormSection/index';
import { FormProvider, useForm } from 'react-hook-form';
import { useLocation, useParams } from 'react-router-dom';

import { create, update, getById } from 'services/representative.service';
import GeneralInfomation from '../components/FormSection/GeneralInfo';
import IdInfomation from '../components/FormSection/IdInfo';
import DecisionInfomation from '../components/FormSection/DecisionInfo';
import { showToast } from 'utils/helpers';

const AddPage = () => {
  const methods = useForm();

  const { pathname } = useLocation();
  const { id: representative_id } = useParams();
  const disabled = useMemo(() => pathname.includes('/detail'), [pathname]);

  const onSubmit = async (payload) => {
    try {
      let label;
      if (representative_id) {
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
    if (representative_id) {
      getById(representative_id).then((value) => {
        methods.reset(value);
      });
    } else {
      methods.reset({
        is_active: 1,
        is_system: 0,
      });
    }
  }, [representative_id, methods]);

  const detailForm = [
    {
      title: 'Thông tin chung',
      id: 'general-info',
      component: GeneralInfomation,
      fieldActive: ['representative_name', 'phone_number', 'representative_position'],
    },
    {
      title: 'Thông tin chứng minh',
      id: 'id-info',
      component: IdInfomation,
      fieldActive: ['id_number', 'id_issued_by', 'id_issued_date'],
    },
    {
      title: 'Thông tin quyết định',
      id: 'decision-info',
      component: DecisionInfomation,
      fieldActive: ['decision_number', 'decision_date', 'effective_date_from', 'effective_date_to'],
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
