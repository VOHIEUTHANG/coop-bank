import React, { useState, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import FilterSearchBar from 'components/shared/FilterSearchBar/index';
import FormInput from 'components/shared/FormControl/FormInput';
import FormDateRange from 'components/shared/FormControl/FormDateRange';
import { DefaultFilter } from '../utils/constants';
import FormSelect from 'components/shared/FormControl/FormSelect';
import { getOptions } from 'services/affiliate-unit.service';

const BankRepresentativeFilter = ({ onChange }) => {
  const methods = useForm(DefaultFilter);
  const [affiliateUnits, setAffiliateUnits] = useState([]);

  const onClear = () => {
    methods.reset(DefaultFilter);
    onChange(DefaultFilter);
  };

  useEffect(() => {
    getOptions().then(setAffiliateUnits);
  }, []);

  return (
    <FormProvider {...methods}>
      <FilterSearchBar
        title='Tìm kiếm'
        onSubmit={(v) => {
          v.search = v.search?.trim();
          onChange(v);
        }}
        colSize={4}
        onClear={() => onClear()}
        actions={[
          {
            title: 'Từ khóa',
            component: <FormInput field='search' placeholder='Nhập nội dung, mô tả quà tặng' maxLength={250} />,
          },
          {
            title: 'Ngày tạo',
            component: (
              <FormDateRange
                allowClear={true}
                fieldStart={'created_date_from'}
                fieldEnd={'created_date_to'}
                placeholder={['Từ ngày', 'Đến ngày']}
                format={'DD/MM/YYYY'}
              />
            ),
          },
          {
            title: 'Đơn vị nhận',
            component: <FormSelect allowClear={true} field='affiliate_unit_id' list={affiliateUnits || []} />,
          },
        ]}
      />
    </FormProvider>
  );
};

export default BankRepresentativeFilter;
