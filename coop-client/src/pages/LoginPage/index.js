import React, { useState } from 'react';
import logoLogin from 'assets/images/logo.png';
import { useAuth } from 'context/AuthProvider';
import { Button, Form, Alert } from 'antd';
import { Redirect } from 'react-router-dom';
import { getErrorMessage } from 'utils';
import { getProfile, login } from 'services/auth.service';
import { setCookie } from 'utils/cookie';
import { COOKIE_JWT } from 'utils/constants';
import { LoadingOutlined } from '@ant-design/icons';
import placeholder from 'assets/images/placeholder.png';
import background from 'assets/images/background.jpg';
import styled from 'styled-components';

const initialValues = {
  username: '',
  password: '',
};

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;

  input::placeholder {
    color: #333 !important;
    opacity: 0.6;
  }
`;

function LoginPage() {
  const { user = null, setUser, initializing, setInitializing } = useAuth();
  const [msgErr, setMsgErr] = useState(null);

  const handleSubmitLogin = async (values) => {
    setInitializing(true);
    try {
      const token = await login(values);
      setCookie(COOKIE_JWT, JSON.stringify(token));
      let profileData = await getProfile();
      if (!profileData.is_admin) {
        // let functions = await getFunctions();
        // profileData.functions = functions;
        profileData.functions = [];
      }
      setUser(profileData);
    } catch (error) {
      setMsgErr(getErrorMessage(error));
    } finally {
      setInitializing(false);
    }
  };

  if (user) {
    return <Redirect to='/' push />;
  }

  return (
    <div className='cb_main_login' style={{ backgroundImage: `url(${background})` }}>
      <div
        style={{
          width: '50vw',
          height: '70vh',
          display: 'flex',
          borderRadius: '20px',
          overflow: 'hidden',
          background: 'white',
        }}>
        <Wrapper>
          <Form
            initialValues={initialValues}
            scrollToFirstError={true}
            name='frmLogin'
            layout='vertical'
            size='large'
            onFinish={handleSubmitLogin}
            className='cb_form_login'>
            <img src={logoLogin} alt={2} />
            <h1 style={{ maxWidth: '100%' }}>Đăng nhập</h1>
            {msgErr && (
              <Alert
                message={msgErr}
                className='cb_mb_2'
                type='error'
                showIcon
                closable
                onClose={() => setMsgErr(null)}
              />
            )}
            <Form.Item
              name='username'
              disabled={initializing}
              rules={[
                {
                  required: true,
                  message: 'Tên tài khoản là bắt buộc',
                },
              ]}>
              <input
                type='text'
                placeholder='Tên tài khoản'
                autoComplete='username'
                className='cb_inp'
                style={{ margin: 0 }}
              />
            </Form.Item>
            <Form.Item
              name='password'
              rules={[
                {
                  required: true,
                  message: 'Mật khẩu là bắt buộc',
                },
              ]}>
              <input
                disabled={initializing}
                type='password'
                placeholder='Mật khẩu'
                autoComplete='current-password'
                className='cb_inp'
                style={{
                  margin: 0,
                }}
              />
            </Form.Item>
            <Form.Item>
              <Button
                disabled={initializing}
                icon={initializing ? <LoadingOutlined /> : undefined}
                type='primary'
                htmlType='submit'
                className='cb_btn cb_btn_login'>
                Đăng nhập
              </Button>
            </Form.Item>
          </Form>
        </Wrapper>
        <div style={{ width: '50%' }}>
          <img style={{ height: '100%', objectFit: 'cover', width: '100%' }} src={placeholder} />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
