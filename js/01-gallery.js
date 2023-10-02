import { galleryItems } from "./gallery-items.js";
// Change code below this line

const container = document.querySelector(".gallery");

galleryCreate(galleryItems);

container.addEventListener("click", imgClick);

function imgClick(evt) {
    evt.preventDefault()
    if (evt.target === evt.currentTarget) {
    return;
  }
  const elm = galleryItems.find((item) => item.description === evt.target.alt);
  
  
  
  const instance = basicLightbox.create(`
  <img src="${elm.original}" alt="${elm.description}" width="800" height="600">
  
`)

instance.show()

document.addEventListener('keyup', event =>{
    if (event.key !== 'Escape') {
        return
    }
    instance.close()
    console.log(event)})



}

function galleryCreate() {
  const arr = [];

  for (let i = 0; i < galleryItems.length; i++) {
    const elm = galleryItems[i];
    const item = `<a class="gallery__link" href="large-image.jpg">
      <img class="gallery__image" src="${elm.preview}" data-source="${elm.original}" alt="${elm.description}"
      />
    </a>`

    arr.push(item);
  }

  return (container.innerHTML = [...arr]);
}





