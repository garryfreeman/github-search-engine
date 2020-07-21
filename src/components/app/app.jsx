import React from 'react';
// import { connect } from 'react-redux';

import './app.scss';
import Header from '../header';
import SearchForm from '../search-form';
import ReposList from '../repos-list';


const App = () => {
   return (
      <div>
         <Header />
         <main className="main">
            <SearchForm />
            <ReposList />
         </main>
      </div>
   );
}

export default App;