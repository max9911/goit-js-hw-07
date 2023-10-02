import { galleryItems } from "./gallery-items.js";
// Change code below this line

const container = document.querySelector(".gallery");

galleryCreate(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionDelay: 250,
    
 });





function galleryCreate() {
  const arr = [];

  for (let i = 0; i < galleryItems.length; i++) {
    const elm = galleryItems[i];
    const item = `
      <li class="gallery__item">
        <a class="gallery__link" href="${elm.original}">
         <img class="gallery__image" src="${elm.preview}" alt="${elm.description}" />
        </a>
      </li>
         `;

        
    arr.push(item);
  }

  return (container.innerHTML = [...arr]);
}
