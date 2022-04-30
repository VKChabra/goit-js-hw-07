import { galleryItems } from './gallery-items.js';
// Change code below this line
//preview, original, description

const gallery = document.querySelector(".gallery")

const makeGalleryItems = element => {
    const { preview, original, description } = element;

    return `
        <a class="gallery__item" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>`;
};

const galleryItemsList = galleryItems.map(makeGalleryItems).join('')

gallery.insertAdjacentHTML("beforeend", galleryItemsList)

const lightbox = new SimpleLightbox('.gallery a', {
    close: true,
    captions: true,
    captionsData: 'alt',
    captionDelay: '250',
    captionPosition: 'bottom',
    showCounter: true,
    doubleTapZoom: 2,
});