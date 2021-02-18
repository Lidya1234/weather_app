import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {
  userinput, submit, errorMsg, display,
} from './dom';

const throwError = (err) => {
  errorMsg.textContent = `${err}!     Please enter a valid location`;
};
const fetchWeather = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cc5b6b3a829a31b86bf5937e99371a8a&units=metric`,
    {
      mode: 'cors',
    },
  );

  if (!response.ok) {
    throwError(response.statusText);
    return 400;
  }
  const weatherdata = await response.json();
  return weatherdata;
};

const getWeather = async (city1) => {
  const data = await fetchWeather(city1);

  display(data);
};

const handleEvent = () => {
  errorMsg.textContent = '';
  const location = userinput.value;
  getWeather(location);
};
submit.addEventListener('click', handleEvent);
userinput.addEventListener('submit', handleEvent);

getWeather('kampala');
