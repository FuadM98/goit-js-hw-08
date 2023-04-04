import { galleryItems } from './gallery-items.js';

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

const galleryListRef = document.querySelector('.gallery');

galleryListRef.addEventListener('click', onGalleryItemsClick);

const galleryMarkupRef = createListItemMarkup(galleryItems);

function createListItemMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
 <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
`;
    })
    .join('');
}

galleryListRef.insertAdjacentHTML('afterbegin', galleryMarkupRef);

function onGalleryItemsClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
}

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 250,
  captionSelector: 'img',
  captionType: 'attr',
  captionPosition: 'bottom',
  captionsData: 'alt',
});

// galleryListRef.on('show.simplelightbox', function () {
//   lightbox.open();
// });
