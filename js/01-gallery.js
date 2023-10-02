import { galleryItems } from "./gallery-items.js";
// Change code below this line

const container = document.querySelector(".gallery");

galleryCreate(galleryItems);

container.addEventListener("click", imgClick);

function imgClick(evt) {
  console.dir(evt.target.alt);
  if (evt.target === evt.currentTarget) {
    return;
  }
  const elm = galleryItems.find((item) => item.description === evt.target.alt);
  console.dir(elm);
  
  
  const instance = basicLightbox.create(`
  <img src="${elm.original}" alt="${elm.description}" width="800" height="600">
  
`)

instance.show()
}

function galleryCreate() {
  const arr = [];

  for (let i = 0; i < galleryItems.length; i++) {
    const elm = galleryItems[i];
    const item = `
    <li class="gallery__item">
    <img src="${elm.preview}" alt="${elm.description}" class = "gallery__image data">
     
  </li>`;
    arr.push(item);
  }

  return (container.innerHTML = [...arr]);
}

// console.log(container)
// console.log(galleryItems);
