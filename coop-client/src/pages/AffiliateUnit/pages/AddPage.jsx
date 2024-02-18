import React, { useCallback, useEffect, useMemo, useState } from 'react';
import FormSection from 'components/shared/FormSection/index';
import { FormProvider, useForm } from 'react-hook-form';
import { useLocation, useParams } from 'react-router-dom';

import { create, update, getById } from 'services/affiliate-unit.service';
import GeneralInfomation from '../components/FormSection/GeneralInfo';
import Images from '../components/FormSection/Images';
import Files from '../components/FormSection/Files';
import { showToast } from 'utils/helpers';
import RepresentativeList from '../components/FormSection/RepresentativeList';
import ExportDocModel from '../components/Modal/ExportDocModel';

const AddPage = () => {
  const methods = useForm();
  const [showPopup, setShowPopup] = useState(false);

  const { pathname } = useLocation();
  const { id: affiliate_unit_id } = useParams();
  const disabled = useMemo(() => pathname.includes('/detail'), [pathname]);

  const onSubmit = async (payload) => {
    try {
      let label;
      if (affiliate_unit_id) {
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
    if (affiliate_unit_id) {
      getById(affiliate_unit_id).then((value) => {
        methods.reset(value);
      });
    } else {
      methods.reset({
        is_active: 1,
        is_system: 0,
      });
    }
  }, [affiliate_unit_id, methods]);

  const detailForm = [
    {
      title: 'Thông tin chung',
      id: 'general-info',
      component: GeneralInfomation,
      fieldActive: ['affiliate_unit_name', 'affiliate_unit_code'],
    },
    {
      id: 'representative_list',
      title: 'Danh sách người đại diện',
      fieldActive: ['representatives'],
      component: RepresentativeList,
    },
    {
      title: 'Hình ảnh đơn vị liên kết',
      id: 'images',
      component: Images,
      fieldActive: ['affiliate_unit_image_1', 'affiliate_unit_image_2'],
    },
    {
      title: 'Tệp đính kèm',
      id: 'attachments',
      component: Files,
      fieldActive: ['affiliate_unit_paycheck'],
    },
  ];

  useEffect(loadDetail, [loadDetail]);

  const actions = [
    {
      icon: 'fi fi-rr-print',
      submit: false,
      content: 'In biểu mẫu',
      className: 'bw_btn bw_btn_outline bw_btn_outline_success',
      hidden: !affiliate_unit_id,
      onClick: () => {
        setShowPopup((prev) => !prev);
      },
    },
  ];

  return (
    <FormProvider {...methods}>
      <FormSection actions={actions} detailForm={detailForm} onSubmit={onSubmit} disabled={disabled} />
      {showPopup && <ExportDocModel setShowModal={setShowPopup} affiliateUnit={methods.getValues()} />}
    </FormProvider>
  );
};

export default AddPage;
