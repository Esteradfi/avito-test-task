import {Checkbox, FormControlLabel, Grid, Stack, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../../redux/store";
import {changeCountryList, changeCurrentPage} from "../../../redux/movies";
import Preloader from "../../Preloader/Preloader";

const FilterCountry = () => {
    const dispatch = useAppDispatch();
    const countriesList = useAppSelector(state => state.movies.filters.countriesFilter.list);
    const selectedCountriesList = useAppSelector(state => state.movies.filters.countriesFilter.selectedList);
    const isFetchingParams = useAppSelector(state => state.movies.isFetchingParams);

    //Изменение списка выбранных стран
    const handleChangeCountriesList = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeCountryList(event.target.value));
        dispatch(changeCurrentPage(1));
    }

    //Обработка каждой страны
    const countriesListItems = countriesList.map((el: string) => <FormControlLabel key={el} label={el}
                                                                                   control={<Checkbox value={el}
                                                                                                      checked={selectedCountriesList.indexOf(el) !== -1}
                                                                                                      onChange={handleChangeCountriesList}/>}
    />)

    return (
        <Grid item xs={3} sm={3} md={3}>
            <Typography variant={"body1"} sx={{marginBottom: "10px"}}>
                Страна
            </Typography>
            <Stack sx={{maxHeight: "250px", overflowY: "auto"}}>
                {!isFetchingParams ? countriesListItems : <Preloader />}
            </Stack>
        </Grid>
    )
}

export default FilterCountry;