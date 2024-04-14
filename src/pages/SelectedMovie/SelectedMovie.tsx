import {Stack} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import {
    changeIsFetching,
} from "../../redux/movies";
import Preloader from "../../components/Preloader/Preloader";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import MovieActors from "../../components/MovieActors/MovieActors";
import MovieSeasons from "../../components/MovieSeasons/MovieSeasons";
import SimilarMovies from "../../components/SimilarMovies/SimilarMovies";
import MoviePosters from "../../components/MoviePosters/MoviePosters";
import MovieReviews from "../../components/MovieReviews/MovieReviews";
import {getMovieByIdThunk, getPostersByIdThunk, getReviewsByIdThunk, getSeasonsByIdThunk} from "../../redux/asyncQueries";

const SelectedMovie = () => {
    const dispatch = useAppDispatch();
    const isFetching = useAppSelector(state => state.movies.isFetching);
    const movie = useAppSelector(state => state.movies.selectedMovie);
    const id = useLocation().pathname.split('/')[2];

    //Отправка запросов на получение данных о конкретном фильме
    useEffect(() => {
        dispatch(getMovieByIdThunk(id));
        dispatch(getSeasonsByIdThunk(id));
        dispatch(getPostersByIdThunk(id));
        dispatch(getReviewsByIdThunk({movieId: id}));
        dispatch(changeIsFetching(true));
    }, [id, dispatch])

    return (
        <>
            {!isFetching ?
                <Stack spacing={2}>
                    <MovieInfo />
                    <MovieActors />
                    {movie.isSeries && <MovieSeasons />}
                    <MoviePosters />
                    <SimilarMovies />
                    <MovieReviews />
                </Stack> :
                <Preloader />
            }
        </>
    )
}

export default SelectedMovie;