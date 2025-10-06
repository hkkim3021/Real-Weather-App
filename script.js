const apiKey = // put in API key here
const searchBtn = document.getElementById('searchBtn')
const cityInput = document.getElementById('cityInput')
const weatherInfo = document.getElementById('weatherInfo')
const cityName = document.getElementById('cityName')
const temperature = document.getElementById('temperature')
const condition = document.getElementById('condition')

searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim()
    if (city !== ''){
        getWeather(city)
    }
})

async function getWeather(city) {
    try {
        const res = await fetch (

        )
        if (!res.ok) throw new Error('City not found')
        const data = await res.json()

        cityName.textContent = data.name 
        temperature.textContent = `Temperature: ${data.main.temp}°C`
        condition.textContent = `Condition: ${data.weather[0].description}`
        weatherInfo.classList.remove('hidden')
    } catch (err) {
        alert(err.message)
        weatherInfo.classList.add('hidden')
    }
}