import { useState } from 'react';
import LoginContext from './LoginContext';

function LoginProvider({ children }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmited, setIsSubmited] = useState(false);

    const handleSetData = (type, data) => {
        if (type === 'email') {
            setEmail(data);
        } else if (type === 'password') {
            setPassword(data);
        }
    };
    const handleSubmit = () => {
        setIsSubmited(true);
    };

    const value = {
        email,
        password,
        handleSetData,
        handleSubmit,
        isSubmited,
        setIsSubmited,
    };

    return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>;
}

export default LoginProvider;
