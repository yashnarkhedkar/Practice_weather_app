const getWeatherDetails = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f23a97a053f7398982160a60389c3998`)
        .then(response => response.json())
        .then(data => changeFrontEnd(data))
        .catch(err => console.error(err));
}

const changeFrontEnd = (info) => {
    console.log(info);
    let cityName = document.querySelector("#city-name");
    let type = document.querySelector('#weather-type');
    let temp_f = document.querySelector('#temp');
    let min_temp = document.querySelector('#min-temp');
    let max_temp = document.querySelector('#max-temp');

    const city = info.name;
    const country = info.sys.country;
    const feel = info.weather[0].main;
    const temp = info.main.temp;
    const max = info.main.temp_max;
    const min = info.main.temp_min;

    cityName.innerHTML = city + ", " + country;
    type.innerHTML = feel;
    temp_f.innerHTML = temp;
    min_temp.innerHTML = max;
    max_temp.innerHTML = min;
}

const searchCity = () => {
    let city = document.querySelector('#city-input').value;
    getWeatherDetails(city);
}