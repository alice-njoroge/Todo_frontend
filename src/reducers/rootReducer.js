const initState = {
    user: null,
    error: null
};
const rootReducer = (state = initState, action) => {
        if (action.type === 'REGISTER_NEW') {
            return {
                ...state,
                user: action.user   
            };

        }
        return state;


    }
;

export default rootReducer;