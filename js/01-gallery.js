import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

const images = [];

for (const image of galleryItems) {
  const liElement = document.createElement("li");

  const divElement = document.createElement("div");
  divElement.classList.add("gallery__item");

  const aElement = document.createElement("a");
  aElement.classList.add("gallery__link");

  const imgElement = document.createElement("img");
  imgElement.classList.add("gallery__image");
  imgElement.src = image.preview;
  imgElement.dataSource = image.original;
  imgElement.alt = image.description;

  liElement.append(divElement);
  divElement.append(aElement);
  aElement.append(imgElement);
  images.push(liElement);
}

galleryList.append(...images);

galleryList.addEventListener("click", (e) => {
  console.log({ target: e.target, currentTarget: e.currentTarget });
  const dataSource = e.target.dataSource;
  if (typeof dataSource === "undefined") {
    return;
  }
  console.log("obrazek");

  const instance = basicLightbox.create(`
    <img src="${dataSource}" width="800" height="600">
`);

  instance.show();
});
