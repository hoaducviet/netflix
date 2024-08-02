import LoginContext from './LoginContext';

function LoginProvider({ value, children }) {
    return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>;
}

export default LoginProvider;
