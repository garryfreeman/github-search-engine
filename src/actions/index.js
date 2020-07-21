export const contentRequested = () => {
   return {
      type: 'CONTENT_REQUESTED',
   };
};

export const contentLoaded = (payload) => {
   return {
      type: 'CONTENT_LOADED',
      payload
   };
};

export const contentError = () => {
   return {
      type: 'CONTENT_ERROR',
   };
};