import { renderLocation, renderCurrentWeather, renderForecastWeather, renderDates } from "./dom";

const API_KEY = '7b189ae7eb0f8f6f66ad2f1526a6bd31';

async function fetchGeoCoords(input) {
    try {
        const [city, state] = input.split(',');
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city.trim()},${state.trim()},US&appid=${API_KEY}`)
        const obj = await response.json();
        const data = [obj[0].lat, obj[0].lon, obj[0].name, obj[0].state];
        return data;
    } catch (err) {
        alert('Type in something valid');
    }
}

async function fetchWeatherData(e) {
    if (e.key !== 'Enter') return;
    try{
        const [lat, lon, city, state] = await fetchGeoCoords(e.target.value);
        const url1 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`;
        const url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`;
        const responses = await Promise.all([fetch(url1), fetch(url2)]);
        const data1 = await responses[0].json();
        const data2 = await responses[1].json();
        renderLocation(city, state);
        renderDates();
        renderCurrentWeather(data1);
        renderForecastWeather(data2);
        e.target.value = '';
    } catch (err) {
        alert ('Could not retrieve data');
    }
}

async function fetchDataOnPageLoad() {
    try {
        const url1 = `https://api.openweathermap.org/data/2.5/weather?lat=36.1672559&lon=-115.148516&units=imperial&appid=${API_KEY}`;
        const url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=36.1672559&lon=-115.148516&units=imperial&appid=${API_KEY}`;
        const responses = await Promise.all([fetch(url1), fetch(url2)]);
        const data1 = await responses[0].json();
        const data2 = await responses[1].json();
        renderLocation('Las Vegas', 'Nevada');
        renderDates();
        renderCurrentWeather(data1);
        renderForecastWeather(data2);
    } catch(err) {
        alert ('Could not retrieve data');
    }
}

export {fetchWeatherData, fetchDataOnPageLoad}