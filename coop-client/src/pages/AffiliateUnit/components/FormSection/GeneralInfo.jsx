import React from 'react';

import Accordion from 'components/shared/Accordion/index';
import FormItem from 'components/shared/FormControl/FormItem';
import FormInput from 'components/shared/FormControl/FormInput';
import FormSelect from 'components/shared/FormControl/FormSelect';
import { AffiliateUnitLevelOptions } from 'pages/AffiliateUnit/utils/constants';
import FormDatePicker from 'components/shared/FormControl/FormDate';
import FormNumber from 'components/shared/FormControl/FormNumber';

const Infomation = ({ disabled, title, id }) => {
  return (
    <Accordion title={title} id={id}>
      <div className='cb_row'>
        <div className='cb_col_6'>
          <FormItem label='Tên đơn vị' isRequired disabled={disabled}>
            <FormInput
              type='text'
              field='affiliate_unit_name'
              placeholder='Nhập tên đơn vị liên kết'
              validation={{
                required: 'Tên đơn vị liên kết là bắt buộc',
              }}
            />
          </FormItem>
        </div>

        <div className='cb_col_6'>
          <FormItem label='Mã đơn vị' isRequired disabled={disabled}>
            <FormInput
              type='text'
              field='affiliate_unit_code'
              placeholder='Nhập mã đơn vị'
              validation={{
                required: 'Mã đơn vị là bắt buộc',
              }}
            />
          </FormItem>
        </div>

        <div className='cb_col_6'>
          <FormItem label='Cấp đơn vị' disabled={disabled}>
            <FormInput type='text' field='affiliate_unit_level' placeholder='Nhập mã đơn vị' />
          </FormItem>
        </div>

        <div className='cb_col_6'>
          <FormItem label='Địa chỉ email' disabled={disabled}>
            <FormInput type='text' field='affiliate_unit_email' placeholder='Nhập địa chỉ email' />
          </FormItem>
        </div>

        <div className='cb_col_6'>
          <FormItem label='Ngày thành lập' disabled={disabled}>
            <FormDatePicker
              format={'DD/MM/YYYY'}
              field='founding_date'
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
          <FormItem label='Địa chỉ đơn vị' isRequired disabled={disabled}>
            <FormInput
              type='text'
              field='affiliate_unit_address'
              placeholder='Nhập địa chỉ đơn vị'
              validation={{ required: 'Địa chỉ là bắt buộc' }}
            />
          </FormItem>
        </div>
        <div className='cb_col_6'>
          <FormItem label='Số điện thoại' isRequired disabled={disabled}>
            <FormInput
              type='text'
              field='affiliate_unit_phone'
              placeholder='Nhập số điện thoại đơn vị'
              validation={{ required: 'Số điện thoại là bắt buộc' }}
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

export default Infomation;
