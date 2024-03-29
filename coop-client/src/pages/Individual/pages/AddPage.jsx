import React, { useCallback, useEffect, useMemo, useState } from 'react';
import FormSection from 'components/shared/FormSection/index';
import { FormProvider, useForm } from 'react-hook-form';
import { useLocation, useParams } from 'react-router-dom';

import { create, update, getById } from 'services/individual.service';
import GeneralInfomation from '../components/FormSection/GeneralInfo';
import HeirInfomation from '../components/FormSection/HeirInfo';
import Images from '../components/FormSection/IdInfo';
import Files from '../components/FormSection/Files';
import { showToast } from 'utils/helpers';

const AddPage = () => {
  const methods = useForm();
  const [refresh, setRefresh] = useState(false);

  const { pathname } = useLocation();
  const { id: individual_id } = useParams();
  const disabled = useMemo(() => pathname.includes('/detail'), [pathname]);

  const onSubmit = async (payload) => {
    try {
      let label;
      if (individual_id) {
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
    if (individual_id) {
      getById(individual_id).then((value) => {
        methods.reset(value);
      });
    } else {
      methods.reset({
        is_active: 1,
        is_system: 0,
      });
    }
  }, [individual_id, methods, refresh]);

  const detailForm = [
    {
      title: 'Thông tin chung',
      id: 'general-info',
      component: GeneralInfomation,
      fieldActive: ['individual_fullname', 'phone_number', 'gender'],
    },
    {
      title: 'Thông tin CCCD',
      id: 'images',
      component: Images,
      fieldActive: ['id_number', 'id_issued_by', 'id_issued_date'],
    },
    {
      title: 'Thông tin người thừa kế',
      id: 'heir-info',
      component: HeirInfomation,
    },
    {
      title: 'Tệp đính kèm',
      id: 'attachments',
      component: Files,
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
