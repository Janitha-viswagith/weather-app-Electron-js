import React from 'react'
import './WeatherApp.css'
const WeatherApp = () => {
  return (
    <div className='container'>
      <div className='top-bar'>
        <input type="text" className="cityInput" placeholder='Search' />
      <div className="serach-icon">
        <img src="" alt="searchIcon" />

      </div>
      
      </div>

        <div className="weather-image">
            <img src="" alt="cloud_icon" />
        </div>

        <div class='weather-temp'>39°C</div>
         
         <div className="weather-location">
            London
         </div>
       
        <div className="data-container">
            <div className="element">
                <img src="" alt="humidity_icon" className="icon" />
                <div className='data'>
                    <div className="humidity-percent">64%</div>
                   <div className="text">Humidity</div>
                </div>

            </div>
            <div className="element">
                <img src="" alt="wind icon" className="icon" />
                <div className='data'>
                    <div className="humidity-percent">64%</div>
                   <div className="text">Wind Speed</div>
                </div>

            </div>
           
        </div>

   
    </div>
  );
};

export default WeatherApp
