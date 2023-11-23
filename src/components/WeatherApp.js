import React, { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'

const WeatherApp = () => {
    const [weatherInfo, setWeatherInfo]= useState({});

    let updateWeather=(result)=>{
        setWeatherInfo(result);
    }
  return (
      <div className='shadow-2xl rounded px-8 py-4 m-auto'>
        <SearchBox update={updateWeather}/>
        <InfoBox info={weatherInfo}/>
      </div>
  )
}

export default WeatherApp