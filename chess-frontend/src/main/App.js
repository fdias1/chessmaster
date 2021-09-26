import React from 'react';
import MainLayout from '../components/Layout';
import './reboot.css'
import Routes from './Routes'
import { Provider } from 'react-redux'
import store from '../store/'


function App() {
  return (
    <Provider store={store}>
      <MainLayout>
        <Routes />
      </MainLayout>
    </Provider>
  );
}

export default App;
