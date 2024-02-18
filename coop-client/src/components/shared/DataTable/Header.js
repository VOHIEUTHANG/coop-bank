import React from 'react';
import Button from 'components/shared/Button';

const Header = () => {
  return (
    <div className='bw_row bw_mb_2 bw_align_items_center'>
      <div className='bw_col_6'>
        <div className='bw_show_record'></div>
      </div>
      <div className='bw_col_6 bw_flex bw_justify_content_right bw_align_items_center'>
        <Button outline content='Thêm mới ca' type='danger' />
      </div>
    </div>
  );
};

export default Header;
