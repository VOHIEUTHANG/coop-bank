import React, { useMemo } from 'react';
import { Spin } from 'antd';
import { useFormContext } from 'react-hook-form';
import { urlToList } from 'utils';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';

import Button from '../Button';
import PropTypes from 'prop-types';
import routes from 'routers';
import CheckAccess from 'navigation/CheckAccess';
import styled from 'styled-components';

const Footer = styled.div``;

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);

const FormSection = ({
  loading,
  detailForm,
  onSubmit,
  disabled,
  actions,
  noActions,
  noSideBar,
  noPadding,
  style,
  customerClose,
  enableEditButton = true,
}) => {
  const methods = useFormContext();
  const {
    formState: { isSubmitting },
  } = methods;
  const { pathname } = useLocation();
  // Find name function
  const findNameFunctions = useMemo(() => pathname?.split('/')?.[1], [pathname]);
  const PERMISSION = useMemo(() => {
    const functionsRouteGroup = routes.filter((o) => o?.path.includes(`/${findNameFunctions}/`));
    return {
      edit: functionsRouteGroup?.find((o) => o?.path.includes('/edit'))?.function,
      add: functionsRouteGroup?.find((o) => o?.path.includes('/add'))?.function,
      detail: functionsRouteGroup?.find((o) => o?.path.includes('/detail'))?.function,
    };
  }, [findNameFunctions]);

  const params = useParams();

  const loadingForm = loading || isSubmitting;

  const id = useMemo(() => {
    return params[`${findNameFunctions}_id`] ?? params?.id ?? params[Object.keys(params).find((p) => p.includes('id'))];
  }, [params, findNameFunctions]);

  const isView = useMemo(() => pathname.includes('/detail') || pathname.includes('/view'), [pathname]);
  const isAdd = useMemo(() => pathname.includes('/add'), [pathname]);
  const isEdit = useMemo(() => pathname.includes('/edit'), [pathname]);
  const history = useHistory();
  const path = urlToList(useLocation().pathname)[0];

  const goToPreviousPath = () => {
    history.push(`${path}`);
  };
  const goToEditPath = (e) => {
    e.preventDefault();
    history.push(`${path}/edit/${id}`);
  };

  const jsx_footer = useMemo(() => {
    if (noActions) {
      return;
    }

    if (isView) {
      return (
        <>
          {actions
            ?.filter((p) => !p.hidden)
            .map((props, i) => (
              <Button className='mr-2' key={i} {...props} />
            ))}
          {/* <CheckAccess permission={PERMISSION?.edit}> */}
          {enableEditButton && (
            <button type='button' className='cb_btn_outline cb_btn_outline_success' onClick={goToEditPath}>
              Chỉnh sửa
            </button>
          )}

          {/* </CheckAccess> */}
        </>
      );
    } else if (isAdd || isEdit) {
      return (
        <>
          {actions
            ?.filter((p) => !p.hidden)
            .map((props, i) => (
              <Button className='mr-2' key={i} {...props} />
            ))}
          {/* <CheckAccess permission={isEdit ? PERMISSION?.edit : PERMISSION?.add}> */}
          <button type='submit' className='cb_btn cb_btn_success'>
            <span className='ti-check'></span>Hoàn tất {isEdit ? 'chỉnh sửa' : 'thêm mới'}
          </button>
          {/* </CheckAccess> */}
        </>
      );
    }
  }, [isView, isEdit, isAdd, actions, noActions]);

  const jsx_close = useMemo(() => {
    if (!noActions) {
      return (
        <button type='button' className='cb_btn_outline' onClick={customerClose ?? goToPreviousPath}>
          Đóng
        </button>
      );
    }
  }, [noActions]);

  const parseDetailForm = useMemo(() => {
    return (detailForm ?? []).filter((p) => !p.hidden) ?? [];
  }, [detailForm]);

  const jsx_main = (
    <React.Fragment>
      <div style={style} className='cb_main_wrapp'>
        <div className='cb_row'>
          {!noSideBar && (
            <div className='cb_col_3'>
              <ul className='cb_control_form'>
                {parseDetailForm.map((p, key) => {
                  let checkActive = false;
                  if (Boolean(p?.fieldActive)) {
                    for (let i of p?.fieldActive ?? []) {
                      if (methods.watch(i) !== 0 && !Boolean(methods.watch(i))) {
                        checkActive = false;
                        break;
                      }
                      checkActive = true;
                    }
                  } else {
                    checkActive = true;
                  }
                  return (
                    <li
                      onClick={() => {
                        document.getElementById(key).scrollIntoView({
                          block: 'start',
                          behavior: 'smooth',
                        });
                      }}
                      key={key}>
                      <a className={checkActive ? 'cb_active' : ''}>
                        <span className='ti-check'></span> {p?.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          <div className={`${noSideBar ? 'cb_col_12' : 'cb_col_9'} ${noPadding ? '' : 'cb_pb_6'}`}>
            <Spin spinning={loadingForm} indicator={antIcon}>
              <div className='cb_row'>
                {parseDetailForm.map((p, key) => {
                  const { title, id, component: Component, className, ...props } = p;
                  return (
                    <span key={key} id={key} className={className ?? 'cb_col_12'}>
                      {Component && <Component id={id} title={title} disabled={disabled} {...props} />}
                    </span>
                  );
                })}
              </div>
            </Spin>
          </div>
        </div>
      </div>
      {!noActions && !isSubmitting && (
        <Footer className='cb_btn_save cb_btn_group cb_flex cb_justify_content_right cb_align_items_center'>
          {jsx_footer}
          {jsx_close}
        </Footer>
      )}
    </React.Fragment>
  );

  return noActions ? jsx_main : <form onSubmit={methods.handleSubmit(onSubmit)}>{jsx_main}</form>;
};

FormSection.propTypes = {
  loading: PropTypes.bool,
  detailForm: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      component: PropTypes.node,
      fieldActive: PropTypes.arrayOf(PropTypes.string),
    }),
  ),
  onSubmit: PropTypes.func,
  disabled: PropTypes.bool,
  enableEditButton: PropTypes.bool,
  noActions: PropTypes.bool,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      className: PropTypes.string,
      type: PropTypes.oneOf(['primary', 'danger', 'success', 'warning', 'blue', 'red', 'green']),
      icon: PropTypes.string,
      content: PropTypes.string,
      disabled: PropTypes.bool,
      onClick: PropTypes.func,
      loading: PropTypes.bool,
      outline: PropTypes.bool,
    }),
  ),
};

FormSection.defaultProps = {
  loading: false,
  detailForm: {},
  onSubmit: () => {},
  disabled: false,
  noActions: false,
  enableEditButton: true,
};

export default FormSection;
