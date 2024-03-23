import React, { useCallback, useEffect, useMemo } from 'react';
import FormSection from 'components/shared/FormSection/index';
import { FormProvider, useForm } from 'react-hook-form';
import { useLocation, useParams } from 'react-router-dom';

import { create, update, getById } from 'services/document.service';
import GeneralInfomation from '../components/FormSection/GeneralInfo';
import Files from '../components/FormSection/Files';
import { showToast } from 'utils/helpers';

const AddPage = () => {
  const methods = useForm();

  const { pathname } = useLocation();
  const { id: document_id } = useParams();
  const disabled = useMemo(() => pathname.includes('/detail'), [pathname]);

  const onSubmit = async (payload) => {
    try {
      let label;
      if (document_id) {
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
    if (document_id) {
      getById(document_id).then((value) => {
        methods.reset(value);
      });
    } else {
      methods.reset({
        is_active: 1,
        is_system: 0,
      });
    }
  }, [document_id, methods]);

  const detailForm = [
    {
      title: 'Thông tin chung',
      id: 'general-info',
      component: GeneralInfomation,
      fieldActive: ['document_name'],
    },
    {
      title: 'Tài liệu',
      id: 'attachments',
      component: Files,
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
