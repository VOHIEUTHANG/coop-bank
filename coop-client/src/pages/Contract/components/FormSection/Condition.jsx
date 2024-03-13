import React from 'react';

import Accordion from 'components/shared/Accordion/index';
import FormRadioGroup from 'components/shared/FormControl/FormRadioGroup';
import { QUALIFICATION_TYPE } from 'pages/Individual/utils/constants';
import FormItem from 'components/shared/FormControl/FormItem';

const Condition = ({ disabled, title, id }) => {
  return (
    <Accordion title={title} id={id}>
      <div className='cb_row'>
        <FormItem label='Điều kiện vay vốn' isRequired className='cb_col_12' disabled={disabled}>
          <FormRadioGroup
            field='is_qualified'
            list={[
              {
                label: 'Đủ điều kiện vay vốn',
                value: QUALIFICATION_TYPE.QUALIFIED,
              },
              {
                label: 'Không đủ điều kiện vay vốn',
                value: QUALIFICATION_TYPE.UNQUALIFIED,
              },
            ]}
          />
        </FormItem>
      </div>
    </Accordion>
  );
};

export default Condition;
