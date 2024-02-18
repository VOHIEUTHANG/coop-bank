import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import FilterSearchBar from 'components/shared/FilterSearchBar/index';
import FormInput from 'components/shared/FormControl/FormInput';

const DefaultFilter = {
  search: '',
};

const BankRepresentativeFilter = ({ onChange }) => {
  const methods = useForm(DefaultFilter);

  const onClear = () => {
    methods.reset(DefaultFilter);
    onChange(DefaultFilter);
  };

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
            component: (
              <FormInput field='search' placeholder='Nhập tên, số điện thoại, số căn cước công dân' maxLength={250} />
            ),
          },
        ]}
      />
    </FormProvider>
  );
};

export default BankRepresentativeFilter;
