import { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm';
import WeatherCard from './components/WeatherCard';

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const getBackgroundClass = () => {
    if (!weather || !weather.weather || !weather.weather[0]) {
      return 'bg-gradient-to-br from-blue-100 to-blue-300'; 
    }
    const condition = weather.weather[0].main;
    switch (condition) {
      case 'Clear':
        return 'bg-gradient-to-br from-yellow-100 to-yellow-300';
      case 'Clouds':
        return 'bg-gradient-to-br from-gray-200 to-gray-400';
      case 'Rain':
        return 'bg-gradient-to-br from-blue-500 to-gray-900';
      case 'Drizzle':
        return 'bg-gradient-to-br from-blue-300 to-blue-500';
      case 'Snow':
        return 'bg-gradient-to-br from-blue-50 to-blue-200';
      case 'Thunderstorm':
        return 'bg-gradient-to-br from-gray-600 to-gray-800';
      default:
        return 'bg-gradient-to-br from-blue-100 to-blue-300';
    }
  };

  const fetchWeather = async (city) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
          import.meta.env.VITE_OPEN_WEATHER_API_KEY
        }&units=metric`
      );
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      await delay(1000);
      setWeather(data);
      setError(null);
    } catch (e) {
      await delay(1000); 
      setError(e.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen ${getBackgroundClass()} flex flex-col items-center justify-center p-4 transition-all duration-500`}
    >
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Weather App</h1>
      <SearchForm onSearch={fetchWeather} />
      <WeatherCard weather={weather} error={error} loading={loading} />
    </div>
  );
}

export default App;