import React, { Suspense, useMemo } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routes from 'routers';
import SideBar from './sidebar/SideBar';
import NavHeader from './NavHeader';

function DefaultLayout() {
  const { collapsedSideBar: collapsed } = useSelector((state) => state.global);

  const jsx_render = useMemo(() => {
    return (
      <Suspense fallback={null}>
        <Switch>
          {routes.map((route) => {
            return (
              route.component && (
                <Route
                  key={new Date().getTime()}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  component={route.component}
                />
              )
            );
          })}
          <Redirect from='/' to='/404' />
        </Switch>
      </Suspense>
    );
  }, [routes]);

  return (
    <div className={`cb_contain ${collapsed ? 'cb_close_nav' : ''}`}>
      <SideBar />
      <div className='cb_main'>
        <NavHeader />
        {jsx_render}
        <div
          style={{ position: 'relative', width: '100%' }}
          className='cb_flex cb_align_items_center cb_justify_content_between cb_ft'>
          <p>NGÂN HÀNH HỢP TÁC CHI NHÁNH KIÊN GIANG</p>
          <p>Copy ® Từ Thế Vũ – 0918812882 – 0888255252</p>
          <p>Mail: tuthevu@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default withRouter(DefaultLayout);
