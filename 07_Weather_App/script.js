const apiKey = "4132fb7c895399bfa34e133bf7b5c2d2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const serachBox = document.querySelector(".search input")
const searchButton = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")


async function checkWeather(city){
    const response = await fetch(apiUrl + city+ `&appid=${apiKey}`)
    const data = await response.json()
    console.log(data)

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
    document.querySelector(".WeatherDes").innerHTML = data.weather[0].description

    

    if(data.weather[0].main == "Cloud"){
        weatherIcon.src = "img/cloud.png"
    }
   else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "img/clear.png"
    }
   else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "img/rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "img/drizzle.png"
    }
   else  if(data.weather[0].main == "Mist"){
        weatherIcon.src = "img/mist.png"
    }
   else  if(data.weather[0].main == "Snow"){
        weatherIcon.src = "img/snow.png"
    }
}
searchButton.addEventListener("click" , () => {
    checkWeather(serachBox.value) 


})
searchBox.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        checkWeather(searchBox.value);
    }
});
