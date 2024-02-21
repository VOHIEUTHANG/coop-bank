import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const IconCollapse = styled.span`
  transform: ${(props) => (props.open ? 'rotate(180deg)' : '')};
  color: ${(props) => (props.open ? '#333333' : '')};
`;

const Accordion = ({ style, title, children, id, isRequired = false, componentCustom, defaultOpen = true }) => {
  const [open, setOpen] = useState(defaultOpen);

  const handleAccordion = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <div id={id} className='cb_items_frm'>
        <div className={`cb_collapse ${open ? 'cb_active' : ''}`}>
          {!!title && (
            <div className='cb_collapse_title' style={{ width: 'fit-content', gap: '5px' }}>
              <IconCollapse open={open} className='ti-angle-down' onClick={handleAccordion} />
              <h3>
                {title}
                {isRequired && <span className='cb_red'>*</span>}
              </h3>
            </div>
          )}
          {open && <div className='cb_collapse_panel'>{children}</div>}
          {componentCustom && componentCustom}
        </div>
      </div>
    </React.Fragment>
  );
};

Accordion.propTypes = {
  isRequired: PropTypes.bool,
  title: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node,
};

export default Accordion;
