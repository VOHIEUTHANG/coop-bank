import React, { useEffect, useState } from 'react';

import Accordion from 'components/shared/Accordion/index';
import FormItem from 'components/shared/FormControl/FormItem';
import FormSelect from 'components/shared/FormControl/FormSelect';
import { useFormContext } from 'react-hook-form';
import { getOptions as getUserOptions } from 'services/user.service';
import { getOptions as getAffiliateUnitOptions } from 'services/affiliate-unit.service';
import FormDatePicker from 'components/shared/FormControl/FormDate';
import FormInput from 'components/shared/FormControl/FormInput';
import { useAuth } from 'context/AuthProvider';

const Infomation = ({ disabled, title, id }) => {
  const methods = useFormContext();
  const [userOptions, setUserOptions] = useState([]);
  const [affiliateUnitOptions, setAffiliateUnitOptions] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    getUserOptions().then(setUserOptions);
    getAffiliateUnitOptions().then(setAffiliateUnitOptions);
  }, []);

  useEffect(() => {
    if (methods.watch('affiliate_unit_id')) {
      const selectedAffiliateUnit = affiliateUnitOptions?.find(
        (item) => item.value === methods.watch('affiliate_unit_id'),
      );
      if (selectedAffiliateUnit) {
        methods.setValue('affiliate_unit_code', selectedAffiliateUnit.affiliate_unit_code);
        methods.setValue('affiliate_unit_address', selectedAffiliateUnit.affiliate_unit_address);
      }
    }
  }, [methods.watch('affiliate_unit_id'), affiliateUnitOptions]);

  return (
    <Accordion title={title} id={id}>
      <div className='cb_row'>
        <div className='cb_col_6'>
          <FormItem label='Đơn vị nhận' isRequired disabled={disabled || user.is_admin}>
            <FormSelect
              allowClear
              disabled={disabled}
              field='affiliate_unit_id'
              placeholder='Chọn đơn vị nhận'
              list={affiliateUnitOptions || []}
              validation={{ required: 'Đơn vị nhận là bắt buộc' }}
            />
          </FormItem>
        </div>

        <div className='cb_col_6'>
          <FormItem label='Mã đơn vị nhận' isRequired disabled={disabled}>
            <FormInput allowClear disabled={disabled} field='affiliate_unit_code' />
          </FormItem>
        </div>

        <div className='cb_col_6'>
          <FormItem label='Địa chỉ quà tặng' isRequired disabled={disabled}>
            <FormInput allowClear disabled={disabled} field='affiliate_unit_address' />
          </FormItem>
        </div>

        <div className='cb_col_6'>
          <FormItem label='Người tặng' isRequired disabled={disabled}>
            <FormSelect
              allowClear
              disabled={disabled}
              field='giver_user_id'
              placeholder='Chọn người tặng'
              list={userOptions || []}
              validation={{ required: 'Người tặng là bắt buộc' }}
            />
          </FormItem>
        </div>

        <div className='cb_col_6'>
          <FormItem label='Ngày đề nghị' isRequired disabled={disabled}>
            <FormDatePicker
              format={'DD/MM/YYYY'}
              field='proposed_date'
              placeholder={'dd/mm/yyyy'}
              style={{
                width: '100%',
              }}
              bordered={false}
              allowClear
              validation={{ required: 'Ngày đề nghị là bắt buộc' }}
            />
          </FormItem>
        </div>

        <div className='cb_col_6'>
          <FormItem label='Người đề nghị' isRequired disabled={disabled}>
            <FormSelect
              allowClear
              disabled={disabled}
              field='proposed_user_id'
              placeholder='Chọn người đề nghị'
              list={userOptions || []}
              validation={{ required: 'Người đề nghị là bắt buộc' }}
            />
          </FormItem>
        </div>

        <div className='cb_col_6'>
          <FormItem label='Ngày tặng quà' isRequired disabled={disabled}>
            <FormDatePicker
              format={'DD/MM/YYYY'}
              field='gift_date'
              placeholder={'dd/mm/yyyy'}
              style={{
                width: '100%',
              }}
              bordered={false}
              allowClear
            />
          </FormItem>
        </div>
      </div>
    </Accordion>
  );
};

export default Infomation;
