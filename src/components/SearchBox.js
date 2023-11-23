import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const SearchBox = ({ update }) => {
    const API_URL = 'http://api.openweathermap.org/data/2.5/weather';
    const API_KEY = 'e288124cf9573ddb37bd2099dbee0480';
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);
    const regionNames = new Intl.DisplayNames(
      ['en'], { type: 'region' }
    );
  
    

    const getWeatherInfo = async () => {
        try {
            const res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            const json = await res.json();
            console.log(json);
            let result = {
                city: city,
                temp: json.main.temp,
                country: json.sys.country,
                tempMax: json.main.temp_max,
                tempMin: json.main.temp_min,
                humidity: json.main.humidity,
                feelsLike: json.main.feels_like,
                weather: json.weather[0].description,
                countryName: regionNames.of(json.sys.country)
            }
            return result;
        } catch (err) {
            throw err;
        }
    }

    const handleChange = (e) => {
        setCity(e.target.value);
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setCity("");
            let newInfo = await getWeatherInfo();
            update(newInfo);
            setError(false);
        } catch (err) {
            setError(true);
        }
    }
    return error ? <div className='m-3 text-center'>
        <h2 className='text-3xl'>Search Weather for a City</h2>
        <form className='m-4 flex justify-center gap-2' onSubmit={handleSubmit}>
            <TextField onChange={handleChange} value={city} id="outlined-basic" label="City Name" variant="outlined" required />
            <Button variant="contained" color='success' type='submit'>Search</Button>
        </form>
        <p className='text-xl text-red-400'>No such city exists</p>
    </div>
        : (
            <>
                <div className='m-3 text-center'>
                    <h2 className='text-3xl'>Search Weather for a City</h2>
                    <form className='m-4 flex justify-center gap-2' onSubmit={handleSubmit}>
                        <TextField onChange={handleChange} value={city} id="outlined-basic" label="City Name" variant="outlined" required />
                        <Button variant="contained" color='success' type='submit'>Search</Button>
                    </form>
                </div>
            </>
        )
}

export default SearchBox