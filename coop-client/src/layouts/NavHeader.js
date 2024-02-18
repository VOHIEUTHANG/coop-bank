import React, { useEffect, useMemo, useRef, useState } from 'react';
import routes from 'routers';
import { formatter } from 'utils';
import { useDispatch } from 'react-redux';
import { showNotifyHeader } from 'actions/global';
import { TYPE_NOTIFY } from 'utils/constants';
import { useLocation, useHistory } from 'react-router-dom';
import pathToRegexp from 'path-to-regexp';
import NotifyCommon from './notify/NotifyCommon';
import { Badge } from 'antd';
import { getNotifyCount } from 'services/special-day.service';
import { showToast } from 'utils/helpers';

const NavHeader = () => {
  const history = useHistory();
  const { pathname, search } = useLocation();
  const dispatch = useDispatch();
  const [routerMap, setRouterMap] = useState([]);
  const [notifyCount, setNotifyCount] = useState(0);

  const getBreadcrumbNameMap = () => {
    const routerMap = {};
    const mergeMenuAndRouter = (data) => {
      data.forEach((menuItem) => {
        if (menuItem.children) {
          mergeMenuAndRouter(menuItem.children);
        }
        routerMap[menuItem.path] = menuItem;
      });
    };
    mergeMenuAndRouter(formatter(routes));
    setRouterMap(routerMap);
  };
  useEffect(getBreadcrumbNameMap, []);

  useEffect(() => {
    getNotifyCount()
      .then((count) => {
        setNotifyCount(count);
      })
      .catch(() => {
        showToast.error('Lấy số lượng thông báo xảy ra lỗi !');
      });
  }, []);

  /**
   * Get Page Title
   * @param {*} pathname
   * @returns
   */
  const getPageTitle = useMemo(() => {
    let currRouterData = null;
    Object.keys(routerMap).forEach((key) => {
      if (pathToRegexp(key).test(pathname)) {
        currRouterData = routerMap[key];
      }
    });
    if (!currRouterData) {
      return '';
    }
    return currRouterData.name;
  }, [pathname, routerMap]);

  return (
    <header className='bw_flex bw_align_items_center bw_justify_content_between'>
      <h1>
        <a>
          <i
            style={{
              cursor: 'pointer',
            }}
            onClick={() => {
              history.goBack();
            }}
            className='fi fi-rr-angle-circle-left'></i>
        </a>
        <span id='bw_form_title'>{getPageTitle}</span>
      </h1>
      <div className='bw_right_header'>
        <Badge count={notifyCount} offset={[0, 10]}>
          <button
            onClick={() => {
              dispatch(showNotifyHeader(TYPE_NOTIFY.ANNOUNCE));
            }}
            className='bw_btn_header'>
            <span className={`fi fi-rr-bell`}></span>
          </button>
        </Badge>
        <NotifyCommon />
      </div>
    </header>
  );
};

export default React.memo(NavHeader);
