import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import './App.css';
//import './Style.css';
import PageRoute from './pageRoute/PageRoute';

function App() {
  return (
    <Provider store={store}>
      <div>
        <PageRoute />
      </div>
    </Provider>
  );
}

export default App;
