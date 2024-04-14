import {Accordion, AccordionActions, AccordionSummary, Button, Stack, TextField, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {changeCurrentPage, changeLimit, setNewLimit} from "../../redux/movies";
import {ExpandMore} from "@mui/icons-material";

const Limit = () => {
    const dispatch = useAppDispatch();
    const limit = useAppSelector(state => state.movies.limit);
    const selectedLimit = useAppSelector(state => state.movies.selectedLimit);

    //Изменение значения лимита
    const handleChangeLimit = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeLimit(+event.target.value));
    }

    //Установка значения лимита из input
    const handleSetNewLimit = () => {
        dispatch(changeCurrentPage(1));
        dispatch(setNewLimit());
    }

    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant={"body1"}>
                    Кол-во фильмов на одной странице
                </Typography>
            </AccordionSummary>
            <AccordionActions sx={{justifyContent: "start"}}>
                <Stack spacing={2} direction={"row"}>
                    <TextField
                        label="Лимит"
                        size={"small"}
                        type={"number"}
                        onChange={handleChangeLimit}
                        value={limit}
                    />
                    <Button onClick={handleSetNewLimit} variant={"contained"} disabled={limit === selectedLimit}>
                        Сохранить
                    </Button>
                </Stack>
            </AccordionActions>
        </Accordion>
    )
}

export default Limit;