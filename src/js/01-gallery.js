import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const galleryEl = document.querySelector('.gallery');


const makeNewGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`;
  })
  .join('');


galleryEl.innerHTML = makeNewGallery;


const lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captions: true,
  captionsData: 'alt',
  captionSelector: 'img',
  captionPosition: 'bottom',
  captionDelay: 250,
});


galleryEl.insertAdjacentHTML('beforeend', makeNewGallery);


function createGalleryItemsMarkup(items) {
    return galleryItems
    .map(({ preview, original, description}) => {
        return `
            <div class="gallery__item">
                <a class="gallery__item" href="${original}" rel='noreferrer noopener nofollow'>
                    <img class="gallery__image"
                    src="${preview}"
                    alt="${description}"
                    />
                </a>
            </div> 
        `;
    })
    .join('');
};


let lightboxGallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
