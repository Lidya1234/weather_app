import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
const city = document.querySelector('#city').value;
const submit = document.querySelector(".submit");
console.log(submit);
console.log(city)





const getWeather = async(city) => {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cc5b6b3a829a31b86bf5937e99371a8a`,
    {
        mode: 'cors',
      },);

    const weatherdata =await data.json();
   
    console.log(weatherdata)
}
// submit.addEventListener('click', getWeather)
submit.onclick = () => {
   console.log("hiii");
   getWeather(city);
   return false;
}