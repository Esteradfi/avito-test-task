import {Box, Pagination, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import React from "react";
import {changeCurrentReviewsPage} from "../../redux/movies";
import ReviewsItem from "../ReviewsItem/ReviewsItem";
import {Review} from "../../types/movieTypes";
import {getReviewsByIdThunk} from "../../redux/asyncQueries";

const MovieReviews = () => {
    const dispatch = useAppDispatch();
    const movieId = useAppSelector(state => state.movies.selectedMovie.id);
    const {list: reviews, pages, currentPage} = useAppSelector(state => state.movies.selectedMovieReviews);

    //Обработка каждого отзыва
    const reviewsItems = reviews.map((review: Review) => <ReviewsItem review={review} key={review.id}/>);

    //Изменение страницы и отправка запроса на получение отзывов
    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        const data = {
            movieId,
            page: value
        }

        dispatch(changeCurrentReviewsPage(value));
        dispatch(getReviewsByIdThunk(data));
    }

    return (
        <Box>
            <Typography variant={"h4"} sx={{marginBottom: '8px'}}>Отзывы</Typography>
            {reviews && reviews.length > 0 ?
                <>
                    <Box>
                        {reviewsItems}
                    </Box>
                    {pages && pages > 1 &&
                        <Pagination count={pages} page={currentPage} onChange={handleChangePage} color={"primary"}
                                    sx={{justifyContent: 'center', display: "flex", marginTop: '20px'}}/>
                    }
                </>
                :
                <Typography variant={"body1"}>Отзывов не найдено.</Typography>
            }
        </Box>
    )
}

export default MovieReviews;