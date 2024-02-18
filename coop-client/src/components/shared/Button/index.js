import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader';

const Button = ({
  loading,
  disabled,
  submit,
  reset,
  type,
  outline,
  icon,
  content,
  onClick,
  style,
  table,
  ...props
}) => {
  const typeButton = useMemo(() => {
    if (Boolean(reset)) {
      return 'reset';
    } else if (Boolean(submit)) {
      return 'submit';
    } else {
      return 'button';
    }
  }, [submit, reset]);

  const className = useMemo(() => {
    if (outline) {
      return `bw_btn_outline bw_btn_outline_${type}`;
    } else if (table) {
      return `bw_btn_table bw_${type}`;
    } else {
      return `bw_btn bw_btn_${type}`;
    }
  }, [outline, type]);

  return (
    <React.Fragment>
      <button
        disabled={disabled}
        className={`${className} ${props?.className ? props?.className : ''}`}
        type={typeButton}
        onClick={onClick}
        style={disabled ? { ...style, opacity: 0.5, cursor: 'default' } : style}>
        {loading && <Loader />}
        {Boolean(icon) ? <span className={icon} style={{ lineHeight: 0 }}></span> : ''}
        {content}
      </button>
    </React.Fragment>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'danger', 'success', 'warning', 'blue', 'red', 'green']),
  icon: PropTypes.string,
  content: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  outline: PropTypes.bool,
};

Button.defaultProps = {
  type: 'primary',
  disabled: false,
  loading: false,
  submit: false,
  reset: false,
  outline: false,
  onClick: () => {},
};
export default Button;
