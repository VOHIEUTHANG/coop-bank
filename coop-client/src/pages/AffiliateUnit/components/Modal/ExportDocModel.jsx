import FormDatePicker from 'components/shared/FormControl/FormDate';
import FormInput from 'components/shared/FormControl/FormInput';
import FormItem from 'components/shared/FormControl/FormItem';
import React, { useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { exportForm } from 'services/affiliate-unit.service';
import Accordion from 'components/shared/Accordion';
import styled from 'styled-components';
import { showToast } from 'utils/helpers';
import { Spin } from 'antd';
import { useAuth } from 'context/AuthProvider';
import moment from 'moment';

const ModelStyled = styled.div`
  .cb_row.cb_mt_2.cb_mb_2.cb_align_items_center {
    display: none;
  }
`;

function ExportDoc({ disabled, setShowModal, affiliateUnit }) {
  console.log('🚀 ~ ExportDoc ~ affiliateUnit:', affiliateUnit);
  const methods = useForm();
  const { handleSubmit, reset, setValue, watch, clearErrors } = methods;
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   let initValue = {};

  //   if (savedPurchaseOrder) {
  //     initValue = savedPurchaseOrder;
  //   } else {
  //     initValue = {
  //       purchase_order_number: purchaseOrder.request_purchase_code,
  //       purchase_date: moment().format('DD/MM/YYYY'),
  //       delivery_expected_date: moment().add(3, 'days').format('DD/MM/YYYY'),
  //       purchase_creator: user.full_name,
  //       contact_name: user.full_name,
  //       contact_email: user.email,
  //       [PRODUCT_FIELD_NAME]: purchaseOrder?.pr_product_list.map((product) => ({
  //         product_id: product.product_id,
  //         product_code: product.product_code,
  //         product_name: product.product_name,
  //         product_quantity: product.quantity_reality,
  //         product_price: product.cost_price,
  //       })),
  //     };
  //   }
  //   reset(initValue);
  // }, [user, reset]);

  const onSubmit = async (values) => {
    setLoading(true);
    exportForm({})
      .then(() => {
        setShowModal(false);
      })
      .catch((err) => showToast.error(err?.message || 'Xuất biểu mẫu xảy ra lỗi !'))
      .finally(() => setLoading(false));
  };

  return (
    <FormProvider {...methods}>
      <ModelStyled>
        <div className='cb_modal cb_modal_open ' id='cb_calculate_modal'>
          <div className='cb_modal_container cb_w900'>
            <div className='cb_title_modal'>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                {loading && <Spin />}
                <h3>Thông tin xuất biểu mẫu</h3>
              </div>
              <span className='cb_close_modal fi fi-rr-cross-small' onClick={() => setShowModal(false)} />
            </div>
            <div className='cb_main_modal'>
              <Accordion title={'Thông tin chung'} style={{ background: 'var(--grayColor)' }}>
                <div className='cb_row'>
                  <FormItem label='Mã đơn đặt hàng' disabled isRequired className='cb_col_6'>
                    <FormInput
                      field={'purchase_order_number'}
                      placeholder='Mã đơn đặt hàng'
                      validation={{ required: `Mã đơn đặt hàng là bắt buộc !` }}
                    />
                  </FormItem>
                  <FormItem disabled={true} label='Ngày đặt hàng' isRequired className='cb_col_6'>
                    <FormDatePicker
                      field={'purchase_date'}
                      placeholder={'dd/mm/yyyy'}
                      format='DD/MM/YYYY'
                      bordered={false}
                      style={{ width: '100%' }}
                      validation={{ required: `Ngày tạo là bắt buộc !` }}
                    />
                  </FormItem>
                  <FormItem disabled={disabled} label='Ngày yêu cầu giao hàng đến' isRequired className='cb_col_6'>
                    <FormDatePicker
                      field={'delivery_expected_date'}
                      placeholder={'dd/mm/yyyy'}
                      format='DD/MM/YYYY'
                      bordered={false}
                      style={{ width: '100%' }}
                      validation={{ required: `Ngày yêu cầu giao hàng đến là bắt buộc !` }}
                    />
                  </FormItem>
                  <FormItem disabled={disabled} label='Tên người đặt đơn hàng' isRequired className='cb_col_6'>
                    <FormInput
                      field={'purchase_creator'}
                      placeholder='Tên người đặt đơn hàng'
                      validation={{ required: `Tên người đặt đơn hàng là bắt buộc !` }}
                    />
                  </FormItem>
                  <FormItem disabled={disabled} label='Tên người liên hệ' isRequired className='cb_col_6'>
                    <FormInput
                      field={'contact_name'}
                      placeholder='Tên người liên hệ'
                      validation={{ required: `Tên người liên hệ là bắt buộc !` }}
                    />
                  </FormItem>
                  <FormItem disabled={disabled} label='Email người liên hệ' isRequired className='cb_col_6'>
                    <FormInput
                      field={'contact_email'}
                      placeholder='Email người liên hệ'
                      validation={{ required: `Email người liện hệ là bắt buộc !` }}
                    />
                  </FormItem>
                  <FormItem disabled={disabled} label='Mã địa chỉ giao hàng' isRequired className='cb_col_6'>
                    <FormInput
                      field={'delivery_address'}
                      placeholder='Nhập mã địa chỉ giao hàng'
                      validation={{ required: `Mã địa chỉ giao hàng là bắt buộc !` }}
                    />
                  </FormItem>
                </div>
              </Accordion>
            </div>
            <div className='cb_footer_modal cb_flex cb_justify_content_right cb_align_items_center'>
              <button type='button' className='cb_btn cb_btn_danger' onClick={() => setShowModal(false)}>
                Hủy
              </button>
              <button
                type='button'
                className='cb_btn  cb_btn_success'
                onClick={(...event) => {
                  // if (!loading) {
                  //   return handleSubmit(onSubmit)(...event);
                  // }
                  exportForm(affiliateUnit.affiliate_unit_id, {})
                    .then((response) => {
                      setShowModal(false);
                      const url = window.URL.createObjectURL(new Blob([response?.data]));
                      const link = document.createElement('a');
                      link.href = url;
                      const configDate = moment().format('DDMMYYYY');
                      link.setAttribute('download', `hop_dong_dich_vu_${configDate}.docx`);
                      document.body.appendChild(link);
                      link.click();
                    })
                    .catch((err) => showToast.error(err?.message || 'Xuất biểu mẫu xảy ra lỗi !'))
                    .finally(() => setLoading(false));
                }}>
                <span className='fi fi-rr-print' /> Xuất
              </button>
            </div>
          </div>
        </div>
      </ModelStyled>
    </FormProvider>
  );
}

export default ExportDoc;
