const display = document.getElementById("display-screen");

function showInDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
    display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Error";
    }
}

dragElement(document.querySelector("#calculator"));

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



const calculatorWindow = document.getElementById("calculator");
const calcIcon = document.querySelector("#calc-icon")

function closeCalculatorWindow() {
    calculatorWindow.style.display = "none";
    calcIcon.style.border = "none";
}


function openCalculatorWindow() {
    calculatorWindow.style.display = "block";
        calcIcon.style.borderStyle = "solid";
        calcIcon.style.borderColor = "white";
        calcIcon.style.borderWidth = "5px";
        calcIcon.style.borderHeight = "70px";
        calcIcon.style.borderLeft = "0px";
        calcIcon.style.borderTop = "0px";
        calcIcon.style.borderRight = "0px";
    
}

function expandCalculatorWindow() {
    calculatorWindow.style.width = "100%";
    calculatorWindow.style.height = "550px";
    calculatorWindow.style.position = "absolute";
    calculatorWindow.style.top = "10%";
    calculatorWindow.style.left = "0px";
}

let expandButton = document.querySelector("#expandCalculator");

 let expandNum = 0;
    expandButton.addEventListener("click", function () {
        const calculatorWindow = document.querySelector("#calculator");
        expandNum = expandNum + 1;

        if (expandNum === 1) {
            expandCalculatorWindow()
            
        } else if (expandNum === 2) {
            calculatorWindow.style.width = "400px";
            calculatorWindow.style.height = "470px";
            calculatorWindow.style.position = "absolute";
            calculatorWindow.style.top = "160px";
            calculatorWindow.style.left = "35%";
            expandNum = 0;
        }
    });

    const selector = document.getElementsByClassName("selected");

    let selecticon = undefined;
    const calculaterIcon = document.getElementById("calc-icon");
    function selectIcon(element) {
        element.classList.add("selected");
        selecticon = element;
        selecticon.style.borderStyle = "solid";
        selecticon.style.borderColor = "white";
        selecticon.style.borderWidth = "5px";
        selecticon.style.borderHeight = "70px";
        selecticon.style.borderLeft = "0px";
        selecticon.style.borderTop = "0px";
        selecticon.style.borderRight = "0px";
    }

    function deselectIcon(element) {
        element.classList.remove("selected");
        selecticon = element;
        selecticon.style.borderBottom = "0px";
    }

    function calcIconTap(element) {
        if(element.classList.contains("selected")) {
            deselectIcon(element)
            closeCalculatorWindow()
        } else {
            selectIcon(element)
            openCalculatorWindow()
        }
    }
