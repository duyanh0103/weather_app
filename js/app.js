const API_KEY = "3fe60d7b92e074fecb3a73b4f9ffb771"
const DEFAULT_VALUE = "- -";
const searchInput = document.getElementById("search-input");
const cityname = document.querySelector(".city-name");
const weatherIcon = document.querySelector(".weather-icon")
const weatherState = document.querySelector(".weather-state");
const sunrise = document.querySelector(".value-sunrise");
const sunset = document.querySelector(".value-sunset");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");
const temperature = document.querySelector(".temperature")
    // lang nghe su kien cho truong nhap tim kiem 
searchInput.addEventListener("change", (event) => {
    //goi API openweathermap de lay du lieu thoi tiet dua tren dau vao cua nguoi dung 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=${API_KEY}&units=metric`)
        .then(response => response.json()) //chuyen doi phan hoi thanh dinh dang JSON
        .then((data) => {
            cityname.innerHTML = data.name || DEFAULT_VALUE;
            weatherState.innerHTML = data.weather[0].description || DEFAULT_VALUE;
            weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` || DEFAULT_VALUE;
            temperature.innerHTML = data.main.temp || DEFAULT_VALUE;
            sunrise.innerHTML = data.sys.sunrise || DEFAULT_VALUE;
            sunset.innterHTML = data.sys.sunset || DEFAULT_VALUE;
            humidity.innerHTML = data.main.humidity || DEFAULT_VALUE;
            windSpeed.innerHTML = data.wind.speed || DEFAULT_VALUE;
        })
})