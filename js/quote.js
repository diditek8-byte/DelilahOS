const quote = document.querySelector(".quote"),
author = document.querySelector(".author .name"),
quoteBtn = document.querySelector(".quotes-btn");

function randomQuote() {
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";

   fetch("https://random-quotes-freeapi.vercel.app/api/random").then(res => res.json()).then(result => {
        console.log(result)
        quote.innerText = result.quote;
        author.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");
    });

}

quoteBtn.addEventListener("click", randomQuote);

dragElement(document.querySelector("#quotes"));

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

const quoteIcon = document.querySelector("#icon-img")

function closeQuotesWindow() {
    const quoteScreen = document.querySelector("#quotes");
        quoteScreen.style.display = "none";
        quoteIcon.style.border = "none";
}

function openQuotesWindow() {
    const quoteScreen = document.querySelector("#quotes");
        quoteScreen.style.display = "block";
        quoteIcon.style.borderStyle = "solid";
        quoteIcon.style.borderColor = "white";
        quoteIcon.style.borderWidth = "5px";
        quoteIcon.style.borderHeight = "70px";
        quoteIcon.style.borderLeft = "0px";
        quoteIcon.style.borderTop = "0px";
        quoteIcon.style.borderRight = "0px";
}

function expandQuotesWindow() {
    const quoteScreen = document.querySelector("#quotes");
    const quotebtn = document.querySelector(".quotes-btn");

    quoteScreen.style.width = "100%";
    quoteScreen.style.position = "absolute";
    quoteScreen.style.top = "10%";
    quoteScreen.style.left = "0px";
    quoteScreen.style.height = "400px";
    quotebtn.style.position = "absolute";
    quotebtn.style.left = "9%";
}
const quotebtn = document.querySelector(".quotes-btn");

let expandQuoteBtn = document.querySelector("#expandQuote");

 let expandQuoteNum = 0;
    expandQuoteBtn.addEventListener("click", function () {
        const quoteScreen = document.querySelector("#quotes");
        expandQuoteNum = expandQuoteNum + 1;

        if (expandQuoteNum === 1) {
            expandWindow()
            
        } else if (expandQuoteNum === 2) {
            quoteScreen.style.width = "400px";
            quoteScreen.style.position = "absolute";
            quoteScreen.style.top = "120px";
            quoteScreen.style.left = "40%";
            quotebtn.style.position = "absolute";
            quotebtn.style.left = "0px";
            expandQuoteNum = 0;
        }
    });

     const selected = document.getElementsByClassName("selected")

    let selectedIcon = undefined;

    const quotesicon = document.getElementById("icon-img");
    function selectIcon(element) {
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

    function deselectIcon(element) {
        element.classList.remove("selected");
        selectedIcon = element;
        selectedIcon.style.borderBottom = "0px";
    }

    function quoteIconTap(element) {
        if(element.classList.contains("selected")) {
            deselectIcon(element)
            closeQuotesWindow()
        } else {
            selectIcon(element)
            openQuotesWindow()
        }
    }


