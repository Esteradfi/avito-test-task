import {Box, Typography, useMediaQuery, useTheme} from "@mui/material";
import {useAppSelector} from "../../redux/store";
import styles from "./MoviePosters.module.css";
import Slider from "react-slick";
import {Poster} from "../../types/movieTypes";

const MoviePosters = () => {
    const posters = useAppSelector(state => state.movies.selectedMoviePosters);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    //Настройки слайдера
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: isSmallScreen ? 2 : 5,
        slidesToScroll: 1,
        autoplay: !isSmallScreen && posters.length >= 5 ? true : isSmallScreen && posters.length >= 2,
        autoplaySpeed: 2000,
    };

    //Обработка каждого постера
    const postersItems = posters && posters.map((poster: Poster) => <img src={`${poster.previewUrl || poster.url}`}
                                                                         alt="Постер" className={styles.image}
                                                                         key={poster.id}/>)

    return (
        <Box>
            <Typography variant={"h4"} sx={{marginBottom: '8px'}}>Постеры</Typography>
            {
                posters && posters.length !== 0 ?
                    <Slider {...settings}>
                        {postersItems}
                    </Slider>
                    :
                    <Typography variant={"body1"}>Постеров не найдено.</Typography>
            }
        </Box>
    )
}

export default MoviePosters;