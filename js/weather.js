const apiKey = "c7969f5949fe48b450c19128a9be943a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherImg = document.querySelector(".weather-img")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds") {
        weatherImg.src = "assets/cloud.png";
    } else if(data.weather[0].main == "Clear") {
        weatherImg.src = "assets/sun.png";
    } else if(data.weather[0].main == "Rain") {
        weatherImg.src = "assets/rain.png";
    } else if(data.weather[0].main == "Drizzle") {
        weatherImg.src = "assets/drizzle.png";
    }  else if(data.weather[0].main == "Mist") {
        weatherImg.src = "assets/mist.png";
    } 

    document.querySelector(".weather-body").style.display = "block";
}

searchBtn.addEventListener("click", function() {
    checkWeather(searchBox.value);
})

dragElement(document.querySelector("#weather"));

function dragElement(elmnt) {

  var initialX = 0, initialY = 0, currentX = 0, currentY = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    initialX = e.clientX;
    initialY = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - currentY) + "px";
    elmnt.style.left = (elmnt.offsetLeft - currentX) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

const weatherScreen = document.querySelector("#weather");
const weatherIcon = document.querySelector("#weather-icon")

function closeWeatherWindow() {
        weatherScreen.style.display = "none";
        weatherIcon.style.border = "none";
}

function openWeatherWindow() {
        weatherScreen.style.display = "block";
        weatherIcon.style.borderStyle = "solid";
        weatherIcon.style.borderColor = "white";
        weatherIcon.style.borderWidth = "5px";
        weatherIcon.style.borderHeight = "70px";
        weatherIcon.style.borderLeft = "0px";
        weatherIcon.style.borderTop = "0px";
        weatherIcon.style.borderRight = "0px";
}

function expandWeatherWindow() {
    weatherScreen.style.width = "100%";
    weatherScreen.style.position = "absolute";
    weatherScreen.style.top = "10%";
    weatherScreen.style.left = "0px";
    weatherImg.style.marginLeft = "43%";
}

let expandWeatherNum = 0;
let expandWeatherBtn = document.querySelector("#expandWeather");
    expandWeatherBtn.addEventListener("click", function () {
        expandWeatherNum = expandWeatherNum + 1;

        if (expandWeatherNum === 1) {
            expandWeatherWindow()
            
        } else if (expandWeatherNum === 2) {
            weatherScreen.style.width = "440px";
            weatherScreen.style.position = "absolute";
            weatherScreen.style.top = "80px";
            weatherScreen.style.left = "50%";
            weatherImg.style.position = "relative";
            weatherImg.style.left = "-12%";
            expandWeatherNum = 0;
        }
    });

    const selecting = document.getElementsByClassName("selected")

    let selectingIcon = undefined;

    const weathericon = document.getElementById("weather-icon");
    function selectIcon(element) {
        element.classList.add("selected");
        selectingIcon = element;
        selectingIcon.style.borderStyle = "solid";
        selectingIcon.style.borderColor = "white";
        selectingIcon.style.borderWidth = "5px";
        selectingIcon.style.borderHeight = "70px";
        selectingIcon.style.borderLeft = "0px";
        selectingIcon.style.borderTop = "0px";
        selectingIcon.style.borderRight = "0px";
    }

    function deselectIcon(element) {
        element.classList.remove("selected");
        selectorIcon = element;
        selectorIcon.style.borderBottom = "0px";
    }

    function weatherIconTap(element) {
        if(element.classList.contains("selected")) {
            deselectIcon(element)
            closeWeatherWindow()
        } else {
            selectIcon(element)
            openWeatherWindow()
        }
    }



