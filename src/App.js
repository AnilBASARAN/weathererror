
import './App.css';
import {useState,useEffect} from "react";
import WeatherCard from "./WeatherCard.jsx";
import ErrorMessage from "./ErrorMessage.jsx";

const App = () => {

  const [weather,setWeather] = useState(null);
  const [error,setError] = useState(null);

  const fetchWeather = async ()=>{
    const response = await fetch("https://api.react-formula.com/learning-api/demos/error-handling/weather");
console.log(response)
const data = await response.json();
    
    if(response.status == 200){
    setWeather(data);
    setError(null);
      
    }else{
      setError(data);
      setWeather(null);
      console.log(data)
      
    }
  };

  useEffect(()=>{
    fetchWeather();
  },[])
  
  return <div className="min-h-screen flex justify-center items-center" >
    <div className="w-full max-w-lg flex justify-center items-center" >
      <button
        onClick={()=>{
          fetchWeather();
        }}
        className="absolute top-5 left-5 rounded-lg bg-teal-300 p-2"><i className=" fa-solid fa-rotate-right"></i></button>
      {
        weather && < WeatherCard weather={weather} />
      }

      {
        error && <ErrorMessage message = {error.error_message} />
      }
    </div>
  </div>
};

export default App;
