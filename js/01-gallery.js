import { galleryItems } from './gallery-items.js';
// Change code below this line
//preview, original, description

const gallery = document.querySelector(".gallery")

const makeGalleryItems = element => {
    const { preview, original, description } = element;

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

const instance = basicLightbox.create(`<img class='gallery__modal-img' src=''>`,
    {
        onShow: () => document.addEventListener('keydown', escButtonCloseInstance),
    },
);

const escButtonCloseInstance = e => {
    if (e.key === 'Escape') {
      instance.close();
    }
}

const openGalleryModal = e => {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return
    }
    instance.element().querySelector('.gallery__modal-img').src = e.target.dataset.source;
    instance.show();
};

gallery.addEventListener("click", openGalleryModal);