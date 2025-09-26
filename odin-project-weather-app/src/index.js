import { fetchWeatherData, fetchDataOnPageLoad } from "./api";

fetchDataOnPageLoad();

const input = document.querySelector('input');
input.addEventListener('keydown', fetchWeatherData);