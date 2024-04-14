import {Accordion, AccordionActions, AccordionDetails, AccordionSummary, Button, Grid, Typography} from "@mui/material";
import {ExpandMore} from "@mui/icons-material";
import FilterAge from "./FilterAge/FilterAge";
import FilterYears from "./FilterYears/FilterYears";
import FilterCountry from "./FilterCountry/FilterCountry";
import {useAppDispatch} from "../../redux/store";
import {clearFilters} from "../../redux/movies";


const Filters = () => {
    const dispatch = useAppDispatch();

    //Очистка фильтров
    const handleClearFilters = () => {
        dispatch(clearFilters());
    }

    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant={"body1"}>
                    Фильтры
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Grid container spacing={{xs: 1, md: 3}} columns={{xs: 3, sm: 6, md: 9}}>
                    <FilterYears />
                    <FilterAge />
                    <FilterCountry />
                </Grid>
            </AccordionDetails>
            <AccordionActions>
                <Button onClick={handleClearFilters}>
                    Сбросить фильтры
                </Button>
            </AccordionActions>
        </Accordion>
    )
}

export default Filters;