import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './css/index.scss';

import App from './components/app';
import ErrorBoundry from './components/error-boundry/index.jsx';
import SearchService from './services/search-service';
import { SearchServiceProvider } from './components/search-service-context';
import store from './store';

const searchService = new SearchService();

ReactDOM.render(
   <Provider store={store}>
      <ErrorBoundry>
        <SearchServiceProvider value={searchService}>
          <Router>
            <App />
          </Router>
        </SearchServiceProvider>
      </ErrorBoundry>
    </Provider>,
    document.querySelector('#root')
);