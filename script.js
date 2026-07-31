
function updateTime() {
let currentTime = new Date().toLocaleString();
let timeText = document.querySelector("#time");
timeText.innerHTML = currentTime
}
setInterval(updateTime, 1000);

updateTime()

dragElement(document.getElementById("about"));

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

let aboutScreen = document.querySelector("#about");

function closeWindow() {
   let aboutScreen = document.querySelector("#about");
    aboutScreen.style.display = "none";
}

function openWindow() {
    let aboutScreen = document.querySelector("#about");
    aboutScreen.style.display = "block";
}

function expandWindow() {
    let aboutScreen = document.querySelector("#about");
    let aboutheaderScreen = document.querySelector("#aboutheader");
    let expand_btn = document.querySelector("#expand");

    aboutScreen.style.width = "100%";
    aboutScreen.style.position = "absolute";
    aboutScreen.style.top = "10%";
    aboutScreen.style.left = "0px";
    aboutheaderScreen.style.width = "100%";

    expand_btn.addEventListener("click", function () {
        if ("click" > 2) {
            aboutScreen.style.width = "450px";
        }
    })
    
}