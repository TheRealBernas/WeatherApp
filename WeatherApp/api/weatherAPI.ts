// weatherApi.ts
import axios from 'axios';
import { WEATHER_API_KEY } from '../@env'; // pulled from .env file
import type { RealtimeWeatherResponse } from '../classes/realtime';
import type { ForecastWeatherResponse } from '../classes/forecast';

const WEATHER_API_BASE_URL = 'https://api.weatherapi.com/v1';

export const getRealtimeWeather = async (location: string): Promise<RealtimeWeatherResponse> => {
  try {
    const response = await axios.get<RealtimeWeatherResponse>(
      `${WEATHER_API_BASE_URL}/current.json`,
      {
        params: {
          key: WEATHER_API_KEY,
          q: location,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching realtime weather:', error);
    throw error;
  }
};

export const getForecastWeather = async (
  location: string,
  days: number = 3
): Promise<ForecastWeatherResponse> => {
  try {
    const response = await axios.get<ForecastWeatherResponse>(
      `${WEATHER_API_BASE_URL}/forecast.json`,
      {
        params: {
          key: WEATHER_API_KEY,
          q: location,
          days,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching forecast weather:', error);
    throw error;
  }
};