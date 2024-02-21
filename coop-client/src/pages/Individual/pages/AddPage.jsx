import React, { useCallback, useEffect, useMemo, useState } from 'react';
import FormSection from 'components/shared/FormSection/index';
import { FormProvider, useForm } from 'react-hook-form';
import { useLocation, useParams } from 'react-router-dom';

import { create, update, getById } from 'services/individual.service';
import GeneralInfomation from '../components/FormSection/GeneralInfo';
import Images from '../components/FormSection/IdInfo';
import Files from '../components/FormSection/Files';
import { showToast } from 'utils/helpers';
import ExportDocModel from '../components/Modal/ExportDocModel';

const AddPage = () => {
  const methods = useForm();
  const [showPopup, setShowPopup] = useState(false);
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
      title: 'Tệp đính kèm',
      id: 'attachments',
      component: Files,
      fieldActive: ['salary_file', 'marriage_file', 'appoint_file'],
    },
  ];

  useEffect(loadDetail, [loadDetail]);

  const actions = [
    {
      icon: 'ti-printer',
      submit: false,
      content: 'In biểu mẫu',
      className: 'cb_btn cb_btn_outline cb_btn_outline_success',
      hidden: !individual_id,
      onClick: () => {
        setShowPopup((prev) => !prev);
      },
    },
  ];

  return (
    <FormProvider {...methods}>
      <FormSection actions={actions} detailForm={detailForm} onSubmit={onSubmit} disabled={disabled} />
      {showPopup && (
        <ExportDocModel
          closeModal={setShowPopup}
          refreshData={() => {
            setRefresh((prev) => !prev);
          }}
          individual={methods.getValues()}
          interestRate={methods.watch('interest_rate')}
          defaultExportData={methods.watch('export_data')}
        />
      )}
    </FormProvider>
  );
};

export default AddPage;
