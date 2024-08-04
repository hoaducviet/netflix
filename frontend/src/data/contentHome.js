const contentHome = (state, SlideMovie, SlideMovieOrder) => {
    const { tvshows, movies, newpopular, currentUser } = state;
    const { top10movies } = movies;

    const contentContainer = [
        {
            heading: 'Top 10 TV Shows in Vietnam Today',
            data: top10movies,
            component: SlideMovieOrder,
            to: '/home',
        },
        {
            heading: 'Continue Watching for You',
            data: top10movies,
            component: SlideMovie,
            to: '',
        },
        {
            heading: 'Made in Korea',
            data: top10movies,
            component: SlideMovie,
            to: '',
        },
        {
            heading: 'Blockbuster Movies',
            data: top10movies,
            component: SlideMovie,
            to: '',
        },
        {
            heading: 'Only on Netflix',
            data: top10movies,
            component: SlideMovie,
            to: '',
        },
        {
            heading: 'Top 10 Movies in Vietnam Today',
            data: top10movies,
            component: SlideMovieOrder,
            to: '',
        },
        {
            heading: "Today's Top Picks for You",
            data: top10movies,
            component: SlideMovie,
            to: '',
        },
        {
            heading: 'Chinese Movies & TV',
            data: top10movies,
            component: SlideMovie,
            to: '',
        },
        {
            heading: 'US TV Shows',
            data: top10movies,
            component: SlideMovie,
            to: '',
        },
        {
            heading: 'New on Netflix',
            data: top10movies,
            component: SlideMovie,
            to: '',
        },
        {
            heading: 'TV Comedies',
            data: top10movies,
            component: SlideMovie,
            to: '',
        },
        {
            heading: 'My List',
            data: top10movies,
            component: SlideMovie,
            to: '',
        },
        {
            heading: 'Romantic Korean TV Comedies',
            data: top10movies,
            component: SlideMovie,
            to: '',
        },
        {
            heading: 'Anime',
            data: top10movies,
            component: SlideMovie,
            to: '',
        },
        {
            heading: 'Suspenseful TV Shows',
            data: top10movies,
            component: SlideMovie,
            to: '',
        },
    ];

    return contentContainer;
};

export default contentHome;
