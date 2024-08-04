import { useStore } from '~/hooks';
import { contentNewPopular } from '~/data';
import SlideMovieOrder from '~/components/SlideMovieOrder';
import SlideMovie from '~/components/SlideMovie';
import classNames from 'classnames/bind';
import styles from './NewPopular.module.scss';
const cx = classNames.bind(styles);

function NewPopular() {
    const [state] = useStore();
    
    const contentContainer = contentNewPopular(state, SlideMovie, SlideMovieOrder);

    return (
        <div className={cx('container')}>
            <div className={cx('main-content')}>
                {contentContainer.map((item, index) => {
                    return <item.component key={index} item={item} />;
                })}
            </div>
        </div>
    );
}

export default NewPopular;
