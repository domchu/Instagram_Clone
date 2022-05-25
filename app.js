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
