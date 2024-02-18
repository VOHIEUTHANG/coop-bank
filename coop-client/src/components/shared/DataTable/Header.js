import React from 'react';
import Button from 'components/shared/Button';

const Header = () => {
  return (
    <div className='cb_row cb_mb_2 cb_align_items_center'>
      <div className='cb_col_6'>
        <div className='cb_show_record'></div>
      </div>
      <div className='cb_col_6 cb_flex cb_justify_content_right cb_align_items_center'>
        <Button outline content='Thêm mới ca' type='danger' />
      </div>
    </div>
  );
};

export default Header;
