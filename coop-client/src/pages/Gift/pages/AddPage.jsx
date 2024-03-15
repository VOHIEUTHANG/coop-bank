import React, { useCallback, useEffect, useMemo } from 'react';
import FormSection from 'components/shared/FormSection/index';
import { FormProvider, useForm } from 'react-hook-form';
import { useLocation, useParams } from 'react-router-dom';

import { create, update, getById } from 'services/gift.service';
import GeneralInfomation from '../components/FormSection/GeneralInfo';
import GiftList from '../components/FormSection/GiftList';
import Images from '../components/FormSection/Images';
import { showToast } from 'utils/helpers';
import { exportForm } from 'services/gift.service';
import { handleToastError } from 'utils';
import moment from 'moment';

const AddPage = () => {
  const methods = useForm();

  const { pathname } = useLocation();
  const { id: gift_id } = useParams();
  const disabled = useMemo(() => pathname.includes('/detail'), [pathname]);

  const onSubmit = async (payload) => {
    if (!payload.gifts || payload.gifts?.length === 0) {
      return showToast.warning('Phần quà tặng là bắt buộc !');
    }

    try {
      let label;
      if (gift_id) {
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
    if (gift_id) {
      getById(gift_id).then((value) => {
        methods.reset(value);
      });
    } else {
      methods.reset({
        is_active: 1,
        is_system: 0,
      });
    }
  }, [gift_id, methods]);

  const detailForm = [
    {
      title: 'Thông tin chung',
      id: 'general-info',
      component: GeneralInfomation,
      fieldActive: ['gifts', 'giver_user_id', 'affiliate_unit_id'],
    },
    {
      id: 'gift_list',
      title: 'Danh quà tặng',
      fieldActive: ['gifts'],
      component: GiftList,
    },
    {
      title: 'Hình ảnh quà tặng',
      id: 'images',
      component: Images,
      fieldActive: ['gift_image_1'],
    },
  ];

  useEffect(loadDetail, [loadDetail]);

  const actions = [
    {
      icon: 'ti-printer',
      submit: false,
      content: 'In giấy đề nghị tặng quà',
      className: 'cb_btn cb_btn_outline cb_btn_outline_success',
      onClick: () => {
        exportForm(gift_id)
          .then((response) => {
            const url = window.URL.createObjectURL(new Blob([response?.data]));
            const link = document.createElement('a');
            link.href = url;
            const configDate = moment().format('DDMMYYYY');
            link.setAttribute('download', `gifts_${configDate}.docx`);
            document.body.appendChild(link);
            link.click();
          })
          .catch((err) => handleToastError(err));
      },
    },
  ];

  return (
    <FormProvider {...methods}>
      <FormSection actions={actions} detailForm={detailForm} onSubmit={onSubmit} disabled={disabled} />
    </FormProvider>
  );
};

export default AddPage;
