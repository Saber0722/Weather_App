function WeatherCard({ weather, error, loading}){
    if (error){
        return (
            <div className="text-red-500 text-center p-4">{error}</div>
        )
    }
    if (!weather){
        return (
            <div className="text-gray-500 text-center p-4">Enter a city to get the weather</div>
        )
    }
   if (loading) {
        return (
            <div className="text-gray-500 text-center p-4">
            <svg className="animate-spin h-5 w-5 mx-auto" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8 8 8 0 01-8-8z" />
            </svg>
            <p>Loading...</p>
            </div>
        );
}

    const { name, main, weather: weatherDetails } = weather;
    const iconUrl = `http://openweathermap.org/img/wn/${weatherDetails[0].icon}@2x.png`;

    return (
        <div className="bg-blue-100 p-4 rounded-lg max-w-md mx-auto shadow-lg mt-4 flex flex-col">
            <h2 className="text-2xl font-bold text-center text-light-gray mb-4">{name}</h2>
            <img src={iconUrl} alt={weatherDetails[0].description} className="mx-auto mb-4" />
            <p className="text-lg-capitalize">{weatherDetails[0].description}</p>
            <p className="text-xl">{main.temp}°C</p>
            <p className="text-gray-500">Humidity: {main.humidity}%</p>
            <p className="text-gray-500">Feels like: {main.feels_like}°C</p>
        </div>

    )
}

export default WeatherCard;