import React, { useEffect } from 'react';
import { connect } from 'react-redux';


import './repos-list.scss';

import * as actions from '../../actions';
import {withSearchService} from '../hoc';

import ReposListItem from './repos-list-item';
import Spinner from '../spinner';



const ReposList = (props) => {

   const {reposList=[], loading, searchService, contentLoaded, contentRequested, contentError} = props;

   useEffect(() => {
      contentRequested();
      searchService.getData('', '', 'javascript')
         .then( (content) => contentLoaded(content.items) )
         .catch( () => contentError('errror') );

   }, []);

   const items = reposList.map( (el) => {
      return <ReposListItem key={el.id} {...el} />
   });

   if (loading) {
      return <Spinner />
   };

   if (reposList.length === 0) {
      return <h3>We couldn’t find any repositories</h3>
   }

   return (
      <ul className="repos-list">
         {items}
      </ul>
   );
};

const mapDispatchToProps = {
   ...actions
}

const mapStateToProps = ({ reposList, loading }) => {
   return { reposList, loading };
};

export default withSearchService()(
   connect(mapStateToProps, mapDispatchToProps)(ReposList)
);