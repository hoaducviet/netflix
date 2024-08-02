import { useContext } from 'react';
import { StoreContext } from '~/store/StoreProvider';

export const useStore = () => {
    const [state, dispatch] = useContext(StoreContext);

    return [state, dispatch];
};
