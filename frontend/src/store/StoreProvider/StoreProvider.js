import { useReducer } from 'react';
import StoreContext from './StoreContext';
import reducer, { initState } from './reducer';
import logger from './logger';

function Provider({ children }) {
    const [state, dispatch] = useReducer(logger(reducer), initState);

    return <StoreContext.Provider value={[state, dispatch]}>{children}</StoreContext.Provider>;
}

export default Provider;
