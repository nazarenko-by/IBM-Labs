const apiKey = '5d066958a60d315387d9492393935c19';
function showweatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
      })
      .catch(error => {
                console.error('Error fetching weather:', error);
                const weatherInfo = document.getElementById('weatherInfo');
                weatherInfo.innerHTML = `<p>Не вдалося отримати погоду. Будь ласка, спробуйте ще раз.</p>`;
              });
}



document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );