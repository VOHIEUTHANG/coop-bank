import FormDatePicker from 'components/shared/FormControl/FormDate';
import FormInput from 'components/shared/FormControl/FormInput';
import FormItem from 'components/shared/FormControl/FormItem';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { exportForm } from 'services/affiliate-unit.service';
import Accordion from 'components/shared/Accordion';
import { Divider, Spin } from 'antd';
import moment from 'moment';
import FormRadioGroup from 'components/shared/FormControl/FormRadioGroup';
import { handleToastError } from 'utils';
import { EXPORT_TYPE, EXPORT_TYPE_OPTIONS } from 'pages/AffiliateUnit/utils/constants';

function ExportDoc({ setShowModal, affiliateUnit }) {
  const methods = useForm({
    defaultValues: {
      export_type: EXPORT_TYPE.AFFILATE_CONTRACT,
    },
  });
  const { handleSubmit } = methods;
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values) => {
    const selectedExportType = EXPORT_TYPE_OPTIONS.find((type) => type.value === values.export_type);
    setLoading(true);
    exportForm(affiliateUnit.affiliate_unit_id, values)
      .then((response) => {
        setShowModal(false);
        const url = window.URL.createObjectURL(new Blob([response?.data]));
        const link = document.createElement('a');
        link.href = url;
        const configDate = moment().format('DDMMYYYY');
        link.setAttribute('download', `${selectedExportType.file_name}_${configDate}.docx`);
        document.body.appendChild(link);
        link.click();
      })
      .catch((err) => handleToastError(err))
      .finally(() => setLoading(false));
  };

  return (
    <FormProvider {...methods}>
      <div>
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
              <Accordion>
                <div className='cb_row'>
                  <FormItem label='Mã đơn đặt hàng' className='cb_col_6'>
                    <FormInput field={'purchase_order_number'} placeholder='Mã đơn đặt hàng' />
                  </FormItem>
                  <FormItem label='Ngày đặt hàng' className='cb_col_6'>
                    <FormDatePicker
                      field={'purchase_date'}
                      placeholder={'dd/mm/yyyy'}
                      format='DD/MM/YYYY'
                      bordered={false}
                      style={{ width: '100%' }}
                    />
                  </FormItem>
                  <FormItem label='Ngày yêu cầu giao hàng đến' className='cb_col_6'>
                    <FormDatePicker
                      field={'delivery_expected_date'}
                      placeholder={'dd/mm/yyyy'}
                      format='DD/MM/YYYY'
                      bordered={false}
                      style={{ width: '100%' }}
                    />
                  </FormItem>
                  <FormItem label='Tên người đặt đơn hàng' className='cb_col_6'>
                    <FormInput field={'purchase_creator'} placeholder='Tên người đặt đơn hàng' />
                  </FormItem>
                  <FormItem label='Tên người liên hệ' className='cb_col_6'>
                    <FormInput field={'contact_name'} placeholder='Tên người liên hệ' />
                  </FormItem>
                  <FormItem label='Email người liên hệ' className='cb_col_6'>
                    <FormInput field={'contact_email'} placeholder='Email người liên hệ' />
                  </FormItem>
                  <Divider />
                  <FormItem label='Loại giấy tờ' isRequired className='cb_col_12'>
                    <FormRadioGroup
                      custom
                      field='export_type'
                      list={EXPORT_TYPE_OPTIONS}
                      validation={{ required: 'Loại giấy tờ là bắt buộc' }}
                    />
                  </FormItem>
                </div>
              </Accordion>
            </div>
            <div
              className='cb_footer_modal cb_flex cb_justify_content_right cb_align_items_center'
              style={{
                position: 'sticky',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'white',
                paddingBottom: '20px',
                boxShadow: '0 -10px 20px 0px rgba(212, 161, 161, 0.25)',
              }}>
              <button type='button' className='cb_btn cb_btn_danger' onClick={() => setShowModal(false)}>
                Hủy
              </button>
              <button
                type='button'
                className='cb_btn  cb_btn_success'
                onClick={(...event) => {
                  if (!loading) {
                    return handleSubmit(onSubmit)(...event);
                  }
                }}>
                <span className='ti-printer' /> Xuất
              </button>
            </div>
          </div>
        </div>
      </div>
    </FormProvider>
  );
}

export default ExportDoc;
