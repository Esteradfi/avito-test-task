import {Box, Grid, Pagination, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {changeCurrentPage, changeIsFetching} from "../../redux/movies";
import React, {useEffect} from "react";
import MovieItem from "../../components/MovieItem/MovieItem";
import Search from "../../components/Search/Search";
import Limit from "../../components/Limit/Limit";
import Filters from "../../components/Filters/Filters";
import {useNavigate} from "react-router-dom";
import {stringifyParams} from "../../utils/StringifyParams";
import Preloader from "../../components/Preloader/Preloader";
import {getMoviesByNameThunk, getMoviesThunk} from "../../redux/asyncQueries";

const Movies = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const isFetching = useAppSelector(state => state.movies.isFetching);
    const moviesList = useAppSelector(state => state.movies.moviesList);
    const pages = useAppSelector(state => state.movies.pages);
    const currentPage = useAppSelector(state => state.movies.currentPage);
    const searchQuery = useAppSelector(state => state.movies.searchQuery);
    const limit = useAppSelector(state => state.movies.selectedLimit);
    const ageRating = useAppSelector(state => state.movies.filters.ageFilter.selectedList);
    const years = useAppSelector(state => state.movies.filters.yearsFilter);
    const countries = useAppSelector(state => state.movies.filters.countriesFilter.selectedList);

    useEffect(() => {
        //Если работаем с поиском по названию
        if (searchQuery) {
            const data = {
                page: currentPage,
                query: searchQuery,
                limit: limit,
            }
            navigate(`${stringifyParams(data)}`);
            dispatch(getMoviesByNameThunk(data));
            dispatch(changeIsFetching(true));
        } else {
        //Если работаем с получением по фильтрам
            const data = {
                page: currentPage,
                limit: limit,
                ageRating: ageRating,
                year: years.selectedMin && years.selectedMax ? `${years.selectedMin}-${years.selectedMax}` : '',
                countries: countries
            };

            navigate(`${stringifyParams(data)}`);
            dispatch(getMoviesThunk(data));
            dispatch(changeIsFetching(true));
        }
    }, [limit, ageRating, years, countries, searchQuery, currentPage, dispatch, navigate])

    //Обработка каждого полученного фильма
    const moviesListItems = moviesList ? moviesList.filter((movie) => movie.id).map((movie) => <MovieItem key={movie.id} movie={movie}/>) : [];

    //Изменение страницы в пагинации
    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(changeCurrentPage(value));
    }

    return (
        <Box component={"section"} display={"flex"} justifyContent={"center"} flexDirection={"column"}>
            <Search/>
            <Box marginBottom={"20px"}>
                {/* Фильтры не отображаются, если выполнен поиск по имени, т.к. используются разные запросы */}
                {searchQuery === '' && <Filters/>}
                <Limit/>
            </Box>
            {
                !isFetching ?
                    <>
                        <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 2, sm: 6, md: 10}}>
                            {moviesList.length ? moviesListItems :
                                <Typography variant={"body1"} sx={{margin: "30px auto"}}>По вашему запросу не найдено фильмов</Typography>}
                        </Grid>
                        {pages &&
                            <Pagination count={pages} page={currentPage} onChange={handleChangePage} color={"primary"}
                                        sx={{margin: '0 auto'}}/>
                        }
                    </> :
                    <Preloader/>
            }
        </Box>
    )
}

export default Movies;