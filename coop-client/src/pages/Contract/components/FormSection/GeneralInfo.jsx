import React from 'react';
import Accordion from 'components/shared/Accordion/index';
import FormItem from 'components/shared/FormControl/FormItem';
import FormInput from 'components/shared/FormControl/FormInput';
import FormDatePicker from 'components/shared/FormControl/FormDate';
import FormNumber from 'components/shared/FormControl/FormNumber';

const Infomation = ({ disabled, title, id }) => {
  return (
    <Accordion title={title} id={id}>
      <div className='cb_row'>
        <FormItem label='Số hợp đồng' isRequired className='cb_col_6' disabled={disabled}>
          <FormInput
            field='contract_number'
            placeholder='Nhập số hợp đồng'
            validation={{ required: 'Số hợp đồng là bắt buộc' }}
          />
        </FormItem>

        <div className='cb_col_6'>
          <FormItem label='Ngày hợp đồng' isRequired disabled={disabled}>
            <FormDatePicker
              format={'DD/MM/YYYY'}
              field='contract_date'
              placeholder={'dd/mm/yyyy'}
              style={{
                width: '100%',
              }}
              bordered={false}
              allowClear
              validation={{ required: 'Ngày hợp đồng là bắt buộc' }}
            />
          </FormItem>
        </div>

        <FormItem label='Mục đích vay vốn' isRequired className='cb_col_6' disabled={disabled}>
          <FormInput
            field='loan_purpose'
            placeholder='Nhập mục đích vay vốn'
            validation={{ required: 'Mục đích vay vốn là bắt buộc' }}
          />
        </FormItem>
        <FormItem label='Tổng số vốn cần sử dụng' isRequired className='cb_col_6' disabled={disabled}>
          <FormNumber
            field='total_money'
            addonAfter='VND'
            validation={{ required: 'Tổng số vốn cần sử dụng là bắt buộc' }}
          />
        </FormItem>
        <FormItem label='Tổng số tiền cần vay' isRequired className='cb_col_6' disabled={disabled}>
          <FormNumber
            field='loan_money'
            addonAfter='VND'
            validation={{ required: 'Tổng số tiền cần vay là bắt buộc' }}
          />
        </FormItem>
        <FormItem label='Tổng thu nhập trên tháng' isRequired className='cb_col_6' disabled={disabled}>
          <FormNumber field='total_income' addonAfter='VND' validation={{ required: 'Tổng thu nhập là bắt buộc' }} />
        </FormItem>

        <div className='cb_col_6'>
          <FormItem label='Mức lãi suất' isRequired disabled={disabled}>
            <FormNumber
              field='interest_rate'
              placeholder='Nhập mức lãi suất'
              addonAfter='%'
              validation={{
                min: { value: 0, message: 'Giá trị phải lớn hơn 0' },
                max: { value: 100, message: 'Giá trị phải nhỏ hơn 100' },
                required: 'Mức lãi suất là bắt buộc',
              }}
            />
          </FormItem>
        </div>

        <div className='cb_col_6'>
          <FormItem label='Số tháng trả góp' isRequiredq disabled={disabled}>
            <FormNumber
              field='month_count'
              placeholder='Nhập số tháng trả góp'
              addonAfter='tháng'
              validation={{
                min: { value: 1, message: 'Giá trị phải lớn hơn 0' },
                max: { value: 500, message: 'Giá trị phải nhỏ hơn 500' },
                required: 'Số tháng trả góp là bắt buộc',
              }}
            />
          </FormItem>
        </div>

        <div className='cb_col_6'>
          <FormItem label='Số kỳ trả góp' isRequired disabled={disabled}>
            <FormNumber
              field='period_count'
              placeholder='Nhập số kỳ trả góp'
              addonAfter='kỳ'
              validation={{
                min: { value: 1, message: 'Giá trị phải lớn hơn 0' },
                max: { value: 500, message: 'Giá trị phải nhỏ hơn 1000' },
                required: 'Số tháng trả góp là bắt buộc',
              }}
            />
          </FormItem>
        </div>

        <div className='cb_col_6'>
          <FormItem label='Ngày bắt đầu' isRequired disabled={disabled}>
            <FormDatePicker
              format={'DD/MM/YYYY'}
              field='start_date'
              placeholder={'dd/mm/yyyy'}
              style={{
                width: '100%',
              }}
              bordered={false}
              allowClear
              validation={{ required: 'Ngày bắt đầu là bắt buộc' }}
            />
          </FormItem>
        </div>

        <div className='cb_col_6'>
          <FormItem label='Ngày kết thúc' isRequired disabled={disabled}>
            <FormDatePicker
              format={'DD/MM/YYYY'}
              field='end_date'
              placeholder={'dd/mm/yyyy'}
              style={{
                width: '100%',
              }}
              bordered={false}
              allowClear
              validation={{ required: 'Ngày kết thúc là bắt buộc' }}
            />
          </FormItem>
        </div>

        <div className='cb_col_6'>
          <FormItem label='Ngày trả tiền đầu tiên' isRequired disabled={disabled}>
            <FormDatePicker
              format={'DD/MM/YYYY'}
              field='first_pay_date'
              placeholder={'dd/mm/yyyy'}
              style={{
                width: '100%',
              }}
              bordered={false}
              allowClear
              validation={{ required: 'Ngày trả tiền đầu tiên là bắt buộc' }}
            />
          </FormItem>
        </div>

        <FormItem label='Số tài khoản vay' isRequired className='cb_col_6' disabled={disabled}>
          <FormInput
            field='loan_bank_number'
            placeholder='Nhập mục số tài khoản vay'
            validation={{ required: 'Số tài khoản vay là bắt buộc' }}
          />
        </FormItem>
      </div>
    </Accordion>
  );
};

export default Infomation;
