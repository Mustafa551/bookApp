import React from 'react';
import Mystack from './src/navigation/mystack/Mystack';
import {Provider} from 'react-redux';
import store from './src/redux/store';
function App() {
  return (
    <Provider store={store}>
      <Mystack />
    </Provider>
  );
}

export default App;