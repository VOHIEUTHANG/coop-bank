import React from 'react';

import Accordion from 'components/shared/Accordion/index';
import FormInput from 'components/shared/FormControl/FormInput';

const Status = ({ disabled }) => {
  return (
    <Accordion title='Trạng thái' id='bw_mores' isRequired={false}>
      <div className='bw_row'>
        <div className='bw_col_12'>
          <div className='bw_frm_box'>
            <div className='bw_flex bw_align_items_center bw_lb_sex'>
              <label className='bw_checkbox'>
                <FormInput type='checkbox' field='is_active' disabled={disabled} />
                <span />
                Kích hoạt
              </label>
              <label className='bw_checkbox'>
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
