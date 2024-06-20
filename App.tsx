import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import ItemList from './src/components/ItemList';

const App = () => {
  return (
    <Provider store={store}>
      <ItemList />
    </Provider>
  );
};

export default App;
