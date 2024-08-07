import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import DynamicMenu from './components/DynamicMenu';
import ApplicationLoader from './components/ApplicationLoader';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <DynamicMenu />
          <ApplicationLoader />
 
        </div>
      </Router>
    </Provider>
  );
}

export default App;
