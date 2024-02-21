import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

const Wrapper = styled.div`
  @keyframes loading {
    to {
      background-position-x: -30%;
    }
  }
  .loader__filter__searchbar {
    background-color: #ededed;
    height: 62px;
    border-radius: 7px;
    width: 100%;
  }
  .cb_frm_box .loader__filter__searchbar {
    background-color: #ededed;
    background: linear-gradient(
        100deg,
        rgba(255, 255, 255, 0) 40%,
        rgba(255, 255, 255, 0.5) 50%,
        rgba(255, 255, 255, 0) 60%
      )
      #ededed;
    background-size: 200% 100%;
    background-position-x: 180%;
    animation: 1s loading ease-in-out infinite;
  }
`;

const LabelStyle = styled.span`
  opacity: 0.7;
`;

const FilterSearchBar = ({ title, actions, onSubmit, onClear, colSize = 3, expanded = false }) => {
  const [loadingLazy, setLoadingLazy] = useState(true);
  const methods = useFormContext();
  const [toggleSearch, setToggleSearch] = useState(true);
  const [searchAdvanced, setSearchAdvanced] = useState(expanded);

  useEffect(() => {
    setTimeout(() => {
      setLoadingLazy(false);
    }, [200]);
  }, []);

  const parseAction = actions.filter((p) => !p.hidden);

  return (
    <Wrapper className='cb_search_box'>
      <h3 className='cb_title_search'>
        <span>{title}</span>
        <span className='cb_close_search' onClick={() => setToggleSearch(!toggleSearch)}>
          <i style={{ cursor: 'pointer' }} className='ti-angle-down'></i>
        </span>
      </h3>
      {toggleSearch && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            methods.handleSubmit(onSubmit)(e);
          }}>
          <div className='cb_row cb_mt_1 cb_mb_1 '>
            {(searchAdvanced ? parseAction : parseAction.slice(0, 12 / colSize)).map((props, index) => {
              const { title, isRequired, component } = props;
              return (
                <div key={`${props.title}${index}`} className={`cb_col_${colSize}`}>
                  <div className='cb_frm_box cb_h-100 '>
                    {loadingLazy ? (
                      <div className='loader__filter__searchbar' />
                    ) : (
                      <>
                        <LabelStyle>
                          {title}
                          {isRequired && <span className='cb_red'>*</span>}
                        </LabelStyle>
                        {component}
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          {!loadingLazy && (
            <div className='cb_row cb_align_items_center'>
              <div className='cb_col_6'>
                {parseAction.length > 12 / colSize && (
                  <span onClick={() => setSearchAdvanced(!searchAdvanced)} className='cb_btn_more_search'>
                    {!searchAdvanced ? 'Tìm nâng cao' : 'Ẩn bớt'}
                  </span>
                )}
              </div>
              <div className='cb_col_6 cb_flex cb_justify_content_right cb_btn_group'>
                <button
                  id='filter-search-bar-trigger'
                  type='submit'
                  style={{
                    display: 'none',
                  }}></button>
                <button
                  id='fitler_search_bar'
                  className='cb_btn cb_btn_success'
                  style={{ marginRight: '10px' }}
                  type='button'
                  onClick={methods.handleSubmit(onSubmit)}>
                  <span className='ti-search'></span> Tìm kiếm
                </button>
                <button
                  type='button'
                  onClick={() => {
                    methods.reset({
                      is_active: 1,
                    });
                    onClear({});
                  }}
                  className='cb_btn_outline'>
                  Làm mới
                </button>
              </div>
            </div>
          )}
        </form>
      )}
    </Wrapper>
  );
};

FilterSearchBar.propTypes = {
  /** Title of filter */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  actions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onSubmit: PropTypes.func,
  onClear: PropTypes.func,
};

FilterSearchBar.defaultProps = {
  title: '',
  actions: [],
  onSubmit: () => {},
  onClear: () => {},
};

export default FilterSearchBar;
