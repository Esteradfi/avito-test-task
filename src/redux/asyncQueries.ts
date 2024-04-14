import {createAsyncThunk} from "@reduxjs/toolkit";
import $api from "../api";
import qs from "qs";

//Запрос на получение фильмов по фильтрам (и без них)
export const getMoviesThunk = createAsyncThunk(
    'movies/getMovies',
    async ({
               page,
               limit,
               ageRating,
               countries,
               year
           }: { page?: number, limit?: number, ageRating?: string[], countries?: string[], year?: string } = {}) => {
        try {
            const params: any = {
                page,
                limit,
                selectFields: ['id', 'name', 'alternativeName', 'poster']
            };

            if (ageRating && ageRating.length > 0) {
                params['ageRating'] = ageRating;
            }

            if (countries && countries.length > 0) {
                params['countries.name'] = countries;
            }

            if (year) {
                params['year'] = year;
            }

            const response = await $api.get(`/v1.4/movie`, {
                paramsSerializer: (params) => {
                    return qs.stringify(params, {arrayFormat: 'repeat'});
                },
                params
            });
            return response.data;
        } catch (err: any) {
            alert(err.response.data.message);
        }
    }
)

//Запрос на получение фильмов по названию
export const getMoviesByNameThunk = createAsyncThunk(
    'movies/getMoviesByName',
    async ({query, page, limit}: { query?: string, page?: number, limit?: number } = {}) => {
        try {
            const response = await $api.get(`/v1.4/movie/search`, {
                params: {
                    query,
                    page,
                    limit,
                },
            });
            console.log(response.data);
            return response.data;
        } catch (err: any) {
            alert(err.response.data.message);
        }
    }
)

//Запрос на получение конкретного фильма по его id
export const getMovieByIdThunk = createAsyncThunk(
    'movies/getMovieById',
    async (id: string) => {
        try {
            const response = await $api.get(`/v1.4/movie/${id}`);
            return response.data;
        } catch (err: any) {
            alert(err.response.data.message);
        }
    }
)

//Запрос на получение сезонов сериала по id
export const getSeasonsByIdThunk = createAsyncThunk(
    'movies/getSeasonById',
    async (movieId: string) => {
        try {
            const response = await $api.get(`/v1.4/season`, {
                params: {
                    movieId,
                    notNullFields: 'airDate',
                    selectFields: ['airDate', 'name', 'enName', 'number', 'episodes'],
                    limit: 250
                },
                paramsSerializer: (params) => {
                    return qs.stringify(params, {arrayFormat: 'repeat'});
                },
            });
            return response.data;
        } catch (err: any) {
            alert(err.response.data.message);
        }
    }
);

//Запрос на получение постеров фильма по id
export const getPostersByIdThunk = createAsyncThunk(
    'movies/getPostersById',
    async (movieId: string) => {
        try {
            const response = await $api.get(`/v1.4/image`, {
                params: {
                    movieId,
                    type: 'cover',
                    selectFields: ['url', 'previewUrl'],
                },
                paramsSerializer: (params) => {
                    return qs.stringify(params, {arrayFormat: 'repeat'});
                },
            });
            return response.data;
        } catch (err: any) {
            alert(err.response.data.message);
        }
    }
)

//Запрос на получение отзывов на фильм по его id (с пагинацией)
export const getReviewsByIdThunk = createAsyncThunk(
    'movies/getReviewsById',
    async ({movieId, page}: { movieId: string, page?: number }) => {
        try {
            const response = await $api.get(`/v1.4/review`, {
                params: {
                    movieId,
                    page,
                    selectFields: ['id', 'title', 'type', 'review', 'author'],
                },
                paramsSerializer: (params) => {
                    return qs.stringify(params, {arrayFormat: 'repeat'});
                },
            });
            return response.data;
        } catch (err: any) {
            alert(err.response.data.message);
        }
    }
)

//Запрос на получение списка для фильтров
//(т.к. не успел сделать страницу со случайным фильмом, используется только для получения стран)
export const getFiltersFieldThunk = createAsyncThunk(
    'movies/getFiltersField',
    async (field: string) => {
        try {
            const response = await $api.get(`/v1/movie/possible-values-by-field`, {
                params: {
                    field
                }
            });
            return {
                type: field,
                data: [...response.data]
            };
        } catch (err: any) {
            alert(err.response.data.message);
        }
    }
)