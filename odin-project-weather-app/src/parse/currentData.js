import drizzleIcon from "../imgs/drizzle.png";
import rainIcon from "../imgs/rain.png";
import thunderStormIcon from "../imgs/thunderstorm.png";
import cloudsIcon from "../imgs/clouds.png";
import snowIcon from "../imgs/snow.png";
import clearIcon from "../imgs/clear.png";

function getCurrentTemp(data){
    return Math.round(data.main.temp);
}

function getWeatherImgSrc(data) {
    const weather = data.weather[0].main;
    switch(weather) {
        case 'Thunderstorm':
            return thunderStormIcon;
        case 'Drizzle':
            return drizzleIcon;
        case 'Rain':
            return rainIcon;
        case 'Snow':
            return snowIcon;
        case 'Clear':
            return clearIcon;
        default:
            return cloudsIcon;
    }
}

function getCurrentHighTemp(data){
    return Math.round(data.main.temp_max) + 2;
}

function getCurrentLowTemp(data){
    return Math.round(data.main.temp_min) - 2;
}

function getFeelsLikeTemp(data) {
    return Math.round(data.main.feels_like);
}

function getHumidityPercentage(data) {
    return Math.round(data.main.humidity);
}

function getChanceOfRainPercentage(data) {
    const weather = data.weather[0].main;
    const condition = data.weather[0].description;
    let cor = 0;
    if (weather === 'Drizzle' || weather === 'Thunderstorm') {
        cor = Math.floor(Math.random() * (25 - 5 + 1)) + 5;
    } else if (weather === 'Rain') {
        if(condition === 'light rain' || condition === 'moderate rain') {
            cor = Math.floor(Math.random() * (50 - 25 + 1)) + 25;
        } else {
            cor = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
        }
    }
    return cor;
}

function getWindSpeed(data) {
     return Math.round(data.wind.speed);
}

export {
    getCurrentTemp,
    getWeatherImgSrc,
    getCurrentHighTemp,
    getCurrentLowTemp,
    getFeelsLikeTemp,
    getHumidityPercentage,
    getChanceOfRainPercentage,
    getWindSpeed
}