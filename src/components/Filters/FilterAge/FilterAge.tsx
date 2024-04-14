import {Checkbox, FormControlLabel, Grid, Stack, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../../redux/store";
import {changeAgeList, changeCurrentPage} from "../../../redux/movies";

const FilterAge = () => {
    const dispatch = useAppDispatch();
    const ageList = useAppSelector(state => state.movies.filters.ageFilter.list);
    const selectedAgeList = useAppSelector(state => state.movies.filters.ageFilter.selectedList);

    //Изменения списка выбранных возрастных рейтингов
    const handleChangeAgeList = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeAgeList(event.target.value));
        dispatch(changeCurrentPage(1));
    }

    //Обработка каждого возрастного рейтинга
    const ageListItems = ageList.map((el: string) => <FormControlLabel key={el} label={`${el}+`}
                                                                       control={<Checkbox value={el}
                                                                                          checked={selectedAgeList.indexOf(el.split('+').join()) !== -1}
                                                                                          onChange={handleChangeAgeList}/>}
    />)

    return (
        <Grid item xs={3} sm={3} md={3}>
            <Typography variant={"body1"} sx={{marginBottom: "10px"}}>
                Возрастной рейтинг
            </Typography>
            <Stack>
                {ageListItems}
            </Stack>
        </Grid>
    )
}

export default FilterAge;