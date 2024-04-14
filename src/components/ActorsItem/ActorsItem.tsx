import {Grid, Typography} from "@mui/material";
import {Actor} from "../../types/movieTypes";

//Информация о конкретном участнике фильма
const ActorsItem = ({actor}: { actor: Actor }) => {

    return (
        <Grid item xs={1} sm={2} md={2} textAlign={"center"}>
            <img src={`${actor.photo}`} alt="Фото"
                 style={{minWidth: '100%', maxWidth: '100%', aspectRatio: '174/275', objectFit: 'cover'}}/>
            <Typography variant={"body2"}>{actor.description}</Typography>
            <Typography variant={"body1"}>{actor.name || actor.enName}</Typography>
            <Typography variant={"body2"} color={"lightgray"}>{actor.profession || actor.enProfession}</Typography>
        </Grid>
    )
}

export default ActorsItem;