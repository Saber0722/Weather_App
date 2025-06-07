import { useState } from 'react';

function SearchForm({ onSearch }) {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim()) {
            onSearch(city);
            setCity('');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-d mx-auto">
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="submit" className="bg-blue-400 text-white p-2 rounded-lg hover:bg-blue-500 transition-colors duration-200">
                Get Weather
            </button>
        </form>
    )
}

export default SearchForm;