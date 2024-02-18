import React from 'react';

import FormInput from 'components/shared/FormControl/FormInput';
import Accordion from 'components/shared/Accordion/index';

const FormStatus = ({ disabled, hiddenActive, hiddenSystem }) => {
  return (
    <Accordion title='Trạng thái'>
      <div className='cb_row'>
        <div className='cb_col_12'>
          <div className='cb_frm_box'>
            <div className='cb_flex cb_align_items_center cb_lb_sex'>
              {!hiddenActive && (
                <label className='cb_checkbox'>
                  <FormInput disabled={disabled} type='checkbox' field='is_active' />
                  <span />
                  Kích hoạt
                </label>
              )}
              {!hiddenSystem && (
                <label className='cb_checkbox'>
                  <FormInput disabled={disabled} type='checkbox' field='is_system' />
                  <span />
                  Hệ thống
                </label>
              )}
            </div>
          </div>
        </div>
      </div>
    </Accordion>
  );
};

export default FormStatus;
