import {format, addDays} from "date-fns";
import drizzleIcon from "../imgs/drizzle.png";
import rainIcon from "../imgs/rain.png";
import thunderStormIcon from "../imgs/thunderstorm.png";
import cloudsIcon from "../imgs/clouds.png";
import snowIcon from "../imgs/snow.png";
import clearIcon from "../imgs/clear.png";

function sortByDate(data) {
    const dayOne = [];
    const dayTwo = [];
    const dayThree = [];
    const dayFour = [];
    const dayFive = [];
    data.list.forEach(fc => {
        const currentDate = fc.dt_txt.split(' ')[0];
        switch(currentDate){
            case format(addDays(new Date(), 1), 'yyyy-MM-dd'):
                dayOne.push(fc);
                break;
            case format(addDays(new Date(), 2), 'yyyy-MM-dd'):
                dayTwo.push(fc);
                break;
            case format(addDays(new Date(), 3), 'yyyy-MM-dd'):
                dayThree.push(fc);
                break;
            case format(addDays(new Date(), 4), 'yyyy-MM-dd'):
                dayFour.push(fc);
                break;
            case format(addDays(new Date(), 5), 'yyyy-MM-dd'):
                dayFive.push(fc);
                break;
        }
    })
    return [dayOne, dayTwo, dayThree, dayFour, dayFive];
}

function getForecastHighTemps(data) {
    const sorted = sortByDate(data);
    const highTemps = [];
    sorted.forEach(arr => {
        arr.sort((a, b) => a.main.temp - b.main.temp);
        highTemps.push(Math.round(arr[arr.length - 1].main.temp));
    })
    return highTemps;
}

function getForecastLowTemps(data) {
    const sorted = sortByDate(data);
    const lowTemps = [];
    sorted.forEach(arr => {
        arr.sort((a, b) => b.main.temp - a.main.temp);
        lowTemps.push(Math.round(arr[arr.length - 1].main.temp));
    })
    return lowTemps;
}

function getForecastWeatherImgSrc(data) {
    const sorted = sortByDate(data);
    const sources = [];
    sorted.forEach(arr => {
        const weather = arr[0].weather[0].main;
        switch(weather) {
            case 'Thunderstorm':
                sources.push(thunderStormIcon);
                break;
            case 'Drizzle':
                sources.push(drizzleIcon);
                break;
            case 'Rain':
                sources.push(rainIcon);
                break;
            case 'Snow':
                sources.push(snowIcon);
                break;
            case 'Clear':
                sources.push(clearIcon);
                break;
            default:
                sources.push(cloudsIcon);
        }
    });
    return sources;
}

export {getForecastHighTemps, getForecastLowTemps, getForecastWeatherImgSrc}