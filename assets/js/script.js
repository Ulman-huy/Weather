const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const city = $('.city')
const country = $('.country')
const celsius = $('.temperature-num')
const state = $('.state')
const humidity = $('.humidity')
const visibility = $('.visibility')
const speed = $('.speed')
const search = $('.search')
const content = $('.weather-content')
const desc = $('.desc')
async function App(){
    let cityName = search.value.trim().toLowerCase()
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName ? cityName : 'viet tri'}&appid=ac851038b5a3510c99852b70cff62d96`
    
    const data = await fetch(URL)
                        .then(res => res.json())
    
    if(data.cod == 200) {
        content.classList.remove('hide')
        desc.classList.remove('hide')

        city.innerText = data.name
        country.innerText = data.sys.country
        celsius.innerText = Math.round(data.main.temp - 273.15)
        state.innerText = data.weather[0].description
        humidity.innerText = data.main.humidity + "%"
        visibility.innerText = data.visibility
        speed.innerText = data.wind.speed
    } else {
        content.classList.add('hide')
        desc.classList.add('hide')
    }
}
App()
search.addEventListener('keypress', function(e){
    if(e.code === 'Enter')
        App()
})


