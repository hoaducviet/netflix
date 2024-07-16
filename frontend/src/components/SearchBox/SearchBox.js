import { useState, useRef, useEffect } from 'react';

import classNames from 'classnames/bind';
import styles from './SearchBox.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function SearchBox() {
    const [isSearched, setIsSearched] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const inputRef = useRef();

    const handleSearch = () => {
        setIsSearched(true);
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleDelete = () => {
        setSearchValue('');
        inputRef.current.focus();
    };
    const searchInputRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchInputRef.current && !searchInputRef.current.contains(event.target)) {
                setIsSearched(false);
                setSearchValue('');
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    });

    return (
        <>
            <div className={cx('search-box')}>
                {!isSearched ? (
                    <button className={cx('search-tab')}>
                        <FontAwesomeIcon className={cx('search-icon')} onClick={handleSearch} icon={faSearch} />
                    </button>
                ) : (
                    <div ref={searchInputRef} className={cx('search-input')}>
                        <button className={cx('search-link')}>
                            <FontAwesomeIcon className={cx('search-input-icon')} icon={faSearch} />
                            <input
                                ref={inputRef}
                                value={searchValue}
                                onChange={handleChange}
                                type="text"
                                placeholder="Movies, actors, genres,..."
                                className={cx('input-icon')}
                            />
                            {!!searchValue && (
                                <FontAwesomeIcon className={cx('delete-icon')} onClick={handleDelete} icon={faXmark} />
                            )}
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}

export default SearchBox;
