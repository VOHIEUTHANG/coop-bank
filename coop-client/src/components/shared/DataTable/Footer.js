import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ current, totalPage }) => {
  return (
    <div className='cb_row cb_mt_2 cb_show_table_page'>
      <div className='cb_col_6'>
        <p>
          Hiển thị {current}/{totalPage} bản ghi
        </p>
      </div>
      <div className='cb_col_6 cb_flex cb_justify_content_right cb_align_items_center'>
        <div className='cb_nav_table'>
          <button className={current === 0 ? 'cb_active' : null}>
            <span className='ti-angle-left'></span>
          </button>
          <input type='number' value='1' step='1' />
          <span className='cb_all_page'>
            {current} / {totalPage}
          </span>
          <button className={current === totalPage ? 'cb_active' : null}>
            <span className='ti-angle-right'></span>
          </button>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  current: PropTypes.number.isRequired,
  totalPage: PropTypes.number.isRequired,
};

Footer.defaultProps = {
  current: 1,
  totalPage: 1,
};

export default Footer;
