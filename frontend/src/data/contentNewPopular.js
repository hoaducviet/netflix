const contentNewPopular = (state, SlideMovie, SlideMovieOrder) => {
    const { tvshows, movies, newpopular } = state;
    const { newonnetfilx, comingthisweek, comingnextweek, worththewait } = newpopular;
    const { top10tvshows } = tvshows;
    const { top10movies } = movies;

    const contentContainer = [
        {
            heading: 'New on Netlix',
            data: newonnetfilx,
            component: SlideMovie,
            to: '',
        },
        {
            heading: 'Top 10 TV Shows in Vietnam Today',
            data: top10tvshows,
            component: SlideMovieOrder,
            to: '',
        },
        {
            heading: 'Top 10 Movies in Vietnam Today',
            data: top10movies,
            component: SlideMovieOrder,
            to: '',
        },
        {
            heading: 'Coming Next Week',
            data: comingnextweek,
            component: SlideMovie,
            to: '',
        },
        {
            heading: 'Worth the Wait',
            data: worththewait,
            component: SlideMovie,
            to: '',
        },
        {
            heading: 'Coming This Week',
            data: comingthisweek,
            component: SlideMovie,
            to: '',
        },
    ];

    return contentContainer;
};

export default contentNewPopular;
