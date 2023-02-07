'use strict';

// Here we first declares the variables to access all the required classes
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
// Here querySelectorAll is used to select all the classes with given name in html file
// otherwise, it will only select the first one that matches...
const btnShowModal = document.querySelectorAll(".show-modal");

// We directly created below functions openModal & closeModal to be accessed whenever given events happen.
const openModal = function() {
    console.log("Button Clicked");
    // We don't use .classname here ass we are not selecting it...
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}
const closeModal = function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

// Opens the MODAL Window
// We can traverse through all the classes selected through querySelectorAll using loops
for(let i=0; i<btnShowModal.length; i++){
    // Calls the openModal function when click event happens for any of the btnShowModal[i]...
    btnShowModal[i].addEventListener("click", openModal);
}
// Closes the MODAL Window
// Notice we didn't use closeModal() here. It is because we don't want to call this function rightaway
// we only want to invoke this function when click event happens
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// Here we adds an event to the whole document so that this can happen anywhere
// We want to close the MODAL window using escape key too
// "keydown" event happens when a key is just pressed on the keyboard
// parameter "event" here is the event object occured when a key is pressed 
document.addEventListener("keydown", function(event){
    // Shows the name of all keys pressed on the keyboard by accessing the "key" value of "event" object...
    // console.log(event.key);
    //If escape key is pressed when modal window is open
    if(event.key === "Escape" && !modal.classList.contains("hidden")){
        // Here we need to call this function ourself
        closeModal();
    }
});