import React from 'react';

import Accordion from 'components/shared/Accordion/index';
import FormInput from 'components/shared/FormControl/FormInput';

const Status = ({ disabled }) => {
  return (
    <Accordion title='Trạng thái' id='cb_mores' isRequired={false}>
      <div className='cb_row'>
        <div className='cb_col_12'>
          <div className='cb_frm_box'>
            <div className='cb_flex cb_align_items_center cb_lb_sex'>
              <label className='cb_checkbox'>
                <FormInput type='checkbox' field='is_active' disabled={disabled} />
                <span />
                Kích hoạt
              </label>
              <label className='cb_checkbox'>
                <FormInput type='checkbox' field='is_admin' disabled={disabled} />
                <span />
                Quản trị viên
              </label>
            </div>
          </div>
        </div>
      </div>
    </Accordion>
  );
};

export default Status;
