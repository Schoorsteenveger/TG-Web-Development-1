const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openButton = document.querySelector(".open-button");
const closeButton = document.querySelector(".close-button");

function openModal() {
    modal.classList.remove("modal-hidden");
    overlay.classList.add("overlay-hidden");
}

function closeModal() {
    modal.classList.add("modal-hidden");
    overlay.classList.remove("modal-hidden");
}

// document.addEventListener("click", function () {
//     openModal();
// });

openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

console.log(openButton);
console.log(closeButton);