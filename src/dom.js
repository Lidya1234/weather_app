const userinput = document.querySelector('#city');
const submit = document.querySelector('.submit');
const template = document.querySelector('.template');
const content = document.querySelector('.content');
const body = document.querySelector('body');
const errorMsg = document.querySelector('.error_msg');
const getBackground = (cityweather) => {
  if (cityweather.weather[0].main === 'Clear') {
    body.className = '';
    body.classList.add('clearsky');
  } else if (cityweather.weather[0].main === 'Clouds') {
    body.className = '';
    body.classList.add('cloudy');
  } else if (cityweather.weather[0].main === 'Rain') {
    body.className = '';
    body.classList.add('rainy');
  } else {
    body.className = '';
    body.classList.add('foggy');
  }
};

const clearList = (list) => {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
};
const display = (cityweather) => {
  clearList(content);
  const weatherTemplate = document.importNode(template.content, true);
  const weather = weatherTemplate.querySelector('.weather');
  const place = weatherTemplate.querySelector('.country');
  const temp = weatherTemplate.querySelector('.temp');
  const feelsLike = weatherTemplate.querySelector('.feel');
  const humidity = weatherTemplate.querySelector('.humidity');
  const windSpeed = weatherTemplate.querySelector('.wind-speed');
  getBackground(cityweather);

  weather.textContent = `${cityweather.name},${cityweather.sys.country}`;
  temp.textContent = `Temprature:${cityweather.main.temp}°C`;
  place.textContent = `Weather: ${cityweather.weather[0].main}`;
  feelsLike.textContent = `Feels_Like:  ${cityweather.main.feels_like}°C`;
  humidity.textContent = `Humidity:  ${cityweather.main.humidity}%`;
  windSpeed.textContent = `Wind speed:  ${cityweather.wind.speed} MPH`;
  content.appendChild(weatherTemplate);
};


export {
  userinput, submit, template, content, body, errorMsg, getBackground, display,
};
