let userName = "";

// modal container element assignement
let modalContainer = document.getElementById("modal-container");
let buttonInstruction= document.getElementById("button-instruction");
let closeInstructionButton = document.getElementById("close-button");


buttonInstruction.addEventListener("click", openModal);
// modalContainer.addEventListener("click", closeModal);
closeInstructionButton.addEventListener("click", closeModal);

// Event listener for whole window to run the modalContainerClick func.
window.addEventListener("click", modalContainerClick);

// Opens the instruction modal
function openModal(){
    modalContainer.style.display = "block";
}

let mainContainer= document.getElementById("main-container");
let playButton = document.getElementById("button-play");


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
        } 
        
 // call next function!!!!!
        
               
       
 
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



function gameLogic () {
    
}

