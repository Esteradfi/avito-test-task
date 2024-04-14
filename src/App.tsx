import React, {useEffect} from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Movies from "./pages/Movies/Movies";
import SelectedMovie from "./pages/SelectedMovie/SelectedMovie";
import {useAppDispatch} from "./redux/store";
import {changeIsFetchingParams} from "./redux/movies";
import {Container} from "@mui/material";
import {getFiltersFieldThunk} from "./redux/asyncQueries";

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        //Запрос всех возможных стран для фильтра
        dispatch(getFiltersFieldThunk('countries.name'));
        dispatch(changeIsFetchingParams(true));
    }, [dispatch]);

    return (
        <Container component={'main'} className="App" sx={{margin: '50px auto'}}>
            <Routes>
                <Route path="/*" element={<Movies/>}/>
                <Route path="/movies/:movie" element={<SelectedMovie/>}/>
            </Routes>
        </Container>
    );
}

export default App;
