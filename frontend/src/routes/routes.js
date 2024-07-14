import Home from '~/pages/Home';
import TVShows from '~/pages/TVShows';
import Movies from '~/pages/Movies';
import NewPopular from '~/pages/NewPopular';
import MyList from '~/pages/MyList';
import BrowseByLanguages from '~/pages/BrowseByLanguages';
import NotFound from '~/pages/NotFound';

const routes = {
    home: '/',
    tvshows: '/tvshows',
    movies: '/movies',
    newpopular: '/new-popular',
    mylist: '/mylist',
    browsebylanguages: '/browse-by-languages',
    notfound: '*',
};

const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.tvshows, component: TVShows },
    { path: routes.movies, component: Movies },
    { path: routes.newpopular, component: NewPopular },
    { path: routes.mylist, component: MyList },
    { path: routes.browsebylanguages, component: BrowseByLanguages },
    { path: routes.notfound, component: NotFound },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
