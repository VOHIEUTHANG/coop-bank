import React, { useEffect, useState } from 'react';

import Accordion from 'components/shared/Accordion/index';
import FormItem from 'components/shared/FormControl/FormItem';
import FormInput from 'components/shared/FormControl/FormInput';
import FormSelect from 'components/shared/FormControl/FormSelect';
import { getOptions } from 'services/individual.service';
import FormNumber from 'components/shared/FormControl/FormNumber';
import FormTextArea from 'components/shared/FormControl/FormTextArea';
import { useFormContext } from 'react-hook-form';

const CustomerInfomation = ({ disabled, title, id, isAdd }) => {
  const methods = useFormContext();
  const { watch, setValue } = methods;

  const [individualOptions, setIndividualOptions] = useState([]);

  useEffect(() => {
    getOptions().then(setIndividualOptions);
  }, []);

  useEffect(() => {
    const individualId = watch('individual_id');
    if (individualId && isAdd) {
      const selectedIndividual = individualOptions?.find((individual) => individual.value === individualId);
      const exportData = selectedIndividual.export_data && JSON.parse(selectedIndividual.export_data);

      if (exportData) {
        methods.reset({ ...methods.getValues(), ...exportData });
      } else {
        setValue('individual_bank_number', selectedIndividual.individual_bank_number);
        setValue('individual_cic', selectedIndividual.individual_cic);
        setValue('individual_cic_rank', selectedIndividual.individual_cic_rank);
        setValue('individual_cic_score', selectedIndividual.individual_cic_score);
        setValue('declared_total_income', selectedIndividual.total_income);
        setValue('paid_date', selectedIndividual.paid_date);
      }
    }
  }, [individualOptions, watch('individual_id'), isAdd]);

  return (
    <Accordion title={title} id={id}>
      <div className='cb_row'>
        <FormItem label='Cá nhân vay vốn' isRequired className='cb_col_6' disabled={disabled}>
          <FormSelect
            field='individual_id'
            list={individualOptions}
            validation={{ required: 'Cá nhân vay vốn là bắt buộc' }}
          />
        </FormItem>

        <div className='cb_col_6'>
          <FormItem label='Số tài khoản thanh toán' isRequired disabled={disabled}>
            <FormInput
              type='text'
              field='individual_bank_number'
              placeholder='Nhập số tài khoản thanh toán'
              validation={{
                required: 'Số tài khoản thanh toán là bắt buộc',
              }}
            />
          </FormItem>
        </div>

        <div className='cb_col_6'>
          <FormItem label='Điểm tín dụng CIC' isRequired disabled={disabled}>
            <FormNumber
              field='individual_cic_score'
              addonAfter='điểm'
              placeholder='Nhập thông tin điểm tín dụng CIC'
              validation={{
                required: 'Điểm tín dụng CIC là bắt buộc',
              }}
            />
          </FormItem>
        </div>

        <div className='cb_col_6'>
          <FormItem label='Xếp hạng tín dụng' disabled={disabled} isRequired>
            <FormInput
              type='text'
              field='individual_cic_rank'
              placeholder='Nhập thông tin xếp hạng tín dụng'
              validation={{
                required: 'Xếp hạng tín dụng là bắt buộc',
              }}
            />
          </FormItem>
        </div>

        <div className='cb_col_12'>
          <FormItem label='Tình trạng tín dụng CIC' isRequired disabled={disabled}>
            <FormTextArea
              field='individual_cic'
              placeholder='Nhập thông tin tín dụng CIC'
              validation={{
                required: 'Tình trạng tín dụng CIC là bắt buộc',
              }}
            />
          </FormItem>
        </div>

        <div className='cb_col_6'>
          <FormItem label='Tổng thu nhập ' disabled={disabled} isRequired>
            <FormNumber
              field='declared_total_income'
              addonAfter='VNĐ'
              placeholder='Nhập tổng thu nhập'
              validation={{
                required: 'Tổng thu nhập là bắt buộc',
              }}
            />
          </FormItem>
        </div>

        <div className='cb_col_6'>
          <FormItem label='Tổng thu nhập thẩm định' disabled={disabled} isRequired>
            <FormNumber
              field='estimated_total_income'
              addonAfter='VNĐ'
              placeholder='Nhập tổng thu nhập thẩm định'
              validation={{
                required: 'Tổng thu nhập thẩm định là bắt buộc',
              }}
            />
          </FormItem>
        </div>

        <div className='cb_col_6'>
          <FormItem label='Ngày trả tiền hàng tháng' isRequired disabled={disabled}>
            <FormNumber
              field='paid_date'
              validation={{
                min: { value: 1, message: 'Ngày nhỏ nhất là ngày 1' },
                max: { value: 28, message: 'Ngày lớn nhất là ngày 28' },
                required: 'Ngày trả tiền hàng tháng là bắt buộc',
              }}
            />
          </FormItem>
        </div>
      </div>
    </Accordion>
  );
};

export default CustomerInfomation;
