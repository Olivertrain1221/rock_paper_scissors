let userName = "";

// modal container element assignement
let modalContainer = document.getElementById("modal-container");
let buttonInstruction= document.getElementById("button-instruction");
let closeInstructionButton = document.getElementById("close-button");


// modalContainers event listeners to open/close
buttonInstruction.addEventListener("click", openModal);
closeInstructionButton.addEventListener("click", closeModal);

// Event listener for whole window to run the modalContainerClick func.
window.addEventListener("click", modalContainerClick);

// Opens the instruction modal
function openModal(){
    modalContainer.style.display = "block";
}

let mainContainer= document.getElementById("main-container");
let playButton = document.getElementById("button-play");
let trafficLight = document.getElementById("traffic-light");

playButton.addEventListener("click", getUserName);

function getUserName(){
    let nameModal = document.getElementById("name-modal");
    nameModal.style.display = "block";
    let nameSubmitButton = document.getElementById("name-submit");
    nameSubmitButton.addEventListener("click", function(e){
        e.preventDefault();
        let name = document.getElementById("name");
        if (name.value) {
            userName = name.value;
            nameModal.style.display = "none";
            console.log(userName);
            mainContainer.style.display = "none";
            gameStartup();
        } 
        
          
 
    });
};


function closeModal(){
    modalContainer.style.display = "none";
    console.log("testing button")
}
// Closes the instructions modal
function modalContainerClick(e) {
    if (e.target == modalContainer) {
        modalContainer.style.display = "none";
        console.log("testing")
    }
}


function redLightOn() {
    let redLight = document.getElementById("red");
    redLight.style.backgroundColor = "red";
}

function yellowLightOn() {
    let yellowLight = document.getElementById("yellow");
    yellowLight.style.backgroundColor = "yellow";

}
function greenLightOn (){
    let greenLight = document.getElementById("green");
    greenLight.style.backgroundColor = "green";


}

function gameStartup () {
    let trafficLight = document.getElementById("traffic-light");
    trafficLight.style.display = "inline-block";

    // time section for traffic light
    setTimeout(function() {
        redLightOn();        
    }, 2000);

    setTimeout(function() {
        yellowLightOn();
    }, 2500);

    setTimeout(function() {
        greenLightOn();
    }, 3000);
}
