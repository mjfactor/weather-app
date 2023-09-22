const apiKey = "81449ffe2147b6586e05cc7f63f88d8f"
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchInput = document.querySelector(".search-container input");
const searchButton = document.querySelector(".search-container button");
const weatherIcon = document.querySelector(".weather-icon");

async function getWeather(city) {
    const response = await fetch(apiURL + city + "&appid=" + apiKey);
    if (response.status === 404 || response.status === 404) {
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".error").style.display = "block";
    } else {
        document.querySelector(".error").style.display = "none";
        const data = await response.json();
        document.querySelector(".city").innerText = data.name;
        document.querySelector(".temp").innerText = data.main.temp + "°C";
        document.querySelector(".humidity").innerText = data.main.humidity + "%";
        document.querySelector(".wind").innerText = data.wind.speed + "km/h";
        if (data.weather[0].main === "Clear") {
            weatherIcon.src = "images/clear.png";
        } else if (data.weather[0].main === "Clouds") {
            weatherIcon.src = "images/clouds.png";
        } else if (data.weather[0].main === "Snow") {
            weatherIcon.src = "images/snow.png";
        } else if (data.weather[0].main === "Mist") {
            weatherIcon.src = "images/mist.png";
        } else if (data.weather[0].main === "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        document.querySelector(".weather").style.display = "block";
    }


}

searchButton.addEventListener("click", () => {
    getWeather(searchInput.value); //fetch country name from input
    searchInput.value = ""; //clear search input
})
searchInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        searchButton.click();
    }
})




