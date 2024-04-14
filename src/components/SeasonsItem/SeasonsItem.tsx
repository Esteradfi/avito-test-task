import {Grid, Typography} from "@mui/material";
import {Episode} from "../../types/movieTypes";

//Компонент для каждого эпизода отображаемого сезона
const SeasonsItem = ({episode}: {episode: Episode}) => {

    return (
        <Grid item xs={1} sm={2} md={2}>
            <Typography variant={"body1"}>
                {episode.number}. {episode.enName} {episode.name && `/ ${episode.name}` }
            </Typography>
        </Grid>
    )
}

export default SeasonsItem;