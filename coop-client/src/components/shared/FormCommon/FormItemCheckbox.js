import React from 'react';
import classNames from 'classnames';

function FormItemCheckbox({ label, children, className, gray }) {
  return (
    <div className={classNames('cb_row', { [className]: !!className })}>
      <div className='cb_col_12'>
        <div className={classNames('cb_frm_box', { cb_readonly: gray })}>
          <div className='cb_flex'>
            <label className='cb_checkbox'>
              {children}
              {label && <span />}
              {label}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormItemCheckbox;
