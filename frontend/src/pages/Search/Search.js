import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useDebounce } from '~/hooks';

import * as SearchService from '~/services/SearchService';

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

const suggest = [
    { decrible: 'Try different keywords' },
    { decrible: 'Looking for a movie or TV show?' },
    { decrible: 'Try using a movie, TV show title, an actor or director' },
    { decrible: 'Try a genre, like comedy, romance, sports, or drama' },
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
            const res = await SearchService.search(debounced);

            if (res.data) {
                setResult(res.data);
            }
        };
        fetchAPI();
    }, [debounced]);

    return (
        <div className={cx('container')}>
            <div className={cx('sub-header')}></div>
            {!result.length ? (
                <div className={cx('text-container')}>
                    <div className={cx('text-error')}>
                        <p className={cx('title-error')}>{`Your search for "${value}" did not have any matches`}</p>
                        <p className={cx('title-error')}>Suggestions:</p>
                        {suggest.map((item, index) => {
                            return <li key={index}>{item.decrible}</li>;
                        })}
                    </div>
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
