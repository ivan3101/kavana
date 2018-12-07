export const loginFetch = ({ cedula, contraseña }) => ({
    type: 'LOGIN/FETCH',
    tempPassword: {
        cedula,
        contraseña
    }
});

export const loginPUt = ({ token, id, name }) => ({
    type: 'LOGIN/PUT',
    data: {
        token,
        id,
        name
    }
});

export const loginFailed = ({ errorMsg, errorType }) => ({
    type: 'LOGIN_FAILED',
    error: {
        errorMsg,
        errorType
    }
});

export const redirectUrlPut = ({ redirectUrl }) => ({
    type: 'REDIRECT_URL/PUT',
    redirectUrl
});

export const loggingOutPut = () => ({
    type:'LOGGING_OUT'
});