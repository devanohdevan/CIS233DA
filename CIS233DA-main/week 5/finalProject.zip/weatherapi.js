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
            fetch(`https://api.weather.gov/points/${city.latitude},${city.longitude}`)
                .then((response) => response.json())
                .then(data => {
                    fetch(data.properties.forecast)
                        .then((response) => {
                            // If server is down, let users know the api is unavailable
                            if (response.status === 503) {
                                emptyFields();
                                throw new Error('API is currently unavailable');
                            }
                            return response.json();
                        })
                        .then((newData) => {
                            displayWeather(newData);
                            console.log(newData)
                        });
                })
        }
    }
}

function displayWeather(data) {
    emptyFields()

    for (let period of data.properties.periods) {
        // ONLY GRAB THE FIRST PERIOD
        if (period.number == 1) {
            currentTemp = period.temperature;
            currentUnit = period.temperatureUnit;
            cityTemp.innerHTML = `${currentTemp}°${currentUnit}`
            cityDescription.innerHTML = `Forecast: ${period.detailedForecast} <br><br>`
            cityWinds.innerHTML = `Winds: ${period.windDirection} ${period.windSpeed}`
        }
    }

}

// Clears fields if API unavailable
function emptyFields() {
    cityTemp.innerHTML = ``
    cityDescription.innerHTML = 
    `Sorry, currently can't find the details on this city. 
    Please try again later or try another city! <br><br>
    Enjoy this absolutely random picture from this city though!`
    cityWinds.innerHTML = ``

    changeBg();
}

function changeBg(){
    for (let city of cities) {
        if (city.name == cityDropdown.value) {
            cityNamePlaceholder.innerHTML = city.name;
            document.getElementById("imageid").src = "https://source.unsplash.com/1600x900/?" + city.name + "," + city.state + "')";
        }
    }
}

// Change the Current Temperature Unit When The cityTemp field is clicked
function convertTemp() {
    if (currentUnit == "F") {
        currentTemp = ((currentTemp - 32) * 5 / 9).toFixed(0)
        currentUnit = "C"
        cityTemp.innerHTML = `${currentTemp}°${currentUnit}`
    } else {
        currentTemp = (currentTemp * 9 / 5 + 32).toFixed(0)
        currentUnit = "F"
        cityTemp.innerHTML = `${currentTemp}°${currentUnit}`
    }
}