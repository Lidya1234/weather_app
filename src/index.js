import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
const userinput = document.querySelector('#city');
const submit = document.querySelector(".submit");
const template = document.querySelector(".template")
const  content =document.querySelector(".content");
const body = document.querySelector("body")





const fetchWeather = async(city) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cc5b6b3a829a31b86bf5937e99371a8a&units=metric`,
    {
        mode: 'cors',
      },);

      if(response.status === 400)
      {
        throwError()
      }
 else
 {
    const weatherdata =await response.json();
    console.log(weatherdata)
    return weatherdata;
 }
}

const getBackground = (cityweather) =>
{ 
  if (cityweather.weather[0].main === 'Clear')
  {body.className = "";
   body.classList.add('clearsky')
  }
  else if (cityweather.weather[0].main === 'Clouds')
  {body.className = "";
   body.classList.add('cloudy')
  }
  else if (cityweather.weather[0].main === 'Rain')
  {body.className = "";
   body.classList.add('rainy')
  }
  else
  {body.className = "";
    body.classList.add('cloudy')
  }
}


const display = (cityweather)=>
{ clearList(content)
  const weatherTemplate = document.importNode(template.content,true);
  const weather = weatherTemplate.querySelector(".weather");
  const place = weatherTemplate.querySelector(".country");
  const temp = weatherTemplate.querySelector(".temp");
  const feelsLike = weatherTemplate.querySelector(".feel");
  const humidity =weatherTemplate.querySelector(".humidity");
  const windSpeed = weatherTemplate.querySelector(".wind-speed");
  getBackground(cityweather);

 weather.textContent =  cityweather.name + "," +cityweather.sys.country;
 temp.textContent ="Temprature:" + cityweather.main.temp + "°C"
 place.textContent ="Weather: " + cityweather.weather[0].main
 feelsLike.textContent ="Feels_Like:  " + cityweather.main.feels_like + "°C"
 humidity.textContent ="Humidity:  " + cityweather.main.humidity + "%"
 windSpeed.textContent ="Wind speed:  " + cityweather.wind.speed + " MPH"
 content.appendChild(weatherTemplate);


}

const getWeather = async (city1) =>
{
  const data = await fetchWeather(city1);
  console.log(data)
  display(data);

}

const clearList = (list) => {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
};


const handleEvent = ()=> {
  const location = userinput.value;
  getWeather(location);
}
 submit.addEventListener('click', handleEvent);
 userinput.addEventListener('submit', handleEvent);

 getWeather("kampala");