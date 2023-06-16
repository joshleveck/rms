import { throw_exception } from "./exception";

const modal = document.querySelector(".modal") ?? throw_exception("Could not get modal");
const overlay = document.querySelector(".overlay") ?? throw_exception("Could not get overlay");
const openModalBtn = document.querySelector(".btn-open") ?? throw_exception("Could not get open modal button");
const closeModalBtn = document.querySelector(".btn-close") ?? throw_exception("Could not get close modal button");

// close modal function
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// close the modal when the close button and overlay is clicked
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// open modal function
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
// open modal event
openModalBtn.addEventListener("click", openModal);