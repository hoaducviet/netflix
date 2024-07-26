import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './LanguagesBox.module.scss';

const cx = classNames.bind(styles);

function LanguagesBox({ languages }) {
    return (
        <button className={cx('container')}>
            <div className={cx('languages-icon')}>
                <FontAwesomeIcon icon={faLanguage} className={cx('icon')}/>
            </div>
            <select className={cx('languages-options')}>
                {languages.map((language, index) => {
                    return <option className={cx('options')} key={language.symbol}>{language.name}</option>;
                })}
            </select>
        </button>
    );
}

export default LanguagesBox;
