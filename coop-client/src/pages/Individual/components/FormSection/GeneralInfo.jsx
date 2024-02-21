import React, { useEffect, useState } from 'react';

import Accordion from 'components/shared/Accordion/index';
import FormItem from 'components/shared/FormControl/FormItem';
import FormInput from 'components/shared/FormControl/FormInput';
import FormSelect from 'components/shared/FormControl/FormSelect';
import FormDatePicker from 'components/shared/FormControl/FormDate';
import FormRadioGroup from 'components/shared/FormControl/FormRadioGroup';
import { GENDER } from 'pages/BankRepresentative/utils/constants';
import { getOptions } from 'services/affiliate-unit.service';

const Infomation = ({ disabled, title, id }) => {
  const [affiliateUnitOptions, setAffiliateUnitOptions] = useState([]);

  useEffect(() => {
    getOptions().then(setAffiliateUnitOptions);
  }, []);

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
          <FormItem label='Ngày sinh' isRequired disabled={disabled}>
            <FormDatePicker
              format={'DD/MM/YYYY'}
              field='birth_date'
              placeholder={'dd/mm/yyyy'}
              style={{
                width: '100%',
              }}
              bordered={false}
              allowClear
              validation={{ required: 'Ngày sinh là bắt buộc' }}
            />
          </FormItem>
        </div>

        <div class='cb_col_6'>
          <FormItem label='Địa chỉ nơi ở hiện tại' isRequired disabled={disabled}>
            <FormInput
              type='text'
              field='current_address'
              placeholder='Nhập địa chỉ nơi ở hiện tại'
              validation={{ required: 'Địa chỉ chỗ ở hiện tại là bắt buộc' }}
            />
          </FormItem>
        </div>

        <div class='cb_col_6'>
          <FormItem label='Địa chỉ thường trú' isRequired disabled={disabled}>
            <FormInput
              type='text'
              field='origin_address'
              placeholder='Nhập địa chỉ thường trú'
              validation={{ required: 'Địa chỉ nơi thường trú là bắt buộc' }}
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
          <FormItem label='Chọn đơn vị công tác' isRequired disabled={disabled}>
            <FormSelect
              list={affiliateUnitOptions || []}
              field='affiliate_unit_id'
              placeholder='--Chọn--'
              validation={{ required: 'Đơn vị công tác là bắt buộc' }}
            />
          </FormItem>
        </div>
      </div>
    </Accordion>
  );
};

export default Infomation;
