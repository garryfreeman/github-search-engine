const initialState = {
	loading: true,
	error: false
};


const reducer = (state = initialState, action) => {

   switch(action.type) {
		case 'CONTENT_REQUESTED':
			return {
				...state,
				loading: true,
				error: false
			}
		
		case 'CONTENT_LOADED':
			return {
				...state,
				...action.payload,
				loading: false,
				error: false
			}

		case 'CONTENT_ERROR':
			return {
				...state,
				content: null,
				loading: false,
				error: true
			};

      default: 
         return state;
   }
};

export default reducer;