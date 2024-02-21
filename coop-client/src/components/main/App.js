import React from 'react';

import AppRouter from 'routers/AppRouter/AppRouter';
import { store } from 'store';
import { Provider } from 'react-redux';
import { AuthProvider } from 'context/AuthProvider';
import { ToastContainer } from 'react-toastify';
import 'assets/css/themify-icons.css';
import 'assets/scss/style.scss';
import 'assets/scss/main.css';
import 'styles/app.css';
import 'react-toastify/dist/ReactToastify.css';
import ConfirmModal from 'components/shared/ConfirmDeleteModal';

const App = () => (
  <Provider store={store}>
    <AuthProvider>
      <AppRouter />
      <ToastContainer />
      <ConfirmModal />
      <div id='modal_root'></div>
    </AuthProvider>
  </Provider>
);
export default App;
