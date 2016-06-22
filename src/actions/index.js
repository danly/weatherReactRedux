import axios from 'axios';

const API_KEY = 'b5ceb4448650347470b7f3806b49bc6e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request:', request)
  // redux promise stops this action until the promise resolves and afterwards sends the data to the reducer
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
