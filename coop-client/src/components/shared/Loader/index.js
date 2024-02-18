import React from 'react';
import PropTypes from 'prop-types';
//import 'assets/cb_css/uicons-regular-rounded.scss'
// /import './style.scss';

function BWLoader({ isPage }) {
  return (
    <div className={`cb_loader ${isPage ? 'page' : 'content'}`}>
      <div className='warpper'>
        <div className='inner' />
        <div className='text'>LOADING</div>
      </div>
    </div>
  );
}
BWLoader.propTypes = {
  spinning: PropTypes.bool,
  fullScreen: PropTypes.bool,
};
export default BWLoader;
