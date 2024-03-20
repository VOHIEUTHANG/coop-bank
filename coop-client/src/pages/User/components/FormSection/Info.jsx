import React, { useEffect, useState } from 'react';

import Accordion from 'components/shared/Accordion/index';
import FormItem from 'components/shared/FormControl/FormItem';
import FormInput from 'components/shared/FormControl/FormInput';
import styled from 'styled-components';
import { Input } from 'antd';
import { useFormContext } from 'react-hook-form';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import FormSelect from 'components/shared/FormControl/FormSelect';
import { getOptions as getTransactionRoomOptions } from 'services/transaction-room.service';
import { getOptions as getBranchOptoins } from 'services/branch.service';

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
  const [transactionRoomOptions, setTransactionRoomOptions] = useState([]);

  useEffect(() => {
    getBranchOptoins().then(setBranchOptions);
  }, []);

  useEffect(() => {
    getTransactionRoomOptions({ branch_id: methods.watch('branch_id') }).then(setTransactionRoomOptions);
  }, [methods.watch('branch_id')]);

  return (
    <Accordion title={title} id={id}>
      <div className='cb_row'>
        <div className='cb_col_6'>
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
        <div className='cb_col_6'>
          <FormItem disabled={disabled} label='Mật khẩu' isRequired>
            <CustomInput>
              <Input.Password
                disabled={disabled}
                placeholder='*************'
                field='password'
                autoComplete={false}
                minLength={5}
                value={methods.watch('password') ?? ''}
                iconRender={(visible) =>
                  methods.watch('password') && methods.watch('password') !== 'password' ? (
                    visible ? (
                      <EyeTwoTone />
                    ) : (
                      <EyeInvisibleOutlined />
                    )
                  ) : null
                }
                onChange={(e) => {
                  methods.setValue('password', e.target.value);
                }}
              />
            </CustomInput>
          </FormItem>
        </div>
        <div className='cb_col_6'>
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

        <div className='cb_col_6'>
          <FormItem label='Số điện thoại' disabled={disabled}>
            <FormInput type='text' field='phone_number' placeholder='Nhập Số điện thoại' />
          </FormItem>
        </div>

        <div className='cb_col_6'>
          <FormItem label='Địa chỉ email' disabled={disabled}>
            <FormInput type='text' field='email' placeholder='Nhập địa chỉ email' />
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

        <div className='cb_col_6'>
          <FormItem label='Phòng giao dịch' disabled={disabled}>
            <FormSelect
              allowClear
              disabled={disabled}
              field='transaction_room_id'
              placeholder='Chọn Phòng giao dịch'
              list={transactionRoomOptions}
            />
          </FormItem>
        </div>
      </div>
    </Accordion>
  );
};

export default UserInfo;
