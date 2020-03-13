import axios from 'axios';

const initState = {
    user: {
        name: null,
        email: null,
        password: null
    }
};
const rootReducer = (state = initState, action) => {
    if (action.type === 'REGISTER_NEW') {
        console.log(state.user);
        return {
            ...state,
            user: state.user
        };
    } return state;

};

export default rootReducer;