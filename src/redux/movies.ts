import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {
    Actor,
    FilterResponseData,
    Filters,
    Movie,
    Poster,
    PrevLocation,
    Reviews,
    Season,
    SimilarMovie
} from "../types/movieTypes";
import {
    getFiltersFieldThunk,
    getMovieByIdThunk, getMoviesByNameThunk,
    getMoviesThunk,
    getPostersByIdThunk, getReviewsByIdThunk,
    getSeasonsByIdThunk
} from './asyncQueries';

export interface MoviesState {
    moviesList: Movie[],
    selectedMovie: Movie,
    selectedMovieActors: {
        list: Actor[],
        pages: number,
        currentPage: number
    },
    selectedMovieSeasons: {
        list: Season[],
        seasons: number,
        currentSeason: Season | null
    },
    selectedMoviePosters: Poster[],
    selectedMovieSimilar: SimilarMovie[],
    selectedMovieReviews: Reviews
    filters: Filters,
    location: PrevLocation,
    isFetching: boolean,
    isFetchingParams: boolean,
    limit: number,
    maxLimit: number,
    selectedLimit: number
    currentPage: number,
    pages: number | null,
    searchQuery: string,
    queriesHistory: string[]
}

const initialState: MoviesState = {
    moviesList: [],
    selectedMovie: {
        id: ''
    },
    selectedMovieActors: {
        list: [],
        pages: 1,
        currentPage: 1
    },
    selectedMovieSeasons: {
        list: [],
        seasons: 1,
        currentSeason: null
    },
    selectedMoviePosters: [],
    selectedMovieSimilar: [],
    selectedMovieReviews: {
        list: [],
        pages: 1,
        currentPage: 1
    },
    filters: {
        countriesFilter: {
            list: [],
            selectedList: [],
        },
        yearsFilter: {
            min: '1874',
            max: `2050`,
            selectedMin: '',
            selectedMax: ''
        },
        ageFilter: {
            list: ["0", "6", "12", "16", "18"],
            selectedList: [],
        },
    },
    location: {
        path: '',
        queries: ''
    },
    isFetching: false,
    isFetchingParams: false,
    limit: 10,
    maxLimit: 250,
    selectedLimit: 10,
    currentPage: 1,
    pages: null,
    searchQuery: '',
    queriesHistory: []
}

export const MoviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        changeIsFetching: (state, action: PayloadAction<boolean>) => {
            state.isFetching = action.payload;
        },
        changeIsFetchingParams: (state, action: PayloadAction<boolean>) => {
            state.isFetchingParams = action.payload;
        },
        //Изменение строки поиска
        changeSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;

            //Помещение текущего значения в историю поиска
            if (action.payload !== '' && state.queriesHistory.length < 20 && !state.queriesHistory.includes(action.payload)) {
                state.queriesHistory.push(action.payload);
            } else if (action.payload !== '' && state.queriesHistory.length === 20 && !state.queriesHistory.includes(action.payload)) {
                state.queriesHistory.shift();
                state.queriesHistory.push(action.payload);
            }
        },
        changeCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        //Изменение значения поля для лимита
        changeLimit: (state, action: PayloadAction<number>) => {
            state.limit = +action.payload <= 0 ? 1 : +action.payload > +state.maxLimit ? +state.maxLimit : +action.payload;
        },
        //Изменение кол-ва отображаемых фильмов на странице
        setNewLimit: (state) => {
            state.selectedLimit = state.limit;
        },
        //Изменение минимального года выхода фильма
        changeMinYear: (state, action: PayloadAction<string>) => {
            const min = state.filters.yearsFilter.min;
            const max = state.filters.yearsFilter.max;

            state.filters.yearsFilter.selectedMin = +action.payload <= +min ? min : +action.payload > +max ? max : action.payload;
        },
        //Изменение максимального года выхода фильма
        changeMaxYear: (state, action: PayloadAction<string>) => {
            const min = state.filters.yearsFilter.min;
            const max = state.filters.yearsFilter.max;
            state.filters.yearsFilter.selectedMax = +action.payload > +max ? max : +action.payload <= +min ? min : action.payload;
        },
        //Изменение списка выбранных возрастных категорий
        changeAgeList: (state, action: PayloadAction<string>) => {
            let actionAge = action.payload.split('+').join();
            let indexAge = state.filters.ageFilter.selectedList.indexOf(actionAge);
            if (indexAge !== -1) {
                state.filters.ageFilter.selectedList.splice(indexAge, 1);
            } else {
                state.filters.ageFilter.selectedList.push(actionAge);
            }
        },
        //Изменение списка выбранных стран
        changeCountryList: (state, action: PayloadAction<string>) => {
            let actionCountry = action.payload;
            let indexCountry = state.filters.countriesFilter.selectedList.indexOf(actionCountry);
            if (indexCountry !== -1) {
                state.filters.countriesFilter.selectedList.splice(indexCountry, 1);
            } else {
                state.filters.countriesFilter.selectedList.push(actionCountry);
            }
        },
        //Очистка фильтров
        clearFilters: (state) => {
            state.filters.countriesFilter.selectedList = [];
            state.filters.yearsFilter.selectedMin = '';
            state.filters.yearsFilter.selectedMax = '';
            state.filters.ageFilter.selectedList = [];
        },
        changeCurrentActorsPage: (state, action: PayloadAction<number>) => {
            state.selectedMovieActors.currentPage = action.payload;
        },
        changeCurrentSeason: (state, action: PayloadAction<Season>) => {
            state.selectedMovieSeasons.currentSeason = action.payload;
        },
        //Изменение сохраненной локации (для кнопки "Назад" на странице фильма)
        //Думаю, лучше бы делать это не так, а например, через localStorage, чтобы значение не удалялось после
        // перезагрузки приложения, но я торопился и поэтому "накосячил"
        changeSavedLocation: (state, action: PayloadAction<PrevLocation>) => {
            state.location = action.payload;
        },
        changeCurrentReviewsPage: (state, action: PayloadAction<number>) => {
            state.selectedMovieReviews.currentPage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMoviesThunk.fulfilled, (state, action) => {
                state.moviesList = action.payload?.docs || [];
                state.pages = action.payload?.pages || null;
                state.currentPage = action.payload?.page || 1;
                state.isFetching = false;
            })
            .addCase(getMoviesByNameThunk.fulfilled, (state, action) => {
                state.moviesList = action.payload?.docs || [];
                state.pages = action.payload?.pages || null;
                state.currentPage = action.payload?.page || 1;
                state.isFetching = false;
            })
            .addCase(getFiltersFieldThunk.fulfilled, (state, action) => {
                if (action.payload?.type === 'countries.name') {
                    state.filters.countriesFilter.list = action.payload?.data.map((country: FilterResponseData) => country.name) as string[];
                }
                state.isFetchingParams = false;
            })
            .addCase(getMovieByIdThunk.fulfilled, (state, action) => {
                state.selectedMovie = action.payload;
                state.selectedMovieActors.list = action.payload.persons;
                state.selectedMovieActors.pages = Math.ceil(+action.payload.persons.length / 10);
                state.selectedMovieActors.currentPage = 1;
                state.selectedMovieSimilar = action.payload.similarMovies;

                //Фильтрация для получения списка актеров. Закомментировано, т.к. в ответе именно актеров всегда не более 10.
                //state.selectedMovieActors = action.payload.persons.filter((actor: Actor) => actor.enProfession === "actor");

                state.isFetching = false;
            })
            .addCase(getSeasonsByIdThunk.fulfilled, (state, action) => {
                if (action.payload.docs.length > 0) {
                    state.selectedMovieSeasons.list = action.payload.docs;
                    state.selectedMovieSeasons.list.sort((a: Season, b: Season) => +a.number - +b.number);
                    +state.selectedMovieSeasons.list[0].number === 0 && state.selectedMovieSeasons.list.forEach((season: Season) => season.number++);
                    state.selectedMovieSeasons.seasons = action.payload.docs.length;
                    state.selectedMovieSeasons.currentSeason = state.selectedMovieSeasons.list[0];
                }
            })
            .addCase(getPostersByIdThunk.fulfilled, (state, action) => {
                state.selectedMoviePosters = action.payload.docs;
            })
            .addCase(getReviewsByIdThunk.fulfilled, (state, action) => {
                state.selectedMovieReviews.list = action.payload?.docs || [];
                state.selectedMovieReviews.pages = action.payload?.pages || 1;
                state.selectedMovieReviews.currentPage = action.payload?.page || 1;
            })
    }
})

export default MoviesSlice.reducer;

export const {
    changeSearchQuery,
    changeLimit,
    setNewLimit,
    changeMinYear,
    changeMaxYear,
    changeAgeList,
    changeCountryList,
    changeCurrentPage,
    clearFilters,
    changeIsFetching,
    changeIsFetchingParams,
    changeCurrentActorsPage,
    changeCurrentSeason,
    changeSavedLocation,
    changeCurrentReviewsPage
} = MoviesSlice.actions;