import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud,faSun, faCloudRain,faSmog,faCloudBolt} from '@fortawesome/free-solid-svg-icons';

const WEATHER_ICON = {
    Sunny: <FontAwesomeIcon icon={faSun} className='text-2xl text-yellow-400' />,
    "Partly Cloudy": <FontAwesomeIcon icon={faSmog} className='text-2xl text-blue-400'/>,
    Cloudy: <FontAwesomeIcon icon={faCloud} className='text-2xl text-blue-200'/>,
    Rain: <FontAwesomeIcon icon={faCloudRain} className='text-2xl text-blue-400' />,
    Snow: <FontAwesomeIcon icon={faCloudBolt} className='text-2xl text-blue-700'/>,
  };
  
  const WeatherCard = (props) => {
    const { weather } = props;
  
    return (
      <div className="flex flex-col items-center p-2 m-2 bg-white border rounded-md overflow-clip border-stone-200 w-28">
        <div className="text-lg text-stone-600">{weather.day}</div>
        <div className="my-4 text-4xl">{WEATHER_ICON[weather.description]}</div>
        <div className="flex justify-between w-full text-sm">
          <div className="text-stone-600">{weather.high_temp}°F</div>
          <div className="text-stone-400">{weather.low_temp}°F</div>
        </div>
      </div>
    );
  };
  
  export default WeatherCard;
  