import {Box, Grid, Pagination, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import React from "react";
import {changeCurrentSeason} from "../../redux/movies";
import SeasonsItem from "../SeasonsItem/SeasonsItem";
import {Episode} from "../../types/movieTypes";

const MovieSeasons = () => {
    const dispatch = useAppDispatch();
    const {list: seasonsList, seasons, currentSeason} = useAppSelector(state => state.movies.selectedMovieSeasons);

    const seasonsListItems = currentSeason && currentSeason.episodes.map((episode: Episode) => <SeasonsItem key={episode.airDate + episode.enName} episode={episode} />);

    const handleChangeCurrentSeason = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(changeCurrentSeason(seasonsList[value-1]));
    }

    return (
        <Box>
            <Typography variant={"h5"}>Сезоны</Typography>
            <Typography variant={"subtitle1"}>{currentSeason && currentSeason.enName || currentSeason && currentSeason.name}</Typography>
            <Grid container spacing={{xs: 1, md: 2}} columns={{xs: 2, sm: 6, md: 10}} direction={"column"}>
                {seasonsListItems}
            </Grid>
            {
                seasons > 1 &&
                <Pagination count={seasons} color={"primary"} page={currentSeason?.number}
                            onChange={handleChangeCurrentSeason}
                            sx={{justifyContent: 'center', display: "flex", marginTop: '20px'}}/>
            }
        </Box>
    )
}

export default MovieSeasons;