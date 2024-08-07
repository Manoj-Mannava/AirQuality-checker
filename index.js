const form = document.getElementById("form");
const lati = document.getElementById("latitude");
const longi = document.getElementById("longitude");
const res = document.getElementById("result");
const aqires = document.getElementById("aqi");
const cores = document.getElementById("co");
const no2res = document.getElementById("no2");
const o3res = document.getElementById("o3");
const pm25res = document.getElementById("pm25");
const pm10res = document.getElementById("pm10");
const so2res = document.getElementById("so2");
const resultContainer = document.getElementById("result");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const latitude = lati.value;
    const longitude = longi.value;
    const url = `https://air-quality.p.rapidapi.com/history/airquality?lon=${longitude}&lat=${latitude}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'f0c32c2e70msh50501e2fde39a9ap1f5b8djsn4ca2060268b1',
            'x-rapidapi-host': 'air-quality.p.rapidapi.com'
        }
    };
    fetch(url, options)
        .then(response => response.json())
        .then(result => {
            let readings = result.data[0];
            console.log(readings);
            aqires.textContent = readings.aqi;
            cores.textContent = readings.co;
            no2res.textContent = readings.no2;
            pm25res.textContent = readings.pm25;
            o3res.textContent = readings.o3;
            pm10res.textContent = readings.pm10;
            so2res.textContent = readings.so2;
            resultContainer.style.display = 'flex';
        })

});