import Header from './Header';
import Footer from './Footer';

import styles from './DefaultLayout.module.scss';

function DefaultLayout({ children }) {
    return (
        <div className='container'>
            <Header />
            <div className="content">{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
