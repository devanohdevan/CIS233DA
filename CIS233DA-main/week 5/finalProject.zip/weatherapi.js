"use strict";

// init vars here
let cityDropdown = document.getElementById("cityDropdown");
let cityNamePlaceholder = document.getElementById("city");
let cityTemp = document.getElementById("temp");
let cityDescription = document.getElementById("description");
let cityWinds = document.getElementById("winds");
let cityHumidity = document.querySelector('.humidity');
let msg = document.getElementById('error-msg')

let currentTemp;
let currentUnit;

window.onload = function () {
    initCityDropdown(); // Load list of cities when loading is finished
    cityDropdown.onchange = getWeather; // When a City is Selected ... run get weather
    cityTemp.onclick = convertTemp;
};

function initCityDropdown() {
    let option = new Option("Select a City", "select");
    cityDropdown.appendChild(option);
    // Grab cities from cities.js and put them in a dropdown list
    for (let city of cities) {
        let option = new Option(city.name, city.name);
        cityDropdown.appendChild(option);
    }
}

// Grab the latitude and longitude from selected city 
function getWeather() {
    for (let city of cities) {
        if (city.name == cityDropdown.value) {
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${city.latitude}&lon=${city.longitude}&appid=02994ce022cf3771383f59b05c819664`)
                .then((response) => {
                    // If server is down, let users know the API is unavailable
                    if (!response.ok) {
                        emptyFields();
                        throw new Error('API is currently unavailable');
                    }
                    return response.json();
                })
                .then((data) => {
                    displayWeather(data);
                    console.log(data);
                });
        }
    }
}

function displayWeather(data) {
    emptyFields();

    const currentWeather = data.current;
    const forecast = data.daily[0];

    currentTemp = convertKelvinToDefault(currentWeather.temp);
    currentUnit = "°C";
    cityTemp.innerHTML = `${currentTemp}${currentUnit}`;
    cityDescription.innerHTML = `Forecast: ${forecast.weather[0].description}<br><br>`;
    cityWinds.innerHTML = `Winds: ${currentWeather.wind_speed} m/s`;

    // You can access other weather data from 'forecast' and 'currentWeather' objects as needed
}

// Clears fields if API unavailable
function emptyFields() {
    cityTemp.innerHTML = "";
    cityDescription.innerHTML = `
        Sorry, currently can't find the details on this city. 
        Please try again later or try another city!<br><br>
        Enjoy this absolutely random picture from this city though!`;
    cityWinds.innerHTML = "";

    changeBg();
}

function changeBg() {
    for (let city of cities) {
        if (city.name == cityDropdown.value) {
            cityNamePlaceholder.innerHTML = city.name;
            document.getElementById("imageid").src = "https://source.unsplash.com/1600x900/?" + city.name + "," + city.state + "')";
        }
    }
}

// Change the Current Temperature Unit When The cityTemp field is clicked
function convertTemp() {
    if (currentUnit === "°C") {
        currentTemp = convertCelsiusToFahrenheit(currentTemp);
        currentUnit = "°F";
        cityTemp.innerHTML = `${currentTemp}${currentUnit}`;
    } else {
        currentTemp = convertFahrenheitToCelsius(currentTemp);
        currentUnit = "°C";
        cityTemp.innerHTML = `${currentTemp}${currentUnit}`;
    }
}

function convertKelvinToDefault(temp) {
    return (temp - 273.15).toFixed(0);
}

function convertCelsiusToFahrenheit(temp) {
    return (temp * 9) / 5 + 32;
}

function convertFahrenheitToCelsius(temp) {
    return ((temp - 32) * 5) / 9;
}
