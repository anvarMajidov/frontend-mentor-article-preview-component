let socialMediaBox = document.querySelector(".social-media-links");
let footerSection = document.querySelector(".footer__section");
let button = document.querySelector(".footer__share-btn");

let isClicked = true;
button.addEventListener("click", (e) => {
  if (isClicked) {
    button.classList.add("active");
    socialMediaBox.classList.add("active");
    footerSection.classList.add("active");

    isClicked = false;
  } else {
    button.classList.remove("active");
    socialMediaBox.classList.remove("active");
    footerSection.classList.remove("active");

    isClicked = true;
  }
});
