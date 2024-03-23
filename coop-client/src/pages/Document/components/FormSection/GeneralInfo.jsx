import React from 'react';
import Accordion from 'components/shared/Accordion/index';
import FormItem from 'components/shared/FormControl/FormItem';
import FormInput from 'components/shared/FormControl/FormInput';

const Infomation = ({ disabled, title, id }) => {
  return (
    <Accordion title={title} id={id}>
      <div className='cb_row'>
        <div className='cb_col_6'>
          <FormItem label='Tên nhóm tài liệu' isRequired disabled={disabled}>
            <FormInput
              type='text'
              field='document_name'
              placeholder='Nhập tên nhóm tài liệu'
              validation={{
                required: 'Tên nhóm liệu là bắt buộc',
              }}
            />
          </FormItem>
        </div>
      </div>
    </Accordion>
  );
};

export default Infomation;
