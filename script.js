const apiKey = 'd6fddfabec23406d49784fc0dbb4c1a9';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const forecastElement = document.getElementById('forecast');
const iconElement = document.getElementById('weatherIcon');

searchButton.addEventListener('click', () => {
  const location = locationInput.value;
  if (location) {
    fetchWeather(location);
    fetchForecast(location);
  }
});

function fetchWeather(location) {
  const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      locationElement.textContent = data.name;
      temperatureElement.textContent = `${Math.round(data.main.temp)} °C`;
      descriptionElement.textContent = data.weather[0].description;
        //  Set the weather icon
        const iconCode = data.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
        iconElement.src = iconUrl;
        iconElement.alt = data.weather[0].main;
    })
    .catch(error => {
      console.error('Error fetching current weather data:', error);
    });
}

function fetchForecast(location) {
  const url = `${forecastUrl}?q=${location}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Extract and display 5-day forecast details here
      displayForecast(data);
    })
    .catch(error => {
      console.error('Error fetching forecast data:', error);
    });
}

function displayForecast(forecastData) {
  // Clear previous forecast data
  forecastElement.innerHTML = '';

  // Extract and display forecast details dynamically
  for (const forecast of forecastData.list) {
    const forecastDate = new Date(forecast.dt * 1000); // Convert timestamp to Date object
    const dayOfWeek = forecastDate.toLocaleDateString('en-US', { weekday: 'short' });
    const temperature = `${Math.round(forecast.main.temp)} °C`;
    const description = forecast.weather[0].description;
    
    // Set the weather icon for each forecast day
    const iconCode = forecast.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;

    // Create forecast card element
    const forecastCard = document.createElement('div');
    forecastCard.classList.add('forecast-card');
    
    // Populate forecast card with details
    forecastCard.innerHTML = `<p>${dayOfWeek}</p><p>${temperature}</p><p>${description}</p>`;

    // Append forecast card to forecast element
    forecastElement.appendChild(forecastCard);
  }
}

