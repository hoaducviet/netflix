import Button from '~/components/Button';
import InputForm from '~/components/InputForm';
import AskedQuestions from '~/components/AskedQuestions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import frames from '~/assets/frames';
import medias from '~/assets/medias';

import classNames from 'classnames/bind';
import styles from './Intro.module.scss';

const cx = classNames.bind(styles);

const item = {
    content: 'Get Started',
    color: 'getstarted',
    rightIcon: <FontAwesomeIcon icon={faChevronRight} />,
};

const questions = [
    {
        title: 'What is Netflix?',
        content: (
            <span>
                Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime,
                documentaries, and more on thousands of internet-connected devices.
                <br />
                <br />
                You can watch as much as you want, whenever you want without a single commercial - all for one low
                monthly price. There's always something new to discover and new TV shows and movies are added every
                week!
            </span>
        ),
    },
    {
        title: 'How much does Netflix cost?',
        content: (
            <span>
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed
                monthly fee. Plans range from 70,000 ₫ to 260,000 ₫ a month. No extra costs, no contracts.
            </span>
        ),
    },
    {
        title: 'Where can I watch?',
        content: (
            <span>
                Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com
                from your personal computer or on any internet-connected device that offers the Netflix app, including
                smart TVs, smartphones, tablets, streaming media players and game consoles.
                <br />
                <br />
                You can also download your favorite shows with the iOS or Android app. Use downloads to watch while
                you're on the go and without an internet connection. Take Netflix with you anywhere.
            </span>
        ),
    },
    {
        title: 'How do I cancel?',
        content: (
            <span>
                Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account
                online in two clicks. There are no cancellation fees - start or stop your account anytime.
            </span>
        ),
    },
    {
        title: 'What can I watch on Netflix?',
        content: (
            <span>
                Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix
                originals, and more. Watch as much as you want, anytime you want.
            </span>
        ),
    },
    {
        title: 'Is Netflix good for kids?',
        content: (
            <span>
                The Netflix Kids experience is included in your membership to give parents control while kids enjoy
                family-friendly TV shows and movies in their own space.
                <br />
                <br />
                Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of
                content kids can watch and block specific titles you don't want kids to see.
            </span>
        ),
    },
];
function Intro() {
    const styleImage = {
        backgroundImage: `url(${medias.download})`,
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('signup')}>
                    <p className={cx('text-infor')}>Unlimited movies, TV shows, and more</p>
                    <p className={cx('text-detail')}>Watch anywhere. Cancel anytime.</p>
                    <form className={cx('group-signup')}>
                        <p className={cx('group-signup-text')}>
                            Ready to watch? Enter your email to create or restart your membership.
                        </p>
                        <div className={cx('group-button')}>
                            <div className={cx('email-button')}>
                                <InputForm label={'Email address'} />
                            </div>
                            <div className={cx('start-button')}>
                                <Button item={item} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className={cx('space')}></div>
            <div className={cx('content')}>
                <div className={cx('enjoy-tv')}>
                    <div className={cx('detail-enjoy')}>
                        <p className={cx('detail-title')}>Enjoy on your TV</p>
                        <p className={cx('detail-content')}>
                            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
                        </p>
                    </div>
                    <div className={cx('media-enjoy')}>
                        <img src={frames.tv} alt="tv" className={cx('image-tv')} />
                        <div className={cx('media-video')}>
                            <video autoPlay playsInline muted loop>
                                <source src={medias.tv} />
                            </video>
                        </div>
                    </div>
                </div>
                <div className={cx('space')}></div>
                <div className={cx('download')}>
                    <div className={cx('media-download')}>
                        <img src={frames.mobile} alt="tv" className={cx('image-mobile')} />
                        <div className={cx('media-actions')}>
                            <div className={cx('media-movie')}>
                                <img src={medias.moviephone} alt="image-movie" className={cx('image-movie')} />
                            </div>
                            <div className={cx('media-detail-movie')}>
                                <div className={cx('name-movie')}>Stranger Things</div>
                                <div className={cx('downloading-movie')}>Downloading...</div>
                            </div>
                            <div style={styleImage} className={cx('media-action-download')}></div>
                        </div>
                    </div>
                    <div className={cx('detail-download')}>
                        <p className={cx('detail-title-download')}>Download your shows to watch offline</p>
                        <p className={cx('detail-content-download')}>
                            Save your favorites easily and always have something to watch.
                        </p>
                    </div>
                </div>
                <div className={cx('space')}></div>
                <div className={cx('watch-every')}>
                    <div className={cx('detail-watch')}>
                        <p className={cx('detail-title-watch')}>Watch everywhere</p>
                        <p className={cx('detail-content-watch')}>
                            Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                        </p>
                    </div>
                    <div className={cx('media-watch')}>
                        <img src={frames.device} alt="device" className={cx('image-device')} />
                        <div className={cx('media-video-watch')}>
                            <video className={cx('video-watch')} autoPlay playsInline muted loop>
                                <source src={medias.device} />
                            </video>
                        </div>
                    </div>
                </div>
                <div className={cx('space')}></div>
                <div className={cx('create-profile')}>
                    <div className={cx('media-profile')}>
                        <img src={medias.kids} alt="kids" className={cx('image-kids')} />
                    </div>
                    <div className={cx('detail-profile')}>
                        <p className={cx('detail-title-profile')}>Create profiles for kids</p>
                        <p className={cx('detail-content-profile')}>
                            Send kids on adventures with their favourite characters in a space made just for them - free
                            with your membership.
                        </p>
                    </div>
                </div>
                <div className={cx('space')}></div>
                <div className={cx('asked-questions')}>
                    <div className={cx('question')}>
                        <p className={cx('asked-title')}>Frequently Asked Questions</p>
                        <div className={cx('any-questions')}>
                            {questions.map((item, index) => {
                                return <AskedQuestions key={index} item={item} />;
                            })}
                        </div>
                        <div className={cx('getstarted')}>
                            <form className={cx('group-signup')}>
                                <p className={cx('group-signup-text')}>
                                    Ready to watch? Enter your email to create or restart your membership.
                                </p>
                                <div className={cx('group-button')}>
                                    <div className={cx('email-button')}>
                                        <InputForm label={'Email address'} />
                                    </div>
                                    <div className={cx('start-button')}>
                                        <Button item={item} />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className={cx('space')}></div>
            </div>
        </div>
    );
}

export default Intro;
