import React from 'react';

import './notification.scss';

const Notification = ({className='', message}) => {

   return (
      <div className={`notification ${className}`}>
         {message}
      </div>
   );
}

export default Notification;