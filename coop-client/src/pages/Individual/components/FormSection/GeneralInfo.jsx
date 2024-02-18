import React from 'react';

import Accordion from 'components/shared/Accordion/index';
import FormItem from 'components/shared/FormControl/FormItem';
import FormInput from 'components/shared/FormControl/FormInput';
import FormSelect from 'components/shared/FormControl/FormSelect';
import { AffiliateUnitLevelOptions } from 'pages/AffiliateUnit/utils/constants';
import FormDatePicker from 'components/shared/FormControl/FormDate';
import FormRadioGroup from 'components/shared/FormControl/FormRadioGroup';
import { GENDER } from 'pages/BankRepresentative/utils/constants';

const Infomation = ({ disabled, title, id }) => {
  return (
    <Accordion title={title} id={id}>
      <div className='cb_row'>
        <div class='cb_col_6'>
          <FormItem label='Họ và tên' isRequired disabled={disabled}>
            <FormInput
              type='text'
              field='individual_fullname'
              placeholder='Nhập họ và tên'
              validation={{
                required: 'Họ và tên là bắt buộc',
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
          <FormItem label='Địa chỉ nhà' isRequired disabled={disabled}>
            <FormInput
              type='text'
              field='home_address'
              placeholder='Nhập địa chỉ nhà'
              validation={{
                required: 'Địa chỉ nhà là bắt buộc',
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
          <FormItem label='Nơi công tác' disabled={disabled}>
            <FormInput type='text' field='work_name' placeholder='Nhập nơi công tác' />
          </FormItem>
        </div>

        <div class='cb_col_6'>
          <FormItem label='Địa chỉ nơi công tác' disabled={disabled}>
            <FormInput type='text' field='work_address' placeholder='Nhập địa chỉ nơi công tác' />
          </FormItem>
        </div>
      </div>
    </Accordion>
  );
};

export default Infomation;
