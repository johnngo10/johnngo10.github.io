// ---------------------------------------------
// Variables
// ---------------------------------------------
const projectThumbnail = document.querySelectorAll(".project-thumbnail");
const overlay = document.querySelector(".overlay");
const modal = document.getElementById("myModal");
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
// Functions
// ---------------------------------------------

// ---------------------------------------------
// EVENT LISTENERS
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
