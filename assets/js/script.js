let modalContainer = document.getElementById("modal-container");
let button = document.getElementById("button-instruction");
let buttonPlay = document.getElementById("button-play");

button.addEventListener("click", openModal);
modalContainer.addEventListener("click", closeModal);
buttonPlay.addEventListener("click", openModalPlay)
modalContainer.addEventListener("click", closeModal);

function openModal(){
    modalContainer.style.display = "block";
}


function closeModal(){
    modalContainer.style.display = "none";
}




function openModalPlay(){
    modalContainerPlay.style.display = "block";
}
