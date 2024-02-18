import React, { useEffect } from 'react';

import Accordion from 'components/shared/Accordion/index';
import FormItem from 'components/shared/FormControl/FormItem';
import FormInput from 'components/shared/FormControl/FormInput';
import FormTextArea from 'components/shared/FormControl/FormTextArea';

const BranchInfo = ({ disabled, title, id }) => {
  return (
    <Accordion title={title} id={id}>
      <div className='bw_row'>
        <div class='bw_col_6'>
          <FormItem label='Tên chi nhánh' isRequired disabled={disabled}>
            <FormInput
              type='text'
              field='branch_name'
              placeholder='Nhập tên chi nhánh'
              validation={{
                required: 'Tên chi nhánh là bắt buộc',
              }}
            />
          </FormItem>
        </div>

        <div class='bw_col_6'>
          <FormItem label='Địa chỉ chi nhánh' isRequired disabled={disabled}>
            <FormInput
              type='text'
              field='address'
              placeholder='Nhập địa chỉ chi nhánh'
              validation={{
                required: 'Địa chỉ chi nhánh là bắt buộc',
              }}
            />
          </FormItem>
        </div>

        <div class='bw_col_6'>
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

        <div class='bw_col_6'>
          <FormItem label='Số điện thoại phụ' disabled={disabled}>
            <FormInput type='text' field='phone_number_sub' placeholder='Nhập Số điện thoại phụ' />
          </FormItem>
        </div>

        {/* <div className='bw_col_12'>
          <FormItem label='Mô tả' disabled={disabled}>
            <FormTextArea field='description' rows={2} placeholder='Mô tả' />
          </FormItem>
        </div> */}
      </div>
    </Accordion>
  );
};

export default BranchInfo;
