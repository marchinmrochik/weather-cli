import https from 'https';
import axios from 'axios';
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js'

const getWeather = async (city) => {
  const token = await getKeyValue(TOKEN_DICTIONARY.token);

  if(!token) {
    throw new Error('Token API not found. Add please token api in console using command -t [API_KEY]');
  }

  const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      q: city,
      appid: token,
      lang: 'en',
      units: 'metric'
    }
  });

  return data;

  // For learn process 
  // const url = new URL('https://api.openweathermap.org/data/2.5/weather');
  // url.searchParams.append('q', city)
  // url.searchParams.append('appid', token)
  // url.searchParams.append('lang', 'en')
  // url.searchParams.append('units', 'metric')

  // https.get(url, (response) => {
  //   let result = '';
  //   response.on('data', (chunk) => {
  //     result += chunk;
  //   })

  //   response.on('end', () => {
  //     console.log('result ', result)
  //   })
  // })
}

export { getWeather }