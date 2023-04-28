export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_LOGIN_REQUEST':
            return { loading: true};
        case 'USER_LOGIN_SUCCESS':
            return { loading: false, userInfo: action.payload };
        case 'USER_LOGIN_FAIL':
            return { loading: false, error: action.payload };
        case 'USER_LOGOUT':
            return {};
        default:
            return state;
    }
}
export const userRegReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_REG_REQUEST':
            return { loading: true};
        case 'USER_REG_SUCCESS':
            return { loading: false, userInfo: action.payload };
        case 'USER_REG_FAIL':
            return { loading: false, error: action.payload };
    
        
        default:
            return state;
    }
}
export const userProfileReducer = (state = {user: {}}, action) => {
    switch (action.type) {
        case 'USER_PROFILE_REQUEST':
            return {...state, loading: true};
        case 'USER_PROFILE_SUCCESS':
            console.log('userProfileReducer');
            console.log(action.payload);
            return { loading: false, user: action.payload };
        case 'USER_PROFILE_FAIL':
            return { loading: false, error: action.payload };
    
        
        default:
            return state;
    }
}

export const userUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_UPDATE_REQUEST':
            return { loading: true};
        case 'USER_UPDATE_SUCCESS':
            return { loading: false, success: true , userInfo: action.payload};
        case 'USER_UPDATE_FAIL':
            return { loading: false, error: action.payload };
        case 'USER_UPDATE_RESET':
            return {};
        default:
            return state;
    }
}