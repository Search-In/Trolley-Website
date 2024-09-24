// Sample JavaScript Code
document.addEventListener("DOMContentLoaded", () => {
  console.log("Website is loaded and ready")
})

// JavaScript for activating the clicked card
function activateCard(step) {
  // Remove 'active' class from all cards
  document.querySelectorAll(".step-card").forEach((card) => {
    card.classList.remove("active")
  })
  // Add 'active' class to the clicked card
  document.querySelectorAll(".step-card")[step - 1].classList.add("active")
}

// JavaScript to handle mouse movement over the image
document.addEventListener("mousemove", function (event) {
  const screenContent = document.querySelector(".screen-content")
  const { clientX, clientY, target } = event

  // Calculate rotation values
  const xRotation = (clientY / window.innerHeight - 0.5) * 90 // Range: -15 to 15
  const yRotation = (clientX / window.innerWidth - 0.5) * -50 // Range: -15 to 15

  // Apply rotation
  screenContent.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`
})

// Reset rotation on mouse leave
document
  .querySelector(".screen-content")
  .addEventListener("mouseleave", function () {
    this.style.transform = "rotateX(0deg) rotateY(0deg)"
  })
