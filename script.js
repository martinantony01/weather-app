async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'b307f6e1806d6fd962669b0bcea1ecc9'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const errorMessage = document.getElementById('error-message');
        const weatherInfo = document.getElementById('weather-info');

        if (data.cod === 200) {
            errorMessage.textContent = '';
            document.getElementById('city-name').textContent = data.name;
            document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
            document.getElementById('description').textContent = data.weather[0].description;
            document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            weatherInfo.style.display = 'block';
        } else {
            errorMessage.textContent = 'City not Found!';
            weatherInfo.style.display = 'none';
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('error-message').textContent = 'Error fetching weather data';
        document.getElementById('weather-info').style.display = 'none';
    }
}
