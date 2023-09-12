const API_KEY = "8a072af23f26fe3f908a7a259d3f5d79";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const locationInput = document.getElementById("locationInput");
const getWeatherButton = document.getElementById("getWeatherButton");
const weatherContainer = document.getElementById("weatherContainer");
const units = "metric";
getWeatherButton.addEventListener("click", () => {
  const location = locationInput.value.trim();

  if (location) {
    const apiUrl = `${BASE_URL}?q=${location}&appid=${API_KEY}&units=${units}`;

    fetch(apiUrl)
      .then((res) => res.json())
    //   .then((data) => console.log(data))
      .then((data) => {
        const div = document.getElementById("weatherContainer");
        div.innerHTML = `Temperature: ${data.main.temp}°C<br>
          Weather: ${data.weather[0].description}<br>
          Humidity: ${data.main.humidity}%<br>
          Wind Speed: ${data.wind.speed} m/s`;
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      })
  }
});
