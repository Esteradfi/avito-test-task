import {Grid, Stack, TextField, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../../redux/store";
import {changeCurrentPage, changeMaxYear, changeMinYear} from "../../../redux/movies";

const FilterYears = () => {
    const dispatch = useAppDispatch();
    const selectedMin = useAppSelector(state => state.movies.filters.yearsFilter.selectedMin);
    const selectedMax = useAppSelector(state => state.movies.filters.yearsFilter.selectedMax);

    //Изменение минимального года выхода фильма
    const handleChangeMinYear = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMinYear(event.target.value));
        dispatch(changeCurrentPage(1));
    }

    //Изменение максимального года выпуска фильма
    const handleChangeMaxYear = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMaxYear(event.target.value));
        dispatch(changeCurrentPage(1));
    }

    //Если бы оставалось время, я бы сделал валидацию с отображением ошибок, т.к. сейчас этот фильтр работает
    //неудобно для пользователя, но времени не осталось, поэтому пусть работает хотя бы так

    return (
        <Grid item xs={3} sm={3} md={3}>
            <Typography variant={"body1"} sx={{marginBottom: "10px"}}>
                Год
            </Typography>
            <Stack direction={"row"}>
                <TextField type={"number"} value={selectedMin} onChange={handleChangeMinYear} label={"От"}/>
                <TextField type={"number"} value={selectedMax} onChange={handleChangeMaxYear} label={"До"}/>
            </Stack>
        </Grid>
    )
}

export default FilterYears;