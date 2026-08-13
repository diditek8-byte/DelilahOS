const firstImg = document.getElementById("first-img");
const secondImg = document.getElementById("second-img");
const thirdImg = document.getElementById("third-img");
const fourthImg = document.getElementById("fourth-img");
const fifthImg = document.getElementById("fifth-img");
const sixthImg = document.getElementById("sixth-img");
const displayBackground = document.getElementById("display");

const body = document.querySelector(".background");
const mainBackground = document.querySelector(".background");
const appNames = document.getElementsByClassName("app-name");

firstImg.addEventListener("click", function() {
    for (let a of appNames) {
      a.style.color = "white";
    }

    displayBackground.innerHTML = "";

    const setbackground = document.createElement("video");
    setbackground.id = "starbackground";

      setbackground.src = "assets/star.mp4"
      setbackground.autoplay = true;
      setbackground.loop = true;
      setbackground.muted = true;
      setbackground.style.width = "100vw";
      setbackground.style.height = "100vh";
      setbackground.style.zIndex = "-10";
      setbackground.style.marginTop = "0px"


      displayBackground.appendChild(setbackground);
});

secondImg.addEventListener("click", function() {
    mainBackground.style.backgroundImage = "none"
    for (let a of appNames) {
      a.style.color = "white";
    }

    displayBackground.innerHTML = "";

    const setbackground = document.createElement("video")
    setbackground.id = "cherrybackground"

      setbackground.src = "assets/cherryblossom.mp4";
      setbackground.autoplay = true;
      setbackground.loop = true;
      setbackground.muted = true;
      setbackground.style.width = "100vw";
      setbackground.style.height = "100vh";
      setbackground.style.zIndex = "-10";
      setbackground.style.marginTop = "0px";

      displayBackground.appendChild(setbackground); 
});

thirdImg.addEventListener("click", function() {
    mainBackground.style.backgroundImage = "none"
    for (let a of appNames) {
      a.style.color = "white";
    }

    displayBackground.innerHTML = "";
    const setbackground = document.createElement("video")
    setbackground.id = "fujibackground"

      setbackground.src = "assets/mountfuji.mp4";
      setbackground.autoplay = true;
      setbackground.loop = true;
      setbackground.muted = true;
      setbackground.style.width = "100vw";
      setbackground.style.height = "100vh";
      setbackground.style.zIndex = "-10";
      setbackground.style.position = "fixed";
      setbackground.style.top = "0";
      setbackground.style.left = "0";


      displayBackground.appendChild(setbackground); 
});

fourthImg.addEventListener("click", function() {
     for (let a of appNames) {
      a.style.color = "black";
    }
     displayBackground.innerHTML = "";
    const setbackground = document.createElement("img");

    setbackground.src = "assets/lightbackground.jpg";
    setbackground.style.width = "100vw";
    setbackground.style.height = "100vh";

    displayBackground.appendChild(setbackground);

});

fifthImg.addEventListener("click", function() {
    for (let a of appNames) {
      a.style.color = "black";
    }
    displayBackground.innerHTML = "";
    const setbackground = document.createElement("img");

    setbackground.src = "assets/space-background.png";
    setbackground.style.width = "100vw";
    setbackground.style.height = "100vh";

    displayBackground.appendChild(setbackground);

});

sixthImg.addEventListener("click", function() {
    for (let a of appNames) {
      a.style.color = "black";
    }
    displayBackground.innerHTML = "";
    const setbackground = document.createElement("img");

    setbackground.src = "assets/cloud-background.jpg";
    setbackground.style.width = "100vw";
    setbackground.style.height = "100vh";

    displayBackground.appendChild(setbackground);

});

const settingsScreen = document.querySelector("#setting")
const settingsIcon = document.querySelector("#setting-icon")

function closeSettingsWindow() {
        settingsScreen.style.display = "none";
        settingsIcon.style.border = "none";
}

function openSettingsWindow() {
        settingsScreen.style.display = "block";
        settingsIcon.style.borderStyle = "solid";
        settingsIcon.style.borderColor = "white";
        settingsIcon.style.borderWidth = "5px";
        settingsIcon.style.borderHeight = "70px";
        settingsIcon.style.borderLeft = "0px";
        settingsIcon.style.borderTop = "0px";
        settingsIcon.style.borderRight = "0px";
}

function expandSettingsWindow() {
    settingsScreen.style.width = "100%";
    settingsScreen.style.position = "absolute";
    settingsScreen.style.top = "20%";
    settingsScreen.style.left = "0px";
}

let expandSettingsNum = 0;
let expandSettingsBtn = document.querySelector("#expandSetting");
    expandSettingsBtn.addEventListener("click", function () {
        expandSettingsNum = expandSettingsNum + 1;

        if (expandSettingsNum === 1) {
            expandSettingsWindow()
            
        } else if (expandSettingsNum === 2) {
            settingsScreen.style.width = "500px";
            settingsScreen.style.height = "300px";
            settingsScreen.style.position = "absolute";
            settingsScreen.style.top = "80px";
            settingsScreen.style.left = "50%";
            expandSettingsNum = 0;
        }
    });

const selectsettings = document.getElementsByClassName("selected");
let selectingsettingsIcon = undefined;
const settingsicon = document.getElementById("setting-icon");
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
        selectingsettingsIcon = element;
        seletingsettingsIcon.style.borderBottom = "0px";
    }

    function settingsIconTap(element) {
        if(element.classList.contains("selected")) {
            deselectIcon(element)
            closeSettingsWindow()
        } else {
            selectIcon(element)
            openSettingsWindow()
        }
    }

dragElement(document.querySelector("#setting"));

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

const wallpaperBtn = document.getElementById("wallpaper");
const wallpaperSide = document.getElementById("wallpaper-side");
const displayBtn = document.querySelector("#display-controls");
const displaySide = document.getElementById("display-container")

wallpaperBtn.addEventListener("click", function() {
    wallpaperSide.style.display = "block";
    wallpaperBtn.style.borderColor = "white";
    wallpaperBtn.style.boxShadow = "2px 0 2px 2px white";
    displaySide.style.display = "none";
    displayBtn.style.borderColor = "black";
    displayBtn.style.boxShadow = "2px 0 2px 2px black";
});

displayBtn.addEventListener("click", function() {
    displaySide.style.display = "grid";
    displayBtn.style.borderColor = "white";
    displayBtn.style.boxShadow = "2px 0 2px 2px white";
    wallpaperSide.style.display = "none";
    wallpaperBtn.style.borderColor = "black";
    wallpaperBtn.style.boxShadow = "2px 0 2px 2px black";
});


const calenderbackground = document.getElementById("calendar");
const topbarbackground = document.getElementById("top-bar")
const bottombarbackground = document.getElementById("bottom-bar")
const redBtn = document.getElementById("red");
const orangeBtn = document.getElementById("orange");
const yellowBtn = document.getElementById("yellow");
const greenBtn = document.getElementById("green");
const blueBtn = document.getElementById("blue");
const purpleBtn = document.getElementById("purple");
const pinkBtn = document.getElementById("pink");
const blackBtn = document.getElementById("black");

redBtn.addEventListener("click", function() {
    calenderbackground.style.backgroundColor = "#720002";
    topbarbackground.style.backgroundColor = "#720002";
    bottombarbackground.style.backgroundColor = "#720002";
});

orangeBtn.addEventListener("click", function() {
    calenderbackground.style.backgroundColor = "#cb553d";
    topbarbackground.style.backgroundColor = "#cb553d";
    bottombarbackground.style.backgroundColor = "#cb553d";
});

yellowBtn.addEventListener("click", function() {
    calenderbackground.style.backgroundColor = "#fadc51";
    topbarbackground.style.backgroundColor = "#fadc51";
    bottombarbackground.style.backgroundColor = "#fadc51";
});

greenBtn.addEventListener("click", function() {
    calenderbackground.style.backgroundColor = "#336f5b";
    topbarbackground.style.backgroundColor = "#336f5b";
bottombarbackground.style.backgroundColor = "#336f5b";
});

blueBtn.addEventListener("click", function() {
    calenderbackground.style.backgroundColor = "darkblue";
    topbarbackground.style.backgroundColor = "darkblue";
    bottombarbackground.style.backgroundColor = "darkblue";
});

purpleBtn.addEventListener("click", function() {
    calenderbackground.style.backgroundColor = "#080826";
    topbarbackground.style.backgroundColor = "#080826";
    bottombarbackground.style.backgroundColor = "#080826";
});

pinkBtn.addEventListener("click", function() {
    calenderbackground.style.backgroundColor = "rgb(121, 35, 63)";
    topbarbackground.style.backgroundColor = "rgb(121, 35, 63)";
    bottombarbackground.style.backgroundColor = "rgb(121, 35, 63)";
});

blackBtn.addEventListener("click", function() {
    calenderbackground.style.backgroundColor = "black";
    topbarbackground.style.backgroundColor = "black";
    bottombarbackground.style.backgroundColor = "black";
});