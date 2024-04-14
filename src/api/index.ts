import axios from "axios";

export const API_URL = 'https://api.kinopoisk.dev';

//Токен берется из переменной окружения
const token = process.env.REACT_APP_TOKEN;

const $api = axios.create({
    baseURL: API_URL,
    headers: {
        'X-API-KEY': token
    }
})

export default $api;