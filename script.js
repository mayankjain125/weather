function getloc(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        alert("insufficient");
    }
}
function showPosition(position){
    document.getElementById("latitude-data").innerHTML= (position.coords.latitude);
    document.getElementById("longitude-data").innerHTML = (position.coords.longitude);
const api = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=50bc52530202fb56b2243bd672f6e5c5`;
    
    fetch(api)
        .then(response =>{
            return response.json();
        })
        .then(data => {
            document.getElementById("temprature-data").innerHTML = data.main.temp-273 + " °C";
            document.getElementById("description-data").innerHTML = data.weather[0].description;
            document.getElementById("wind-data").innerHTML = data.wind.speed;
        });
    
}

let myval = document.getElementById("search-bar");



document.getElementById("search-btn").addEventListener("click" , function(){
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${myval.value}&appid=50bc52530202fb56b2243bd672f6e5c5`;
    
    fetch(api)
        .then(response =>{
            return response.json();
        })
        .then(data => {
            document.getElementById("latitude-data").innerHTML= (data.coord.lat);
            document.getElementById("longitude-data").innerHTML = (data.coord.lon);
            document.getElementById("temprature-data").innerHTML = (data.main.temp-273) + " °C";
            document.getElementById("description-data").innerHTML = (data.weather[0].description);
            document.getElementById("wind-data").innerHTML = data.wind.speed;
        });
});
