import React from 'react';

import FormInput from 'components/shared/FormControl/FormInput';
import Accordion from 'components/shared/Accordion/index';

const FormStatus = ({ disabled, hiddenActive, hiddenSystem }) => {
  return (
    <Accordion title='Trạng thái'>
      <div className='bw_row'>
        <div className='bw_col_12'>
          <div className='bw_frm_box'>
            <div className='bw_flex bw_align_items_center bw_lb_sex'>
              {!hiddenActive && (
                <label className='bw_checkbox'>
                  <FormInput disabled={disabled} type='checkbox' field='is_active' />
                  <span />
                  Kích hoạt
                </label>
              )}
              {!hiddenSystem && (
                <label className='bw_checkbox'>
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
