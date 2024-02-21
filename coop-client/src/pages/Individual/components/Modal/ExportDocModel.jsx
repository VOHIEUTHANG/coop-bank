import FormDatePicker from 'components/shared/FormControl/FormDate';
import FormInput from 'components/shared/FormControl/FormInput';
import FormItem from 'components/shared/FormControl/FormItem';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { exportForm } from 'services/individual.service';
import Accordion from 'components/shared/Accordion';
import { Divider, Spin } from 'antd';
import moment from 'moment';
import FormRadioGroup from 'components/shared/FormControl/FormRadioGroup';
import { handleToastError } from 'utils';
import {
  CREDIT_RATING,
  CREDIT_RATING_OPTIONS,
  EXPORT_TYPE,
  EXPORT_TYPE_OPTIONS,
  QUALIFICATION_TYPE,
} from 'pages/Individual/utils/constants';
import FormNumber from 'components/shared/FormControl/FormNumber';
import FormSelect from 'components/shared/FormControl/FormSelect';

function ExportDoc({ closeModal, individual, interestRate = 0, defaultExportData, refreshData }) {
  const methods = useForm({
    defaultValues: defaultExportData || {
      export_type: EXPORT_TYPE.APPRAISAL_REPORT,
      is_qualified: QUALIFICATION_TYPE.QUALIFIED,
      credit_rating: CREDIT_RATING.A,
      interest_rate: interestRate,
    },
  });
  const { handleSubmit } = methods;
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values) => {
    const selectedExportType = EXPORT_TYPE_OPTIONS.find((type) => type.value === values.export_type);
    setLoading(true);

    exportForm(individual.individual_id, values)
      .then((response) => {
        closeModal(false);
        refreshData();
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
              <span className='cb_close_modal fi fi-rr-cross-small' onClick={() => closeModal(false)} />
            </div>
            <div className='cb_main_modal'>
              <Accordion>
                <div className='cb_row'>
                  <FormItem label='Mục đích vay vốn' isRequired className='cb_col_12'>
                    <FormInput
                      field='loan_purpose'
                      placeholder='Nhập mục đích vay vốn'
                      validation={{ required: 'Mục đích vay vốn là bắt buộc' }}
                    />
                  </FormItem>
                  <FormItem label='Số hợp đồng' isRequired className='cb_col_6'>
                    <FormInput
                      field='contract_number'
                      placeholder='Nhập số hợp đồng'
                      validation={{ required: 'Số hợp đồng là bắt buộc' }}
                    />
                  </FormItem>
                  <FormItem label='Tổng số vốn cần sử dụng' isRequired className='cb_col_6'>
                    <FormNumber
                      field='total_money'
                      addonAfter='VND'
                      validation={{ required: 'Tổng số vốn cần sử dụng là bắt buộc' }}
                    />
                  </FormItem>
                  <FormItem label='Tổng số tiền cần vay' isRequired className='cb_col_6'>
                    <FormNumber
                      field='loan_money'
                      addonAfter='VND'
                      validation={{ required: 'Tổng số tiền cần vay là bắt buộc' }}
                    />
                  </FormItem>
                  <FormItem label='Tổng thu nhập trên tháng' isRequired className='cb_col_6'>
                    <FormNumber
                      field='total_income'
                      addonAfter='VND'
                      validation={{ required: 'Tổng thu nhập là bắt buộc' }}
                    />
                  </FormItem>

                  <div class='cb_col_6'>
                    <FormItem label='Mức lãi suất'>
                      <FormNumber
                        field='interest_rate'
                        placeholder='Nhập mức lãi suất'
                        addonAfter='%'
                        validation={{
                          min: { value: 0, message: 'Giá trị phải lớn hơn 0' },
                          max: { value: 100, message: 'Giá trị phải nhỏ hơn 100' },
                        }}
                      />
                    </FormItem>
                  </div>

                  <div class='cb_col_6'>
                    <FormItem label='Thời hạn trả góp'>
                      <FormNumber
                        field='duration'
                        placeholder='Nhập thời hạn trả góp'
                        addonAfter='năm'
                        validation={{
                          min: { value: 1, message: 'Giá trị phải lớn hơn 0' },
                          max: { value: 50, message: 'Giá trị phải nhỏ hơn 50' },
                        }}
                      />
                    </FormItem>
                  </div>

                  <FormItem label='Xếp hạng tín dụng' isRequired className='cb_col_6'>
                    <FormSelect
                      field='credit_rating'
                      list={CREDIT_RATING_OPTIONS}
                      validation={{ required: 'Xếp hạng tín dụng là bắt buộc' }}
                    />
                  </FormItem>

                  <FormItem label='Điều kiện vay vốn' isRequired className='cb_col_12'>
                    <FormRadioGroup
                      field='is_qualified'
                      list={[
                        {
                          label: 'Đủ điều kiện vay vốn',
                          value: QUALIFICATION_TYPE.QUALIFIED,
                        },
                        {
                          label: 'Không đủ điều kiện vay vốn',
                          value: QUALIFICATION_TYPE.UNQUALIFIED,
                        },
                      ]}></FormRadioGroup>
                  </FormItem>

                  <Divider />
                  <FormItem label='Loại giấy tờ' isRequired className='cb_col_12'>
                    <FormRadioGroup
                      style={{ marginBottom: '8px', marginTop: '2px' }}
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
              <button type='button' className='cb_btn cb_btn_danger' onClick={() => closeModal(false)}>
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
