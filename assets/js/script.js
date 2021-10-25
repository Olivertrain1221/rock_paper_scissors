// modal container element assignement
let modalContainer = document.getElementById("modal-container");
let button = document.getElementById("button-instruction");
let closeInstructionButton = document.getElementById("close-button")

button.addEventListener("click", openModal);
// modalContainer.addEventListener("click", closeModal);
closeInstructionButton.addEventListener("click", closeModal);

// Event listener for whole window to run the modalContainerClick func.
window.addEventListener("click", modalContainerClick);

// Opens the instruction modal
function openModal(){
    modalContainer.style.display = "block";
}

// 
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



