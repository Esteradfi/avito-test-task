import { Autocomplete, Box, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
    changeCurrentPage,
    changeSearchQuery,
    clearFilters,
} from "../../redux/movies";

const Search = () => {
    const dispatch = useAppDispatch();
    const limit = useAppSelector(state => state.movies.limit);
    const searchQuery = useAppSelector(state => state.movies.searchQuery);
    const queriesHistory = useAppSelector(state => state.movies.queriesHistory);

    let timeoutId: NodeJS.Timeout | null = null;

    //Отправка запроса по названию (задержка: 1 секунда)
    const handleChangeSearchField = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;

        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            const data = {
                page: 1,
                query: inputValue,
                limit: limit
            };

            if (data.query) {
                dispatch(changeCurrentPage(1));
                dispatch(changeSearchQuery(data.query));
                dispatch(clearFilters());
            } else {
                dispatch(changeCurrentPage(1));
                dispatch(changeSearchQuery(data.query));
                dispatch(clearFilters());
            }

            timeoutId = null;
        }, 1000);

    };

    return (
        <Box marginBottom={"20px"}>
            <Autocomplete
                freeSolo
                disableClearable
                value={searchQuery}
                options={queriesHistory}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Поиск"
                        onChange={handleChangeSearchField}
                        InputProps={{
                            ...params.InputProps,
                        }}
                    />
                )}
            />
        </Box>
    );
};

export default Search;
