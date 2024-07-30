import { useState, useRef, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { useDebounce } from '~/hooks';
import * as searchSevice from '~/services/searchService';

import CardMovie from '~/components/CardMovie';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

const list = [
    {
        name: 'Marvel Spider-Man: Vexed by Venom',
    },
    {
        name: 'School for Little Vampires',
    },
    {
        name: 'Vietnamese Movies & TV',
    },
    {
        name: 'Marvel Spider-Man: Vexed by Venom',
    },
    {
        name: 'School for Little Vampires',
    },
    {
        name: 'Vietnamese Movies & TV',
    },
    {
        name: 'Marvel Spider-Man: Vexed by Venom',
    },
    {
        name: 'School for Little Vampires',
    },
    {
        name: 'Vietnamese Movies & TV',
    },
    {
        name: 'Vietnamese Movies & TV',
    },
    {
        name: 'Marvel Spider-Man: Vexed by Venom',
    },
];

function Search() {
    const [value, setValue] = useState('');
    const [result, setResult] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const query = params.get('q');
        if (query) {
            setValue(query);
        }
    }, [location.search]);

    const debounced = useDebounce(value, 500);

    useEffect(() => {
        if (!debounced.trim()) {
            setResult([]);
            return;
        }

        const fetchAPI = async () => {
            const res = await searchSevice.search(debounced);
            setResult(res);
        };
        fetchAPI();
    }, [debounced]);

    return (
        <div className={cx('container')}>
            <div className={cx('sub-header')}></div>
            {!result.length ? (
                <div className={cx('content')}>
                    <p className={cx('title-error')}>Not Found The Movies</p>
                </div>
            ) : (
                <div className={cx('content')}>
                    <div className={cx('support-list')}>
                        <p className={cx('heading-list')}>More to explore:</p>
                        <div className={cx('list-name')}>
                            {list.map((item, index) => {
                                return (
                                    <div key={index} className={cx('item-name')}>
                                        {item.name}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className={cx('movie-container')}>
                        {result.map((movie, index) => {
                            return <CardMovie key={index} movie={movie} />;
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Search;
