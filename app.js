let profileImage = [
  {
    photo: "images/aboutme_slider1.jpg",
  },
  {
    photo: "images/aboutme_slider2.jpg",
  },
  {
    photo: "images/aboutme_slider3.jpg",
  },
  {
    photo: "images/aboutme_slider4.jpg",
  },
  {
    photo: "images/aboutme_slider5.jpg",
  },
  {
    photo: "images/testimonal.3.jpg",
  },
];
const allContent = profileImage.map((p) => {
  return `<div class="post">
    <img src="${p.photo}" class="post-img">
  </div>`;
});
document.querySelector(".show").innerHTML = allContent.join("");
// end of the json

let bars = document.querySelector(".bars");
let close = document.querySelector(".close");
let createMenu = document.querySelector(".create-menu");

bars.addEventListener("click", () => {
  createMenu.style.display = "block";
  createMenu.style.height = "400px";
});

close.addEventListener("click", () => {
  createMenu.style.display = "none";
});
// end of the toggle part
