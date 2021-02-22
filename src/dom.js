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

const getFahrenheit = (temp) => {
  const fahrenheit = Math.round((temp * (9 / 5)) + 32);
  return fahrenheit;
};

const clearList = (list) => {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
};
const setUnit = (temprature, btn, temp, string) => {
  if (btn.textContent === '°C') {
    temp.textContent = `${string}   ${temprature}°C`;

    btn.textContent = '°F';
  } else {
    temp.textContent = `${string}   ${getFahrenheit(temprature)}°F`;
    btn.textContent = '°C';
  }
};
const display = (cityweather) => {
  clearList(content);
  const weatherTemplate = document.importNode(template.content, true);
  const weather = weatherTemplate.querySelector('.weather');
  const place = weatherTemplate.querySelector('.country');
  const temp = weatherTemplate.querySelector('.temp');
  const toggle = weatherTemplate.querySelector('.toggle');
  const feelToggle = weatherTemplate.querySelector('.feel_toggle');
  const feelsLike = weatherTemplate.querySelector('.feel');
  const humidity = weatherTemplate.querySelector('.humidity');
  const windSpeed = weatherTemplate.querySelector('.wind-speed');
  getBackground(cityweather);


  const stringT = 'Temprature: ';
  const stringF = 'Feels_Like: ';
  toggle.addEventListener('click', () => {
    setUnit(cityweather.main.temp, toggle, temp, stringT);
  });
  feelToggle.addEventListener('click', () => {
    setUnit(cityweather.main.feels_like, feelToggle, feelsLike, stringF);
  });

  toggle.textContent = '°F';
  feelToggle.textContent = '°F';
  weather.textContent = `${cityweather.name},${cityweather.sys.country}`;
  temp.textContent = `Temprature:${cityweather.main.temp}°C`;
  place.textContent = `Weather: ${cityweather.weather[0].description}`;
  feelsLike.textContent = `Feels_Like:  ${cityweather.main.feels_like}°C`;
  humidity.textContent = `Humidity:  ${cityweather.main.humidity}%`;
  windSpeed.textContent = `Wind speed:  ${cityweather.wind.speed} MPH`;
  content.appendChild(weatherTemplate);
};


export {
  userinput, submit, template, content, body, errorMsg, getBackground, display,
};
