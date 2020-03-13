const initState = {
    user: null,
    error: null,
    success :null
};
const rootReducer = (state = initState, action) => {
        console.log(action.user);
        if (action.type === 'REGISTER_NEW') {
            return {
                ...state,
                user: action.user
            };

        }
        if (action.type === 'SUCCESS_MESSAGE') {
            console.log(action);
            return {
                ...state,
                success: action.message
            };

        }
        return state;


    }

;

export default rootReducer;