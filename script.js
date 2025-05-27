
const modal = document.getElementById("mypopup");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");


function openModal() {
  modal.style.display = "flex";
  document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Re-enable scrolling
}

// Event listeners
openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);


// // Close modal when clicking outside of it
// window.addEventListener("click", function (event) {
//   if (event.target === modal) {
//     closeModal();
//   }
// });

// // Close modal when pressing ESC key
// document.addEventListener("keydown", function (event) {
//   if (event.key === "Escape") {
//     closeModal();
//   }
// });

// document.getElementById("popupButton").addEventListener("click", function () {
//   document.getElementById("popup").classList.toggle("visible");
// });

// document.querySelector(".close").addEventListener("click", function () {
//   document.getElementById("popup").classList.remove("visible");
// });
