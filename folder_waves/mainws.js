
const wrapper = document.querySelector(".wrapper"),
  carousel = document.querySelector(".carousel"),
  images = carousel.querySelectorAll("img"),
  buttons = document.querySelectorAll(".button");

console.log(wrapper, carousel, images, buttons);

let imageIndex = 1,
  intervalId;

const slideImage = () => {

  imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex ;

  carousel.style.transform = `translate(-${imageIndex * 100}%)`;
};

const updateClick = (e) => {
  clearInterval(intervalId);
  imageIndex += e.target.id === "next" ? 1 : -1;
  slideImage(imageIndex);
};

buttons.forEach((button) => button.addEventListener("click", updateClick));
