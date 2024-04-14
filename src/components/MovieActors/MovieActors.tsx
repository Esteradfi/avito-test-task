import {Box, Grid, Pagination, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import React from "react";
import {changeCurrentActorsPage} from "../../redux/movies";
import ActorsItem from "../ActorsItem/ActorsItem";
import {Actor} from "../../types/movieTypes";

const MovieActors = () => {
    const dispatch = useAppDispatch();
    const {list: actors, pages, currentPage} = useAppSelector(state => state.movies.selectedMovieActors);

    //Выборка 10 участнико из списка по текущей странице
    const currentActors = actors.slice((currentPage - 1) * 10, currentPage * 10);

    //Обработка каждого участника фильма
    const actorsItems = currentActors.map((actor: Actor) => <ActorsItem key={actor.id + actor.enProfession}
                                                                        actor={actor}/>);

    //Изменение страницы
    const handleChangeCurrentActorsPage = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(changeCurrentActorsPage(value));
    }

    return (
        <Box>
            <Typography variant={"h4"} sx={{marginBottom: '8px'}}>Актёры</Typography>
            {
                !actors ?
                    <Typography>Нет данных об актёрах</Typography>
                    :
                    <>
                        <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 2, sm: 6, md: 10}}>
                            {actorsItems}
                        </Grid>
                        {
                            pages > 1 &&
                            <Pagination count={pages} color={"primary"} page={currentPage}
                                        onChange={handleChangeCurrentActorsPage}
                                        sx={{justifyContent: 'center', display: "flex", marginTop: '20px'}}/>
                        }
                    </>
            }
        </Box>
    )
}

export default MovieActors;