import {Button, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import {useAppSelector} from "../../redux/store";
import {useNavigate} from "react-router-dom";

const MovieInfo = () => {
    const navigate = useNavigate();
    const movie = useAppSelector(state => state.movies.selectedMovie);
    const prevLocation = useAppSelector(state => state.movies.location);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    //Возврат на страницу выдачи
    const handleClickToPrevLocation = () => {
        const location = prevLocation.path + prevLocation.queries;

        navigate(location || '/');
    }

    return (
        <Stack spacing={1}>
            <Stack direction={isSmallScreen ? "column-reverse" : "row"} justifyContent={"space-between"}>
                <Typography variant={isSmallScreen ? "h3" : "h2"}>{movie.name || movie.alternativeName || "Без названия"}</Typography>
                <Button onClick={handleClickToPrevLocation}>Назад</Button>
            </Stack>
            <Stack flexDirection={"row"} spacing={0}>
                {
                    movie?.rating?.kp && movie?.rating?.kp !== 0 ?
                    <Typography variant={"body1"} sx={{marginRight: '10px'}}>Кинопоиск: {movie.rating.kp }</Typography>
                        : null
                }
                {
                    movie?.rating?.imdb && movie?.rating?.imdb !== 0 ?
                        <Typography variant={"body1"}>IMDb: {movie.rating.imdb}</Typography>
                        : null
                }
            </Stack>
            <Typography variant={"h4"}>Описание</Typography>
            <Typography variant={"body1"}>
                {movie.description ? movie.description : "Описание отсутствует."}
            </Typography>
        </Stack>
    )
}

export default MovieInfo;