import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useStore } from '~/hooks';
import { actions } from '~/store/StoreProvider';

import { LoadData, LoadUser } from '~/utils';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);

const API = process.env.REACT_APP_API_SERVER_STREAM;
function AccountItem({ user }) {
    const [state, dispatch] = useStore();
    const { listUser } = state;
    const [idUser, setIdUser] = useState('');
    const navigate = useNavigate();

    const handleClickUser = () => {
        setIdUser(user._id);
    };

    useEffect(() => {
        const fetchAPI = async () => {
            if (idUser) {
                await LoadData.resetData(dispatch, actions);
                await LoadUser.setCurrentUser(dispatch, actions, listUser, idUser);
                await LoadData.getData(dispatch, actions, idUser);
                navigate('/browse');
            }
        };
        fetchAPI();
    }, [idUser]);

    return (
        <div className={cx('container')} onClick={handleClickUser}>
            <div className={cx('avatar-image')}>
                <img src={`${API}${user.imageURL}`} alt={user.name} className={cx('avatar-icon')} />
            </div>
            <div className={cx('name-image')}>{user.name}</div>
        </div>
    );
}

export default AccountItem;
