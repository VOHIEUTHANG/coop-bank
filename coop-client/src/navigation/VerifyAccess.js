import React from 'react';
import useVerifyAccess from 'hooks/useVerifyAccess';
import { Redirect, useLocation } from 'react-router-dom';
import { useAuth } from 'context/AuthProvider';
import styled from 'styled-components';
import { Spin } from 'antd';

const DefaultLayout = React.lazy(() => import('../layouts/DefaultLayout'));

const BackgroundLoading = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
`;

function VerifyAccess(props) {
  const location = useLocation();
  const { initializing } = useAuth();
  const { verify } = useVerifyAccess(props);

  const _render = () => {
    let _verify = verify(null, location);

    return _verify === true ? (
      <DefaultLayout {...props} />
    ) : false === _verify ? (
      <Redirect to='/login' />
    ) : (
      <Redirect to={`/500/${_verify}`} />
    );
  };

  if (initializing) {
    return (
      <BackgroundLoading>
        <Spin size='large' />
      </BackgroundLoading>
    );
  } else {
    return <React.Fragment>{_render()}</React.Fragment>;
  }
}

export default VerifyAccess;
