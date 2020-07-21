const initialState = {
	loading: true,
	error: false,
	reposList: []
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
				reposList: action.payload,
				loading: false,
				error: false
			}

		case 'CONTENT_ERROR':
			return {
				...state,
				reposList: [],
				loading: false,
				error: true
			};

      default: 
         return state;
   }
};

export default reducer;