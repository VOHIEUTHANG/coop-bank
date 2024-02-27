import React, { useEffect, useState } from 'react';

import Accordion from 'components/shared/Accordion/index';
import FormItem from 'components/shared/FormControl/FormItem';
import FormInput from 'components/shared/FormControl/FormInput';
import FormSelect from 'components/shared/FormControl/FormSelect';
import FormNumber from 'components/shared/FormControl/FormNumber';
import { getOptions } from 'services/branch.service';

const BranchInfo = ({ disabled, title, id }) => {
  const [branchOptions, setBranchOptions] = useState([]);

  useEffect(() => {
    getOptions().then(setBranchOptions);
  }, []);

  return (
    <Accordion title={title} id={id}>
      <div className='cb_row'>
        <div class='cb_col_6'>
          <FormItem label='Tên phòng giao dịch' isRequired disabled={disabled}>
            <FormInput
              type='text'
              field='transaction_room_name'
              placeholder='Nhập tên phòng giao dịch'
              validation={{
                required: 'Tên phòng giao dịch là bắt buộc',
              }}
            />
          </FormItem>
        </div>

        <div className='cb_col_6'>
          <FormItem label='Chi nhánh' isRequired disabled={disabled}>
            <FormSelect
              allowClear
              disabled={disabled}
              field='branch_id'
              placeholder='Chọn chi nhánh'
              list={branchOptions}
              validation={{
                required: 'Chi nhánh là bắt buộc',
              }}
            />
          </FormItem>
        </div>

        <div class='cb_col_6'>
          <FormItem label='Địa chỉ phòng giao dịch' isRequired disabled={disabled}>
            <FormInput
              type='text'
              field='address'
              placeholder='Nhập địa chỉ phòng giao dịch'
              validation={{
                required: 'Địa chỉ phòng giao dịch là bắt buộc',
              }}
            />
          </FormItem>
        </div>

        <div class='cb_col_6'>
          <FormItem label='Số điện thoại chính' isRequired disabled={disabled}>
            <FormInput
              type='text'
              field='phone_number_main'
              placeholder='Nhập Số điện thoại chính'
              validation={{
                required: 'Số điện thoại chính là bắt buộc',
              }}
            />
          </FormItem>
        </div>

        <div class='cb_col_6'>
          <FormItem label='Số điện thoại phụ' disabled={disabled}>
            <FormInput type='text' field='phone_number_sub' placeholder='Nhập Số điện thoại phụ' />
          </FormItem>
        </div>

        <div class='cb_col_6'>
          <FormItem label='Số fax' isRequired disabled={disabled}>
            <FormInput
              type='text'
              field='transaction_room_fax'
              placeholder='Nhập số fax'
              validation={{ required: 'Số fax là bắt buộc' }}
            />
          </FormItem>
        </div>

        <div class='cb_col_6'>
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

        <div class='cb_col_6'>
          <FormItem label='Số tài khoản ngân hàng' isRequired disabled={disabled}>
            <FormInput
              type='text'
              field='bank_number'
              validation={{
                required: 'Số tài khoản ngân hàng là bắt buộc',
              }}
              placeholder='Nhập số tài khoản ngân hàng'
            />
          </FormItem>
        </div>
      </div>
    </Accordion>
  );
};

export default BranchInfo;
