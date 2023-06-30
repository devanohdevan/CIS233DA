// Function to get weather data from OpenWeather API function
getWeatherData(latitude, longitude) { const apiKey =
    "02994ce022cf3771383f59b05c819664 "; var cityName =
    document.getElementById("cityName").value; const apiUrl =
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;
    // Fetch weather data fetch(apiUrl) .then((response) => response.json())
    .then((data) => { // Update weather information on the page
    document.getElementById("location").textContent = data.name;
    document.getElementById("temperature").textContent = data.main.temp;
    document.getElementById("description").textContent =
    data.weather[0].description; // Show weather information
    document.getElementById("weather-info").style.display = "block"; })
    .catch((error) => { console.log("Error occurred while fetching weather data:",
    error); }); } // Attach click event listener to the location button
    document.getElementById("location-btn").addEventListener("click",
    getWeatherData);
    