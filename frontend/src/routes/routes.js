import Home from '~/pages/Home';
import TVShows from '~/pages/TVShows';
import Movies from '~/pages/Movies';
import NewPopular from '~/pages/NewPopular';
import MyList from '~/pages/MyList';
import BrowseByLanguages from '~/pages/BrowseByLanguages';

import Login from '~/pages/Login';
import Watch from '~/pages/Watch';
import NotFound from '~/pages/NotFound';

import config from '~/config';

import LoginLayout from '~/layouts/LoginLayout';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.tvshows, component: TVShows },
    { path: config.routes.movies, component: Movies },
    { path: config.routes.newpopular, component: NewPopular },
    { path: config.routes.mylist, component: MyList },
    { path: config.routes.browsebylanguages, component: BrowseByLanguages },


    { path: config.routes.login, component: Login, layout: LoginLayout },
    { path: config.routes.watch, component: Watch, layout: null },

    { path: config.routes.notfound, component: NotFound },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
