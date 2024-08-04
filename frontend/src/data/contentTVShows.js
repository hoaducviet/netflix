const contentTVShows = (state, SlideMovie, SlideMovieOrder) => {
    const { tvshows } = state;
    const { top10tvshows } = tvshows;

    const contentContainer = [
        {
            heading: 'Top 10 TV Shows in Vietnam Today',
            data: top10tvshows,
            component: SlideMovieOrder,
            to: '',
        },
        {
            heading: 'Continue Watching for You',
            data: top10tvshows,
            component: SlideMovie,
            to: '',
        },
        {
            heading: 'Emotional Chinese TV Shows',
            data: top10tvshows,
            component: SlideMovie,
            to: '',
        },
        {
            heading: 'Romantic Korean TV Comedies',
            data: top10tvshows,
            component: SlideMovie,
            to: '',
        },
        {
            heading: 'US TV Shows',
            data: top10tvshows,
            component: SlideMovie,
            to: '',
        },
        {
            heading: 'Asian TV Dramas',
            data: top10tvshows,
            component: SlideMovie,
            to: '',
        },
        {
            heading: "Today's Top Pick for You",
            data: top10tvshows,
            component: SlideMovie,
            to: '',
        },
        {
            heading: 'New on NetFlix',
            data: top10tvshows,
            component: SlideMovie,
            to: '',
        },
        {
            heading: 'My List',
            data: top10tvshows,
            component: SlideMovie,
            to: '',
        },
    ];

    return contentContainer;
};

export default contentTVShows;
