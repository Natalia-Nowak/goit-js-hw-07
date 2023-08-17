import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

const images = [];

for (const image of galleryItems) {
  const liElement = document.createElement("li");

  const aElement = document.createElement("a");
  aElement.classList.add("gallery__item");
  aElement.href = image.original;
  aElement.dataset.title = "amdakd";
  const imgElement = document.createElement("img");
  imgElement.classList.add("gallery__image");
  imgElement.src = image.preview;
  imgElement.alt = image.description;

  liElement.append(aElement);
  aElement.append(imgElement);
  images.push(liElement);
}

galleryList.append(...images);

const lightbox = new SimpleLightbox("ul.gallery a", {});
console.log(lightbox);
