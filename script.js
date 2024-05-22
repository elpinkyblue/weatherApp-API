const apiKey = "07d5ed36c713c48f704310b3c74a7d15"
const urlBase= "https://api.openweathermap.org/data/2.5/weather"
const diferenciaKelvin = 273.15

function mostrarDatosClima(infoClima) {
    let divDatosClima = document.getElementById("datosClima")
    divDatosClima.innerHTML=""


    const elementoNombreCiudad = document.createElement("h1")
    elementoNombreCiudad.textContent = `${infoClima.name}, ${infoClima.sys.country}`

    let temperatura = Math.round((infoClima.main.temp - diferenciaKelvin)*100) / 100
    const elementoTemperatura = document.createElement("h2")
    elementoTemperatura.textContent = `Temperature: ${temperatura}°C`

    const elementoDescripcion = document.createElement("p")
    elementoDescripcion.textContent = `More info: ${infoClima.weather[0].description}` 

    const icono = infoClima.weather[0].icon
    const elementoIcono = document.createElement("img")
    elementoIcono.src = `https://openweathermap.org/img/wn/${icono}.png` 
    
    divDatosClima.appendChild(elementoNombreCiudad)
    divDatosClima.appendChild(elementoTemperatura)
    divDatosClima.appendChild(elementoDescripcion)
    divDatosClima.appendChild(elementoIcono)
}

function fetchInfoClima(ciudad) {
    fetch(`${urlBase}?q=${ciudad}&appid=${apiKey}`)
    // fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=07d5ed36c713c48f704310b3c74a7d15")
    .then(response => response.json())
    .then(response => mostrarDatosClima(response))
    
}

document.getElementById("buttonBusqueda").addEventListener("click", () => {
    const inputCiudad = document.getElementById("ciudadEntrada").value
    if (inputCiudad) {
        let infoClima = fetchInfoClima(inputCiudad)
    }
})
