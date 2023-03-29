import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const makeGalleryCard = ({preview, original, description}) => 
  `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
     <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`
;

const markup = galleryItems.map((element) => makeGalleryCard(element)).join("");

galleryEl.insertAdjacentHTML("afterbegin", markup);

let gallery = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});
