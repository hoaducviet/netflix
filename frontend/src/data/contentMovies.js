const contentMovies = (state, SlideMovie, SlideMovieOrder) => {
    const { movies } = state;
    const { top10movies } = movies;

    const contentContainer = [
        {
            heading: 'Asian Cop Movies',
            data: top10movies,
            component: SlideMovieOrder,
            to: '',
        },
        {
            heading: 'Blockbuster Movies',
            data: top10movies,
            component: SlideMovie,
            to: '',
        },
        {
            heading: 'Thriller Movies',
            data: top10movies,
            component: SlideMovie,
            to: '',
        },
        {
            heading: 'Asian Movies',
            data: top10movies,
            component: SlideMovie,
            to: '',
        },
        {
            heading: 'US Movies',
            data: top10movies,
            component: SlideMovie,
            to: '',
        },
        {
            heading: 'Asian TV Dramas',
            data: top10movies,
            component: SlideMovie,
            to: '',
        },
        {
            heading: "Today's Top Pick for You",
            data: top10movies,
            component: SlideMovie,
            to: '',
        },
        {
            heading: 'New on NetFlix',
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
    ];

    return contentContainer;
};

export default contentMovies;
