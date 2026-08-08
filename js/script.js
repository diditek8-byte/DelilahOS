import App from "./App.js";

const root = document.getElementById("app");
const app = new App(root);

function updateTime() {
let currentTime = new Date().toLocaleString();
let timeText = document.querySelector("#time");
timeText.innerHTML = currentTime
}
setInterval(updateTime, 1000);

updateTime()

dragElement(document.querySelector("#about"));
dragElement(document.querySelector("#app"));

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

window.closeWindow = function closeWindow() {
   let aboutScreen = document.querySelector("#about");
    aboutScreen.style.display = "none";
    
    }
  


window.openWindow = function openWindow() {
    let aboutScreen = document.querySelector("#about");
    aboutScreen.style.display = "block";
    }



window.expandWindow = function expandWindow() {
    let aboutScreen = document.querySelector("#about");
    let aboutheaderScreen = document.querySelector("#aboutheader");
    let window_btn = document.querySelector("#window-btn");

    aboutScreen.style.width = "100%";
    aboutScreen.style.position = "absolute";
    aboutScreen.style.top = "10%";
    aboutScreen.style.left = "0px";
    aboutheaderScreen.style.width = "100%";
    aboutheaderScreen.style.position = "relative";
    aboutheaderScreen.style.left = "-20%";
    
    
}

let expand_btn = document.querySelector("#expand");

 let expand_num = 0;
    expand_btn.addEventListener("click", function () {
        let aboutScreen = document.querySelector("#about");
        expand_num = expand_num + 1;

        if (expand_num === 1) {
            expandWindow()
            
        } else if (expand_num === 2) {
            aboutScreen.style.width = "450px";
            aboutScreen.style.position = "absolute";
            aboutScreen.style.top = "120px";
            aboutScreen.style.left = "20%";
            expand_num = 0;
        }


    });



    const selected = document.getElementsByClassName("selected")

    
    let selectedIcon = undefined;

    const notesicon = document.getElementById("icon-pic");
    window.selectIcon = function selectIcon(element) {
        element.classList.add("selected");
        selectedIcon = element;
        selectedIcon.style.borderStyle = "solid";
        selectedIcon.style.borderColor = "white";
        selectedIcon.style.borderWidth = "5px";
        selectedIcon.style.borderHeight = "70px";
        selectedIcon.style.borderLeft = "0px";
        selectedIcon.style.borderTop = "0px";
        selectedIcon.style.borderRight = "0px";
    }

    window.deselectIcon = function deselectIcon(element) {
        element.classList.remove("selected");
        selectedIcon = element;
        selectedIcon.style.borderBottom = "0px";
    }

    window.iconTap = function iconTap(element) {
        if(element.classList.contains("selected")) {
            deselectIcon(element)
            closeNotesWindow()
        } else {
            selectIcon(element)
            openNotesWindow()
        }
    }

    window.closeNotesWindow = function closeNotesWindow() {
         let notesScreen = document.querySelector("#app");
         notesScreen.style.display = "none";
         notesicon.style.border = "none";
    }

    window.openNotesWindow = function openNotesWindow() {
        let notesScreen = document.querySelector("#app");
        notesScreen.style.display = "block";
        notesicon.style.borderStyle = "solid";
        notesicon.style.borderColor = "white";
        notesicon.style.borderWidth = "5px";
        notesicon.style.borderHeight = "70px";
        notesicon.style.borderLeft = "0px";
        notesicon.style.borderTop = "0px";
        notesicon.style.borderRight = "0px";
    }

       const bodyText = document.querySelector("#notes-body");
        const notesTitle = document.querySelector("#notes-title");

    window.expandNotesWindow = function expandNotesWindow() {
        const notesScreen = document.querySelector("#app");
        const notesheaderScreen = document.querySelector("#appheader");
        const bodyText = document.querySelector("#notes-body")
        const notesTitle = document.querySelector("#notes-title")

        notesScreen.style.width = "100%";
        notesScreen.style.position = "absolute";
        notesScreen.style.top = "10%";
        notesScreen.style.left = "0px";
        notesheaderScreen.style.width = "100%";
    }

    let expandNotesBtn = document.querySelector("#expand-notes");

    let expandNotesNum = 0;
    expandNotesBtn.addEventListener("click", function () {
       let notesScreen = document.querySelector("#app");
        expandNotesNum = expandNotesNum + 1;

        if (expandNotesNum === 1) {
            expandNotesWindow()
            bodyText.style.width = "750px";
            notesTitle.style.width = "750px";
            
        } else if (expandNotesNum === 2) {
            notesScreen.style.width = "550px";
            notesScreen.style.position = "absolute";
            notesScreen.style.top = "120px";
            notesScreen.style.left = "50%";
            bodyText.style.width = "300px";
            notesTitle.style.width = "300px";
            expandNotesNum = 0;
        }


    });

    