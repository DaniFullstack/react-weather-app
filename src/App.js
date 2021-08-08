import './App.css';
import Forcasat1Day from './Structure/Forecast1Day';
import { useState, useEffect } from "react";




function App() {

  const [forecast, setForecast] = useState([]);
  useEffect(() => {
    fetch("https://netcraft2.s3-eu-west-1.amazonaws.com/weather.json")
      .then((res) => res.json())
      .then((data) => setForecast(data));
  }, []);


  return (
    <div className="App">
      {forecast.map((dailyWeather) => (
        <Forcasat1Day
          day={dailyWeather.day}
          temperature={dailyWeather.temperature}
          icon={dailyWeather.icon}
          description={dailyWeather.description}
        />
      ))}
    </div>
  );
}

export default App;
