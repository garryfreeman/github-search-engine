import React from 'react';

import {SearchServiceConsumer} from '../contact-service-context';

const withResumeService = () => (Wrapped) => {
   return (props) => {
      return (
         <SearchServiceConsumer>
            {
               (searchService) => {
                  return(
                     <Wrapped {...props} contactService={searchService} />
                  );
               }
            }
         </SearchServiceConsumer>
      );
   }
};

export default withResumeService;