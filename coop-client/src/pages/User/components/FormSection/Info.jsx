import React, { useEffect, useState } from 'react';

import Accordion from 'components/shared/Accordion/index';
import FormItem from 'components/shared/FormControl/FormItem';
import FormInput from 'components/shared/FormControl/FormInput';
import styled from 'styled-components';
import { Input } from 'antd';
import { useFormContext } from 'react-hook-form';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import FormSelect from 'components/shared/FormControl/FormSelect';
import { getOptions } from 'services/branch.service';

const CustomInput = styled.div`
  .ant-input-password {
    border: none !important;
    border-color: transparent !important;
    box-shadow: none !important;
    padding: 4px 0;
  }
`;

const UserInfo = ({ disabled, title, id, is_add }) => {
  const methods = useFormContext();
  const [branchOptions, setBranchOptions] = useState([]);

  useEffect(() => {
    getOptions().then(setBranchOptions);
  }, []);

  return (
    <Accordion title={title} id={id}>
      <div className='bw_row'>
        <div class='bw_col_6'>
          <FormItem label='Mã nhân viên' isRequired disabled={disabled || !is_add}>
            <FormInput
              type='text'
              field='username'
              placeholder='Nhập mã nhân viên'
              validation={{
                required: 'Mã nhân viên là bắt buộc',
                min: { value: 5, message: 'Tên đăng nhập ít nhất 5 ký tự' },
              }}
            />
          </FormItem>
        </div>
        <div className='bw_col_6'>
          <FormItem disabled={disabled || !is_add} label='Mật khẩu' isRequired>
            <CustomInput>
              <Input.Password
                disabled={disabled || !is_add}
                placeholder='*************'
                field='password'
                autoComplete={false}
                minLength={5}
                value={methods.watch('password') ?? ''}
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                onChange={(e) => {
                  methods.setValue('password', e.target.value);
                }}
              />
            </CustomInput>
          </FormItem>
        </div>
        <div class='bw_col_6'>
          <FormItem label='Tên nhân viên' isRequired disabled={disabled}>
            <FormInput
              type='text'
              field='full_name'
              placeholder='Nhập tên nhân viên'
              validation={{
                required: 'Tên nhân viên là bắt buộc',
              }}
            />
          </FormItem>
        </div>

        <div class='bw_col_6'>
          <FormItem label='Số điện thoại' disabled={disabled}>
            <FormInput type='text' field='phone_number' placeholder='Nhập Số điện thoại' />
          </FormItem>
        </div>

        <div class='bw_col_6'>
          <FormItem label='Địa chỉ email' disabled={disabled}>
            <FormInput type='text' field='email' placeholder='Nhập địa chỉ email' />
          </FormItem>
        </div>

        <div className='bw_col_6'>
          <FormItem label='Chi nhánh' disabled={disabled}>
            <FormSelect
              allowClear
              disabled={disabled}
              field='branch_id'
              placeholder='Chọn chi nhánh'
              list={branchOptions}
            />
          </FormItem>
        </div>
      </div>
    </Accordion>
  );
};

export default UserInfo;
