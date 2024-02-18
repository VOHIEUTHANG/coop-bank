import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/index';

const Modal = ({ className, children, open, onClose, onConfirm, header, footer }) => {
  return (
    <React.Fragment>
      <div className={`cb_modal ${className} ${open ? 'cb_modal_open' : ''}`} id='cb_notice_del'>
        <div className='cb_modal_container'>
          <div className='cb_title_modal cb_border_bottom'>
            <h3>{header}</h3>
            <span className='cb_close_modal fi fi-rr-cross-small' onClick={onClose} />
          </div>
          <div className='cb_main_modal cb_text_center'>{children}</div>
          <div className='cb_footer_modal cb_justify_content_center'>
            {footer && <Button type='danger' content={footer} onClick={onConfirm} />}
            <Button type='' outline className='cb_close_modal' content='Quay về' onClick={onClose} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
Modal.propTypes = {
  open: PropTypes.bool,
  className: PropTypes.string,
  header: PropTypes.node,
  footer: PropTypes.string,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
  children: PropTypes.node,
};

export default Modal;
