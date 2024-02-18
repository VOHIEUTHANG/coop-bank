import React, { useEffect, useState } from 'react';

import Accordion from 'components/shared/Accordion/index';
import FormItem from 'components/shared/FormControl/FormItem';
import FormInput from 'components/shared/FormControl/FormInput';
import { GENDER, PositionOptions } from 'pages/BankRepresentative/utils/constants';
import FormDatePicker from 'components/shared/FormControl/FormDate';
import FormRadioGroup from 'components/shared/FormControl/FormRadioGroup';
import FormSelect from 'components/shared/FormControl/FormSelect';

const BranchInfo = ({ disabled, title, id }) => {
  return (
    <Accordion title={title} id={id}>
      <div className='cb_row'>
        <div class='cb_col_6'>
          <FormItem label='Họ và tên' isRequired disabled={disabled}>
            <FormInput
              type='text'
              field='bank_representative_name'
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
            <FormSelect
              allowClear
              disabled={disabled}
              field='bank_representative_position'
              placeholder='Chọn chi nhánh'
              list={PositionOptions}
              validation={{
                required: 'Chức vụ là bắt buộc',
              }}
            />
          </FormItem>
        </div>

        <div class='cb_col_6'>
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

        <div class='cb_col_6'>
          <FormItem label='Số CCCD' isRequired disabled={disabled}>
            <FormInput
              type='text'
              field='id_number'
              placeholder='Nhập số CCCD'
              validation={{
                required: 'Số CCCD là bắt buộc',
              }}
            />
          </FormItem>
        </div>

        <div class='cb_col_6'>
          <FormItem label='Cơ quan cấp CCCD' isRequired disabled={disabled}>
            <FormInput
              type='text'
              field='id_issued_by'
              placeholder='Nhập cơ quan cấp CCCD'
              validation={{
                required: 'Cơ quan cấp là bắt buộc',
              }}
            />
          </FormItem>
        </div>

        <div class='cb_col_6'>
          <FormItem label='Ngày cấp CCCD' isRequired disabled={disabled}>
            <FormDatePicker
              format={'DD/MM/YYYY'}
              field='id_issued_date'
              validation={{
                required: 'Ngày cấp căn cước công dân là bắt buộc.',
              }}
              placeholder={'dd/mm/yyyy'}
              style={{
                width: '100%',
              }}
              bordered={false}
              allowClear
            />
          </FormItem>
        </div>

        <div class='cb_col_6'>
          <FormItem label='Địa chỉ email' disabled={disabled}>
            <FormInput type='text' field='bank_representative_email' placeholder='Nhập địa chỉ email' />
          </FormItem>
        </div>

        <div class='cb_col_6'>
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

        <div class='cb_col_6'>
          <FormItem label='Địa chỉ' disabled={disabled}>
            <FormInput type='text' field='address' placeholder='Nhập địa chỉ' />
          </FormItem>
        </div>
      </div>
    </Accordion>
  );
};

export default BranchInfo;
