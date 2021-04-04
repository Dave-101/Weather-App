// const { response } = require("express");

const citynameEl = document.getElementById("cityname");
const submitBtn = document.getElementById("submit");
const city = document.getElementById("city");
const country = document.getElementById("country");
const temperature = document.getElementById("temperature");
const tempStatus = document.getElementById("temp-status");
const humidity = document.getElementById("humidity");
const tempMax = document.getElementById("temp_max");
const tempMin = document.getElementById("temp_min");
// const middleEl = document.getElementsByClassName("middle-layer");

date();
month();

const getInfo = async(e) => {
    e.preventDefault();
    let cityVal = citynameEl.value;
    if(cityVal === ""){
        city.innerText = "Please enter your city name!";
        country.innerText = "";
    }else{
        try{
            let api = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=17e3a0735bac6c5bfe3bc931c23f1df3`;
            const resp = await fetch(api);
            const data = await resp.json();
            console.log(data);
            
            city.innerText = data.name;
            country.innerText = data.sys.country;
            temerature.innerText = data.main.temp + "°C";
            tempStatus.innerText = "Status: " + data.weather[0].main;
            humidity.innerText = "Humidity: " + data.main.humidity + "%";
            tempMax.innerText = "Maximum: " + data.main.temp_max + "°C";
            tempMin.innerText = "Minimum: " + data.main.temp_min + "°C";
            
            // console.log(temerature.innerText);
            // console.log(tempStatus.innerText);
            // console.log(country.innerText);
            // console.log(city.innerText);
        }catch{
            city.innerText = "City not found!";
            country.innerText = "";
            temerature.innerText = "";
            tempStatus.innerText = "";
            humidity.innerText = "";
            tempMin.innerText = "";
            tempMax.innerText = "";
        }
    }
}

submitBtn.addEventListener("click", getInfo);

function date() {
    var a = new Date();
    var weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";
    var r = weekdays[a.getDay()];
    document.getElementById("day").innerHTML = r;
}

function month() {
    var a = new Date();
    var weekdays = new Array(12);
    weekdays[0] = "JAN";
    weekdays[1] = "FEB";
    weekdays[2] = "MAR";
    weekdays[3] = "APR";
    weekdays[4] = "MAY";
    weekdays[5] = "JUN";
    weekdays[6] = "JULY";
    weekdays[7] = "AUG";
    weekdays[8] = "SEP";
    weekdays[9] = "OCT";
    weekdays[10] = "NOV";
    weekdays[11] = "DEC";
    var D = a.getDate();
    var Y = a.getFullYear();
    var M = weekdays[a.getMonth()];
    document.getElementById("date").innerText = D + "/" + M + "/" + Y;
}

