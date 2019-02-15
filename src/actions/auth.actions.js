export const loginFetch = ({ username, password }, setSubmitting) => ({
    type: 'LOGIN/FETCH',
    setSubmitting,
    data: {
        username,
        password
    }
});

export const loginPut = ({ username, role, id }) => ({
    type: 'LOGIN/PUT',
    data: {
        username,
        role,
        id
    }
});

export const loginFailed = ({ errorMsg }) => ({
    type: 'LOGIN_FAILED',
    error: {
        errorMsg,
    }
});

export const redirectUrlPut = ({ redirectUrl }) => ({
    type: 'REDIRECT_URL/PUT',
    redirectUrl
});

export const logoutPut = () => ({
    type:'LOGOUT/PUT'
});