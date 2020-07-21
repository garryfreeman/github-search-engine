import React from 'react';

import {SearchServiceConsumer} from '../search-service-context';

const withSearchService = () => (Wrapped) => {
   return (props) => {
      return (
         <SearchServiceConsumer>
            {
               (searchService) => {
                  return(
                     <Wrapped {...props} searchService={searchService} />
                  );
               }
            }
         </SearchServiceConsumer>
      );
   }
};

export default withSearchService;