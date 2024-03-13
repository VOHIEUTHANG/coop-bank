import React, { useEffect, useState } from 'react';

import Accordion from 'components/shared/Accordion/index';
import FormItem from 'components/shared/FormControl/FormItem';
import FormInput from 'components/shared/FormControl/FormInput';
import FormDatePicker from 'components/shared/FormControl/FormDate';

const BranchInfo = ({ disabled, title, id }) => {
  return (
    <Accordion title={title} id={id}>
      <div className='cb_row'>
        <div className='cb_col_6'>
          <FormItem label='Số quyết định' isRequired disabled={disabled}>
            <FormInput
              type='text'
              field='decision_number'
              placeholder='Nhập số quyết định'
              validation={{
                required: 'Số quyết định là bắt buộc',
              }}
            />
          </FormItem>
        </div>

        <div className='cb_col_6'>
          <FormItem label='Ngày quyết định' isRequired disabled={disabled}>
            <FormDatePicker
              format={'DD/MM/YYYY'}
              field='decision_date'
              validation={{
                required: 'Ngày quyết định là bắt buộc.',
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

        <div className='cb_col_6'>
          <FormItem label='Ngày bắt đầu hiệu lực' disabled={disabled}>
            <FormDatePicker
              format={'DD/MM/YYYY'}
              field='effective_date_from'
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
          <FormItem label='Ngày kết thúc hiệu lực' disabled={disabled}>
            <FormDatePicker
              format={'DD/MM/YYYY'}
              field='effective_date_to'
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
          <FormItem label='Nơi quyết định (huyện)' isRequired disabled={disabled}>
            <FormInput type='text' field='decision_district' placeholder='Nhập nơi quyết định' />
          </FormItem>
        </div>

        <div className='cb_col_6'>
          <FormItem label='Người quyết định' isRequired disabled={disabled}>
            <FormInput type='text' field='decider_name' placeholder='Nhập người quyết định' />
          </FormItem>
        </div>

        <div className='cb_col_6'>
          <FormItem label='Chức vụ người quyết định' isRequired disabled={disabled}>
            <FormInput type='text' field='decider_position' placeholder='Nhập chức vụ người quyết định' />
          </FormItem>
        </div>
      </div>
    </Accordion>
  );
};

export default BranchInfo;
