import {getCurrentTemp,
    getWeatherImgSrc,
    getCurrentHighTemp,
    getCurrentLowTemp,
    getFeelsLikeTemp,
    getHumidityPercentage,
    getChanceOfRainPercentage,
    getWindSpeed} from "./parse/currentData";
import { getForecastHighTemps, 
    getForecastLowTemps, 
    getForecastWeatherImgSrc } from "./parse/forecastData";
import {format, addDays} from "date-fns";
import feelsLikeIcon from "./imgs/feels-like.png";
import humidityIcon from "./imgs/humidity.png";
import windSpeedIcon from "./imgs/wind-speed.png";
import rainIcon from "./imgs/rain.png";
import searchIcon from "./imgs/search.png";

    
function renderLocation(city, state) {
    const location = document.querySelector('.city-state');
    location.textContent = `${city}, ${state}`;
}

function renderDates() {
    const currentDate = document.querySelector('.current-date');
    const monthDays = document.querySelectorAll('.month-day');
    const daysOfWeek = document.querySelectorAll('.day-of-week');
    currentDate.textContent = format(new Date(), 'iiii, MM/dd/yyyy');
    monthDays.forEach((md, i) => md.textContent = format(addDays(new Date(), i + 1), 'MM/dd'));
    daysOfWeek.forEach((dw, i) => dw.textContent = format(addDays(new Date(), i + 1), 'iiii'));
}

function renderCurrentWeather(data) {
    const currentTemp = document.querySelector('.current-temp');
    const currentWeather = document.querySelector('.current-weather');
    const currentMinMax = document.querySelector('.current-min-max');
    const feelsLike = document.querySelector('.feels-like-value');
    const humidity = document.querySelector('.humidity-value');
    const cor = document.querySelector('.cor-value');
    const wind = document.querySelector('.wind-value');
    const feelsLikeImg = document.querySelector('.feels-like-img');
    const humidityImg = document.querySelector('.humidity-img');
    const corImg = document.querySelector('.cor-img');
    const windImg = document.querySelector('.wind-img');
    const searchImg = document.querySelector('.search-icon');
    
    currentTemp.innerHTML = `${getCurrentTemp(data)}&deg;`;
    currentWeather.src = getWeatherImgSrc(data);
    currentMinMax.innerHTML = `H: ${getCurrentHighTemp(data)}&deg; L: ${getCurrentLowTemp(data)}&deg;`;
    feelsLike.innerHTML = `${getFeelsLikeTemp(data)}&deg;`;
    humidity.textContent = `${getHumidityPercentage(data)}%`;
    cor.textContent = `${getChanceOfRainPercentage(data)}%`;
    wind.textContent = `${getWindSpeed(data)} mph`;
    feelsLikeImg.src = feelsLikeIcon;
    humidityImg.src = humidityIcon;
    corImg.src = rainIcon;
    windImg.src = windSpeedIcon;
    searchImg.src = searchIcon;
}

function renderForecastWeather(data) {
    const forecastWeather = document.querySelectorAll('.forecast-weather');
    const forecastMax = document.querySelectorAll('.forecast-max');
    const forecastMin = document.querySelectorAll('.forecast-min');
    const sources = getForecastWeatherImgSrc(data);
    const highTemps = getForecastHighTemps(data);
    const lowTemps = getForecastLowTemps(data);

    forecastWeather.forEach((img, i) => img.src = sources[i]);
    forecastMax.forEach((hT, i) => hT.innerHTML = `H: ${highTemps[i]}&deg;`);
    forecastMin.forEach((lT, i) => lT.innerHTML = `L: ${lowTemps[i]}&deg;`);
}

export {renderLocation, renderDates, renderCurrentWeather, renderForecastWeather}