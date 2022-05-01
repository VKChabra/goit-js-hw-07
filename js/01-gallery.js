import { galleryItems } from './gallery-items.js';
// Change code below this line
//preview, original, description

const gallery = document.querySelector(".gallery")

const makeGalleryItems = e => {
    const { preview, original, description } = e;

    return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>`;
};

const galleryItemsList = galleryItems.map(makeGalleryItems).join('')

gallery.insertAdjacentHTML("beforeend", galleryItemsList)

function showImgOrig(link) {
    const escButtonCloseInstance = e => {
        if (e.key === 'Escape') {
        instance.close();
        }
    }
    
    const instance = basicLightbox.create(`<img class='gallery__modal-img' src=${link}>`,
    {
        onShow: () => document.addEventListener('keydown', escButtonCloseInstance),
        onClose: () => document.removeEventListener('keydown', escButtonCloseInstance),
    },);

    instance.show();
}

const openGalleryModal = e => {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return
    }
    
    // instance.element().querySelector('.gallery__modal-img').src = e.target.dataset.source;
    
    showImgOrig(e.target.dataset.source);
};

gallery.addEventListener("click", openGalleryModal);