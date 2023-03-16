'use strict';

// ADD EVENT LISTENER ON MULTIPLE ELEMENTS

const addEventOnElements = function (elements, eventType, callback){
  for (let i = 0; i < elements.length; i++){
    elements[i].addEventListener(eventType, callback);
  }
}

// NAVBAR TOGGLE FOR MOBILE
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]")

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
    
}

addEventOnElements(navTogglers, "click", toggleNavbar)

// Active header when window scroll down to 100px

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function (){
    if (this.window.scrollY > 100) {
        header.classList.add("active");
    }else {
        header.classList.remove("active");
    }
})

// SLIDER

// get the slider elements
const slider = document.querySelector("[data-slider]");
const sliderInner = document.querySelector("[data-slider-container]");
const prevBtn = document.querySelector("[data-slider-prev]");
const nextBtn = document.querySelector("[data-slider-next]");

// set the starting index to 0
let currentIndex = 0;

// function to show the previous image
prevBtn.addEventListener("click", function() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = sliderInner.children.length -2;
  }
  sliderInner.style.transform = "translateX(-" + (currentIndex * 100) + "%)";
});

// function to show the next image
nextBtn.addEventListener("click", function() {
  currentIndex++;
  if (currentIndex >= sliderInner.children.length -1) {
    currentIndex = 0;
  }
  sliderInner.style.transform = "translateX(-" + (currentIndex * 100) + "%)";
});

