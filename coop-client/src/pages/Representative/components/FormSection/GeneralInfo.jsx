import React from 'react';

import Accordion from 'components/shared/Accordion/index';
import FormItem from 'components/shared/FormControl/FormItem';
import FormInput from 'components/shared/FormControl/FormInput';
import { GENDER, PositionOptions } from 'pages/Representative/utils/constants';
import FormDatePicker from 'components/shared/FormControl/FormDate';
import FormRadioGroup from 'components/shared/FormControl/FormRadioGroup';
import FormSelect from 'components/shared/FormControl/FormSelect';

const BranchInfo = ({ disabled, title, id }) => {
  return (
    <Accordion title={title} id={id}>
      <div className='cb_row'>
        <div className='cb_col_6'>
          <FormItem label='Họ và tên' isRequired disabled={disabled}>
            <FormInput
              type='text'
              field='representative_name'
              placeholder='Nhập họ và tên'
              validation={{
                required: 'Tên là bắt buộc',
              }}
            />
          </FormItem>
        </div>

        <div className='cb_col_6'>
          <FormItem label='Giới tính' isRequired disabled={disabled}>
            <FormRadioGroup
              field={'gender'}
              list={[
                { value: GENDER.MALE, label: 'Nam' },
                { value: GENDER.FEMALE, label: 'Nữ' },
              ]}
              disabled={disabled}
              validation={{
                require: 'Giới tính là bắt buộc',
              }}
            />
          </FormItem>
        </div>

        <div className='cb_col_6'>
          <FormItem label='Chức vụ' isRequired disabled={disabled}>
            <FormInput
              type='text'
              field='representative_position'
              placeholder='Nhập chức vụ'
              validation={{
                required: 'Chức vụ là bắt buộc',
              }}
            />
          </FormItem>
        </div>

        <div className='cb_col_6'>
          <FormItem label='Số điện thoại' isRequired disabled={disabled}>
            <FormInput
              type='text'
              field='phone_number'
              placeholder='Nhập Số điện thoại'
              validation={{
                required: 'Số điện thoại là bắt buộc',
              }}
            />
          </FormItem>
        </div>

        <div className='cb_col_6'>
          <FormItem label='Địa chỉ email' disabled={disabled}>
            <FormInput type='text' field='representative_email' placeholder='Nhập địa chỉ email' />
          </FormItem>
        </div>

        <div className='cb_col_6'>
          <FormItem label='Ngày sinh' disabled={disabled}>
            <FormDatePicker
              format={'DD/MM/YYYY'}
              field='birth_date'
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
            <FormInput type='text' field='address' placeholder='Nhập địa chỉ' />
          </FormItem>
        </div>

        <div className='cb_col_6'>
          <FormItem label='Số tài khoản ngân hàng' isRequired disabled={disabled}>
            <FormInput
              type='text'
              field='bank_number'
              placeholder='Nhập số tài khoản ngân hàng'
              validation={{ required: 'Số tài khoản là bắt buộc' }}
            />
          </FormItem>
        </div>

        <div className='cb_col_6'>
          <FormItem label='Tên ngân hàng' isRequired disabled={disabled}>
            <FormInput
              type='text'
              field='bank_name'
              placeholder='Nhập tên ngân hàng'
              validation={{ required: 'Tên ngân hàng là bắt buộc' }}
            />
          </FormItem>
        </div>

        <div className='cb_col_6'>
          <FormItem label='Mã số thuế' isRequired disabled={disabled}>
            <FormInput
              type='text'
              field='tax_code'
              placeholder='Nhập mã số thuế'
              validation={{ required: 'Mã số thuế là bắt buộc' }}
            />
          </FormItem>
        </div>
      </div>
    </Accordion>
  );
};

export default BranchInfo;
