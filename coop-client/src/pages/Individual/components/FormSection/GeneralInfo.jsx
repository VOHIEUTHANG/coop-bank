import React, { useEffect, useState } from 'react';

import Accordion from 'components/shared/Accordion/index';
import FormItem from 'components/shared/FormControl/FormItem';
import FormInput from 'components/shared/FormControl/FormInput';
import FormSelect from 'components/shared/FormControl/FormSelect';
import FormDatePicker from 'components/shared/FormControl/FormDate';
import FormRadioGroup from 'components/shared/FormControl/FormRadioGroup';
import { GENDER } from 'pages/BankRepresentative/utils/constants';
import { getOptions } from 'services/affiliate-unit.service';
import FormTextArea from 'components/shared/FormControl/FormTextArea';
import FormNumber from 'components/shared/FormControl/FormNumber';
import { useAuth } from 'context/AuthProvider';

const Infomation = ({ disabled, title, id }) => {
  const [affiliateUnitOptions, setAffiliateUnitOptions] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    getOptions().then(setAffiliateUnitOptions);
  }, []);

  return (
    <Accordion title={title} id={id}>
      <div className='cb_row'>
        <div className='cb_col_6'>
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

        <div className='cb_col_6'>
          <FormItem label='Mã khách hàng' isRequired disabled={disabled}>
            <FormInput
              type='text'
              field='individual_code'
              placeholder='Nhập mã khách hàng'
              validation={{
                required: 'Mã khách hàng là bắt buộc',
              }}
            />
          </FormItem>
        </div>

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
          <FormItem label='Tổng thu nhập ' disabled={disabled} isRequired>
            <FormNumber
              field='total_income'
              addonAfter='VNĐ'
              placeholder='Nhập tổng thu nhập'
              validation={{
                required: 'Tổng thu nhập là bắt buộc',
              }}
            />
          </FormItem>
        </div>

        <div className='cb_col_6'>
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

        <div className='cb_col_6'>
          <FormItem label='Địa chỉ nơi ở hiện tại' isRequired disabled={disabled}>
            <FormInput
              type='text'
              field='current_address'
              placeholder='Nhập địa chỉ nơi ở hiện tại'
              validation={{ required: 'Địa chỉ chỗ ở hiện tại là bắt buộc' }}
            />
          </FormItem>
        </div>

        <div className='cb_col_6'>
          <FormItem label='Chức vụ' isRequired disabled={disabled}>
            <FormInput
              type='text'
              field='individual_position'
              placeholder='Nhập chức vụ'
              validation={{ required: 'Chức vụ là bắt buộc' }}
            />
          </FormItem>
        </div>

        <div className='cb_col_6'>
          <FormItem label='Địa chỉ thường trú' isRequired disabled={disabled}>
            <FormInput
              type='text'
              field='origin_address'
              placeholder='Nhập địa chỉ thường trú'
              validation={{ required: 'Địa chỉ nơi thường trú là bắt buộc' }}
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
          <FormItem label='Chọn đơn vị công tác' isRequired disabled={disabled || user.is_admin}>
            <FormSelect
              list={affiliateUnitOptions || []}
              field='affiliate_unit_id'
              placeholder='--Chọn--'
              validation={{ required: 'Đơn vị công tác là bắt buộc' }}
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
          <FormItem label='Xếp hạng tín dụng' disabled={disabled}>
            <FormInput type='text' field='individual_cic_rank' placeholder='Nhập thông tin xếp hạng tín dụng' />
          </FormItem>
        </div>

        <div className='cb_col_6'>
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
      </div>
    </Accordion>
  );
};

export default Infomation;
