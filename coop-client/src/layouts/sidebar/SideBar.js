import React, { useEffect, useState } from 'react';
import logo from 'assets/images/logo.png';
import logo_short from 'assets/images/logo-short.png';
import default_avatar from 'assets/images/default-avatar.png';
import { Link } from 'react-router-dom';
import { useAuth } from 'context/AuthProvider';
import { getNavigation } from 'services/auth.service';
import { getItem } from 'utils';
import { showConfirmModal, triggerSidebar } from 'actions/global';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { LogoutOutlined, KeyOutlined } from '@ant-design/icons';
import MenuRecursive from 'layouts/sidebar/MenuRecursive';
import _ from 'lodash';
import styled from 'styled-components';
import { setCookie } from 'utils/cookie';
import { COOKIE_JWT } from 'utils/constants';
import { useHistory } from 'react-router-dom';
import ChangePassword from 'pages/SiderMenu/modal/ChangePassword';
import { showToast } from 'utils/helpers';

/**
 * Convert Menu
 * @returns
 */
const getNavMenuItems = (items) => {
  let itemsMap = {};
  let ret = (items || []).map((item) => {
    let opts = item._ || {};
    delete item._;
    let parentItem = itemsMap[item.parent_id];
    let navItem = getItem(item.menu_name, item.link_menu, item.menu_name, item.menu_id, item.icon_path);
    itemsMap[item.menu_id] = navItem;
    if (parentItem && opts.level > 1) {
      parentItem.children = parentItem.children || [];
      parentItem.children.push(navItem);
      return null;
    }
    return navItem;
  });

  let menuResult = ret.filter((item) => !!item);
  expandPath(menuResult);
  return menuResult;
};

/**
 * Update Menu Parent Not Link
 * @param {*} nodes
 */
const expandPath = (nodes) => {
  for (const node of nodes || []) {
    if (node.children && node.children.length > 0) {
      node.label = node.name;
    }
    expandPath(node.children);
  }
};

const UserSection = styled.div`
  position: relative;
  z-index: 1;
  &:hover {
    transition: 0.3s;
    .user__section__dropdown {
      display: block;
    }
  }
  .user__section__dropdown {
    display: none;
    position: absolute;
    width: 80%;
    background-color: white;
    border-radius: 6px;
    overflow: hidden;
    top: 59px;
    z-index: 3;
    transition: 0.3s;
  }
  .header-menu {
    color: black;
    padding: 8px 8px;
    font-size: 17px;
    z-index: 3;
    cursor: pointer;
    transition: 0.3s;
  }
  .header-menu:hover {
    background: var(--mainColor);
    color: white;
    z-index: 3;
    transition: 0.3s;
  }
  .anticon {
    margin-right: 5px;
  }
`;

const SideBar = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const [loadFirst, setLoadFirst] = useState(true);
  const [openKey, setOpenKey] = useState({});
  const [modalChangePassword, setModalChangePassword] = useState(undefined);

  const dispatch = useDispatch();

  const { user } = useAuth();
  const [menus, setMenus] = useState([]);
  const [navigation, setNavigation] = useState([]);

  useEffect(() => {
    const getMenus = async () => {
      try {
        let menus = await getNavigation();
        setMenus(menus);
        let navigation = getNavMenuItems(JSON.parse(JSON.stringify(menus || [])));
        setNavigation(navigation);
      } catch (error) {}
    };
    getMenus();
  }, []);

  const handleCollapse = () => {
    dispatch(triggerSidebar());
  };

  const handleSetOpen = (key) => {
    let _;
    if (key) {
      _ = menus.find((o) => o.menu_id === key);
    } else {
      _ = menus.find((o) => o.link_menu === pathname);
    }
    key = _?.menu_id;
    setOpenKey((state) => ({
      ...state,
      [key]: true,
    }));
    if (_?.parent_id && _.parent_id !== '0') {
      handleSetOpen(_.parent_id);
    } else {
      return;
    }
  };

  useEffect(() => {
    if (Array.isArray(menus) && menus.length > 0 && pathname && _.isEmpty(openKey) && loadFirst) {
      setLoadFirst(false);
      handleSetOpen();
    }
  }, [pathname, menus]);

  useEffect(() => {
    /**
     * pathname change openKey[menu_id] not true -> set true
     * _path: /stocks-in-request/add?param1=10000 => /stocks-in-request
     */
    let _path = pathname.replace(/(\/add(.+)?|\/edit(.+)?|\/view(.+)?|\/detail(.+)?)$/, '');
    let findMenu = menus?.find((x) => x.link_menu === _path);
    if (findMenu?.menu_id && !openKey[findMenu?.menu_id]) {
      setOpenKey({});
      handleSetOpen(findMenu.menu_id);
    }
  }, [pathname, menus, openKey]);

  let menuUser = [
    {
      key: 'CHANGE_PASSWORD',
      label: (
        <span
          onClick={() => {
            setModalChangePassword(true);
          }}
          className='header-menu'
          style={{ display: 'inline-block', width: '100%' }}>
          <KeyOutlined />
          Đổi mật khẩu
        </span>
      ),
    },
    {
      key: 'LOG_OUT',
      label: (
        <span
          style={{ display: 'inline-block', width: '100%' }}
          className='header-menu'
          onClick={(e) => {
            e.preventDefault();
            dispatch(
              showConfirmModal(
                ['Bạn xác nhận sẽ đăng xuất?'],
                async () => {
                  setCookie(COOKIE_JWT, undefined);
                  showToast.success('Đăng xuất thành công !');
                  window._$g.rdr(`/logout`);
                },
                'Đồng ý',
              ),
            );
          }}>
          <LogoutOutlined type='logout' />
          Đăng xuất
        </span>
      ),
    },
  ];

  return (
    <div id='sidebar__left' className='cb_sidebar'>
      <div
        className='cb_logo'
        style={{
          position: 'absolute',
          bottom: 10,
          left: 10,
          right: 10,
          background: 'var(--grayColor)',
          borderRadius: 4,
        }}>
        <a className='cb_main_logo' style={{ margin: '0 auto' }}>
          <Link to='/'>
            <img src={logo} />
          </Link>
        </a>
      </div>
      <UserSection className='cb_user_admin cb_flex cb_align_items_center'>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            alt='avatar'
            style={{
              width: '40px',
              height: '40px',
              border: '0.01px solid #19376d',
              borderRadius: '50%',
            }}
            src={default_avatar}
          />
          <span className='cb_hideen_nav'>
            {user?.username} - {user?.full_name}
          </span>
        </div>
        <div className='user__section__dropdown'>{menuUser.map((o) => o.label)}</div>
      </UserSection>
      <ul id='menu__list' className='cb_main_menu'>
        <MenuRecursive
          items={navigation}
          openKey={openKey}
          recureSiveOpenKey={(value) => {
            setOpenKey({});
            handleSetOpen(value);
          }}
          setOpenKey={setOpenKey}
        />
      </ul>

      {modalChangePassword && (
        <ChangePassword
          onClose={() => {
            setModalChangePassword(undefined);
          }}
        />
      )}
    </div>
  );
};

export default SideBar;
