import React, { useCallback, useEffect, useMemo, useState } from 'react';
import FormSection from 'components/shared/FormSection/index';
import { FormProvider, useForm } from 'react-hook-form';
import { useLocation, useParams } from 'react-router-dom';

import { create, update, getById } from 'services/contract.service';
import GeneralInfomation from '../components/FormSection/GeneralInfo';
import CustomerInfomation from '../components/FormSection/CustomerInfo';
import Condition from '../components/FormSection/Condition';
import { showToast } from 'utils/helpers';
import ExportDocModel from '../components/Modal/ExportDocModel';

const AddPage = () => {
  const methods = useForm();
  const [showPopup, setShowPopup] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const { pathname } = useLocation();
  const { id: contract_id } = useParams();
  const disabled = useMemo(() => pathname.includes('/detail'), [pathname]);

  const onSubmit = async (payload) => {
    try {
      let label;
      if (contract_id) {
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
    if (contract_id) {
      getById(contract_id).then((value) => {
        methods.reset(value);
      });
    } else {
      methods.reset({
        is_qualified: 1,
      });
    }
  }, [contract_id, methods, refresh]);

  const detailForm = [
    {
      title: 'Thông tin khách hàng',
      id: 'customer-info',
      component: CustomerInfomation,
      fieldActive: [
        'individual_id',
        'individual_bank_number',
        'individual_cic_score',
        'individual_cic_rank',
        'individual_cic',
      ],
      isAdd: !contract_id,
    },
    {
      title: 'Thông hợp đồng vay vốn',
      id: 'contract-info',
      component: GeneralInfomation,
      fieldActive: [
        'individual_id',
        'contract_number',
        'loan_purpose',
        'total_money',
        'loan_money',
        'interest_rate',
        'month_count',
      ],
    },
    {
      title: 'Trạng thái hợp đồng',
      id: 'contract-status',
      component: Condition,
      fieldActive: ['is_qualified'],
    },
  ];

  useEffect(loadDetail, [loadDetail]);

  const actions = [
    {
      icon: 'ti-printer',
      submit: false,
      content: 'In biểu mẫu',
      className: 'cb_btn cb_btn_outline cb_btn_outline_success',
      hidden: !contract_id,
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
          contractId={contract_id}
          defaultExportData={methods.watch('export_data')}
        />
      )}
    </FormProvider>
  );
};

export default AddPage;
