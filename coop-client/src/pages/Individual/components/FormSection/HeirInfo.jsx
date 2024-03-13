import React from 'react';
import Accordion from 'components/shared/Accordion/index';
import FormItem from 'components/shared/FormControl/FormItem';
import FormInput from 'components/shared/FormControl/FormInput';
import FormDatePicker from 'components/shared/FormControl/FormDate';

const HeirInfo = ({ disabled, title, id }) => {
  return (
    <Accordion title={title} id={id}>
      <div className='cb_row'>
        <div className='cb_col_6'>
          <FormItem label='Họ và tên' disabled={disabled}>
            <FormInput type='text' field='heir_full_name' placeholder='Nhập họ và tên' />
          </FormItem>
        </div>

        <div className='cb_col_6'>
          <FormItem label='Số CCCD' disabled={disabled}>
            <FormInput type='text' field='heir_id_number' placeholder='Nhập số CCCD' />
          </FormItem>
        </div>

        <div className='cb_col_6'>
          <FormItem label='Ngày sinh' disabled={disabled}>
            <FormDatePicker
              format={'DD/MM/YYYY'}
              field='heir_birth_date'
              placeholder={'dd/mm/yyyy'}
              style={{
                width: '100%',
              }}
              bordered={false}
              allowClear
            />
          </FormItem>
        </div>

        <div className='cb_col_6'>
          <FormItem label='Địa chỉ' disabled={disabled}>
            <FormInput type='text' field='heir_address' placeholder='Nhập địa chỉ' />
          </FormItem>
        </div>

        <div className='cb_col_6'>
          <FormItem label='Số điện thoại' disabled={disabled}>
            <FormInput type='text' field='heir_phone' placeholder='Nhập Số điện thoại' />
          </FormItem>
        </div>
      </div>
    </Accordion>
  );
};

export default HeirInfo;
