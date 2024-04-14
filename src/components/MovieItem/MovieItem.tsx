import {Link, useLocation} from "react-router-dom";
import {Grid, Typography} from "@mui/material";
import styles from "./MovieItem.module.css";
import emptyImage from "./../../assets/image/emptyPoster.jpg";
import {changeSavedLocation} from "../../redux/movies";
import {useAppDispatch} from "../../redux/store";
import {Movie} from "../../types/movieTypes";

const MovieItem = ({movie}: { movie: Movie }) => {
    const dispatch = useAppDispatch();
    const location = useLocation();

    //Сохраняем путь, но только если переход выполняется со страницы выдачи
    const handleChangeLocation = () => {
        const data = {
            path: location.pathname,
            queries: location.search
        }

        if (data.path === '/') {
            dispatch(changeSavedLocation(data));
        }
    }

    return (
        <Grid item xs={1} sm={2} md={2}>
            <Link to={`/movies/${movie.id}`} onClick={handleChangeLocation} className={styles.link}>
                <img src={movie.poster?.previewUrl || movie.poster?.url || `${emptyImage}`} alt="Постер"
                     className={styles.image}/>
                <Typography variant={"body1"}>{movie.name || movie.alternativeName}</Typography>
            </Link>
        </Grid>
    )
};

export default MovieItem;