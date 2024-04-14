import {Box, Typography, useMediaQuery, useTheme} from "@mui/material";
import {useAppSelector} from "../../redux/store";
import MovieItem from "../MovieItem/MovieItem";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {SimilarMovie} from "../../types/movieTypes";

const SimilarMovies = () => {
    const similarMovies = useAppSelector(state => state.movies.selectedMovieSimilar);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    //Настройки карусели
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: isSmallScreen ? 2 : 5,
        slidesToScroll: 1,
        autoplay: !isSmallScreen && similarMovies.length >= 5 ? true : isSmallScreen && similarMovies.length >= 2,
        autoplaySpeed: 2000,
    };

    //Обработка каждого фильма
    const similarMoviesItems = similarMovies && similarMovies.map((movie: SimilarMovie) => <MovieItem key={movie.id}
                                                                                                      movie={movie}/>)

    return (
        <Box>
            <Typography variant={"h4"} sx={{marginBottom: '8px'}}>Похожие фильмы</Typography>
            {
                similarMovies && similarMovies.length !== 0 ?
                    <Slider {...settings}>
                        {similarMoviesItems}
                    </Slider>
                    :
                    <Typography variant={"body1"}>Похожих фильмов не найдено.</Typography>
            }
        </Box>
    )
}

export default SimilarMovies;