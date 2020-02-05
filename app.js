// ---------------------------------------------
// Variables
// ---------------------------------------------
const projectThumbnail = document.querySelectorAll(".project-thumbnail");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".modal-close");
const modalContent = document.querySelectorAll(".modal-content");
const projectOverlay = document.querySelectorAll(".projects-overlay");
const project1 = document.querySelector(".project-1");
const project2 = document.querySelector(".project-2");
const project3 = document.querySelector(".project-3");
const project4 = document.querySelector(".project-4");
const project5 = document.querySelector(".project-5");
const project6 = document.querySelector(".project-6");

// ---------------------------------------------
// MODAL
// ---------------------------------------------

// Open modal when clicked on img
for (const img of projectThumbnail) {
  img.addEventListener("click", e => {
    overlay.classList.remove("hidden");

    let attr = e.target.getAttribute("alt");

    if (attr === "project 1") {
      project1.classList.remove("hidden");
    } else if (attr === "project 2") {
      project2.classList.remove("hidden");
    } else if (attr === "project 3") {
      project3.classList.remove("hidden");
    } else if (attr === "project 4") {
      project4.classList.remove("hidden");
    } else if (attr === "project 5") {
      project5.classList.remove("hidden");
    } else if (attr === "project 6") {
      project6.classList.remove("hidden");
    }
  });
}

// Open modal when clicked on project overlays
for (const projects of projectOverlay) {
  projects.addEventListener("click", e => {
    overlay.classList.remove("hidden");

    let attr = e.target.getAttribute("data-for");

    if (attr === "project-1") {
      project1.classList.remove("hidden");
    } else if (attr === "project-2") {
      project2.classList.remove("hidden");
    } else if (attr === "project-3") {
      project3.classList.remove("hidden");
    } else if (attr === "project-4") {
      project4.classList.remove("hidden");
    } else if (attr === "project-5") {
      project5.classList.remove("hidden");
    } else if (attr === "project-6") {
      project6.classList.remove("hidden");
    }
  });
}

// Close Modal
closeModal.addEventListener("click", () => {
  overlay.classList.add("hidden");

  for (const content of modalContent) {
    content.classList.add("hidden");
  }
});

// window.onclick = function(event) {
//   if (event.target == overlay) {
//     overlay.style.display = "none";
//   }
// };

// ---------------------------------------------
// TYPEWRITER
// ---------------------------------------------

const typeWriter = function(txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = "";
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
};

// Type Method
typeWriter.prototype.type = function() {
  // Current index of word
  const current = this.wordIndex % this.words.length;
  // Get full text of current word
  const fullTxt = this.words[current];

  // Check if deleting
  if (this.isDeleting) {
    // Remove char
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    // Add char
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  // Insert txt into element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  // Initial Type Speed
  let typeSpeed = 100;

  if (this.isDeleting) {
    typeSpeed /= 2;
  }

  // If word is complete
  if (!this.isDeleting && this.txt === fullTxt) {
    // Make pause at end
    typeSpeed = this.wait;
    // Set delete to true
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    // Move to next word
    this.wordIndex++;
    // Pause before start typing
    typeSpeed = 500;
  }

  setTimeout(() => this.type(), typeSpeed);
};

// Init On DOM Load
document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  // Init typeWriter
  new typeWriter(txtElement, words, wait);
}
