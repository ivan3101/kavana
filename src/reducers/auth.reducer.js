const defaultState = {
    isAuthenticated: false,
    redirectUrl: '/',
    error: false,
    errorType: '',
    errorMsg: '',
};

export const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'LOGIN/PUT':
            return {
                ...state,
                isAuthenticated: true
            };

        case 'LOGIN_FAILED':
            return {
                ...state,
                error: true,
                errorMsg: action.error.errorMsg,
                errorType: action.error.errorType
            };

        case 'REDIRECT_URL/PUT':
            return {
                ...state,
                redirectUrl: action.redirectUrl
            };

        case 'LOGOUT':
            return defaultState;

        default:
            return state;
    }
}