import React, { useState } from 'react';
import { connect } from 'react-redux';

import './search-form.scss';

import * as actions from '../../actions';
import {withSearchService} from '../hoc';

const SearchForm = (props) => {

   const {searchService, contentRequested, contentLoaded, contentError} = props;

   const [reposeName, setReposeName] = useState('');
   const [username, setUsername] = useState('');
   const [language, setLanguage] = useState('');

   let handleSubmit = (e) => {
      e.preventDefault();
      console.log(reposeName, username, language)
      contentRequested();
      searchService.getData(reposeName, username, language)
         .then( (content) => contentLoaded(content.items) )
         .catch( () => contentError('errror') );

   }

   return (
      <form onSubmit={ handleSubmit } className="search-form">
         <input type="text" 
                placeholder="what do you wanna find?" 
                className="search-form__field"
                onChange={(e) => setReposeName(e.target.value)} />
         <input type="text" 
                placeholder="fill username?" 
                className="search-form__field"
                onChange={(e) => setUsername(e.target.value)} />
         <input type="text" 
                placeholder="ill language" 
                className="search-form__field"
                onChange={(e) => setLanguage(e.target.value)} />
         <button type="submit" className="search-form__button">Search</button>
      </form>
   );
}

const mapStateToProps = () => {
   return {};
};

const mapDispatchToProps = {
   ...actions
}

export default withSearchService()(
   connect(mapStateToProps, mapDispatchToProps)(SearchForm)
);