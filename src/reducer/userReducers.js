
export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_LOGIN_REQUEST':
            return {loading: true};
        case 'USER_LOGIN_SUCCESS':
            return {loading: false, userInfo: action.payload};
        case 'USER_LOGIN_FAIL':
            return {loading: false, error: action.payload};
        case 'USER_LOGOUT':
            return {};
        default:
            return state;
    }
}

export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_REGISTER_REQUEST':
            return {loading: true};
        case 'USER_REGISTER_SUCCESS':
            return {loading: false, userInfo: action.payload};
        case 'USER_REGISTER_FAIL':
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

export const getProfileReducer = (state = {user: {}}, action) => {
    switch (action.type) {
        case 'GET_PROFILE_REQUEST':
            return {loading: true, ...state};
        case 'GET_PROFILE_SUCCESS':
            return {loading: false, user: action.payload};
        case 'GET_PROFILE_FAIL':
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

export const updateProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_PROFILE_REQUEST':
            return {loading: true, ...state};
        case 'UPDATE_PROFILE_SUCCESS':
            return {loading: false, success: true, userInfo: action.payload};
        case 'UPDATE_PROFILE_FAIL':
            return {loading: false, error: action.payload};
        case 'UPDATE_PROFILE_RESET':
            return {}
        default:
            return state;
    }
}

export const userListReducer = (state = {users: []}, action) => {
    switch (action.type) {
        case 'USER_LIST_REQUEST':
            return {loading: true, ...state};
        case 'USER_LIST_SUCCESS':
            return {loading: false, users: action.payload};
        case 'USER_LIST_FAIL':
            return {loading: false, error: action.payload};
        case 'USER_LIST_RESET':
            return {users: []};
        default:
            return state;
    }
}