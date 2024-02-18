import React, { useEffect, useState } from 'react';

import Accordion from 'components/shared/Accordion/index';
import FormItem from 'components/shared/FormControl/FormItem';
import FormSelect from 'components/shared/FormControl/FormSelect';
import FormTextArea from 'components/shared/FormControl/FormTextArea';
import { useFormContext } from 'react-hook-form';
import { getOptions as getUserOptions } from 'services/user.service';
import { getOptions as getAffiliateUnitOptions } from 'services/affiliate-unit.service';
import FormDatePicker from 'components/shared/FormControl/FormDate';

const Infomation = ({ disabled, title, id }) => {
  const methods = useFormContext();
  const [userOptions, setUserOptions] = useState([]);
  const [affiliateUnitOptions, setAffiliateUnitOptions] = useState([]);

  useEffect(() => {
    getUserOptions().then(setUserOptions);
    getAffiliateUnitOptions().then(setAffiliateUnitOptions);
  }, []);

  return (
    <Accordion title={title} id={id}>
      <div className='bw_row'>
        <div className='bw_col_6'>
          <FormItem label='Đơn vị nhận' disabled={disabled}>
            <FormSelect
              allowClear
              disabled={disabled}
              field='affiliate_unit_id'
              placeholder='Chọn đơn vị nhận'
              list={affiliateUnitOptions || []}
            />
          </FormItem>
        </div>

        <div className='bw_col_6'>
          <FormItem label='Người tặng' disabled={disabled}>
            <FormSelect
              allowClear
              disabled={disabled}
              field='giver_user_id'
              placeholder='Chọn người tặng'
              list={userOptions || []}
            />
          </FormItem>
        </div>

        <div class='bw_col_6'>
          <FormItem label='Ngày tặng quà' disabled={disabled}>
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

        <div class='bw_col_12'>
          <FormItem label='Nội dung qùa tặng' isRequired disabled={disabled}>
            <FormTextArea
              rows={3}
              field='gift_content'
              placeholder='Nhập nội dung qùa tặng'
              validation={{
                required: 'Nội dung qùa tặng là bắt buộc',
              }}
            />
          </FormItem>
        </div>

        <div class='bw_col_12'>
          <FormItem label='Mô tả quà tặng' disabled={disabled}>
            <FormTextArea rows={4} field='gift_description' placeholder='Nhập mô tả quà tặng' />
          </FormItem>
        </div>
      </div>
    </Accordion>
  );
};

export default Infomation;
